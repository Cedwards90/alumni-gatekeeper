
-- 1) Enable RLS on key tables (safe precondition for existing policies)
alter table if exists public.requests enable row level security;
alter table if exists public.documents enable row level security;
alter table if exists public.notifications enable row level security;
alter table if exists public.users enable row level security;

-- 2) Create roles enum (idempotent)
do $$
begin
  if not exists (select 1 from pg_type where typname = 'app_role') then
    create type public.app_role as enum ('admin','moderator','student','alumni','user');
  end if;
end $$;

-- 3) Create user_roles table (references public.users, not auth.users)
create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- 4) Security definer function for role checks with locked search_path
create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id
      and role = _role
  );
$$;

-- 5) RLS for user_roles
-- Users can see their own roles
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='public' and tablename='user_roles'
      and policyname='Users can view their roles'
  ) then
    create policy "Users can view their roles"
      on public.user_roles
      for select
      using (auth.uid() = user_id);
  end if;
end $$;

-- Admins can view all roles
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='public' and tablename='user_roles'
      and policyname='Admins can view all roles'
  ) then
    create policy "Admins can view all roles"
      on public.user_roles
      for select
      using (public.has_role(auth.uid(), 'admin'));
  end if;
end $$;

-- Admins manage roles
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='public' and tablename='user_roles'
      and policyname='Admins can insert roles'
  ) then
    create policy "Admins can insert roles"
      on public.user_roles
      for insert
      with check (public.has_role(auth.uid(), 'admin'));
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='public' and tablename='user_roles'
      and policyname='Admins can update roles'
  ) then
    create policy "Admins can update roles"
      on public.user_roles
      for update
      using (public.has_role(auth.uid(), 'admin'));
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='public' and tablename='user_roles'
      and policyname='Admins can delete roles'
  ) then
    create policy "Admins can delete roles"
      on public.user_roles
      for delete
      using (public.has_role(auth.uid(), 'admin'));
  end if;
end $$;

-- 6) Admin policies on existing tables (without weakening user policies)
-- Requests: Admins can view/update all rows
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='public' and tablename='requests'
      and policyname='Admins can view all requests'
  ) then
    create policy "Admins can view all requests"
      on public.requests
      for select
      using (public.has_role(auth.uid(), 'admin'));
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='public' and tablename='requests'
      and policyname='Admins can update all requests'
  ) then
    create policy "Admins can update all requests"
      on public.requests
      for update
      using (public.has_role(auth.uid(), 'admin'));
  end if;
end $$;

-- Documents: Admins can view all documents
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='public' and tablename='documents'
      and policyname='Admins can view all documents'
  ) then
    create policy "Admins can view all documents"
      on public.documents
      for select
      using (public.has_role(auth.uid(), 'admin'));
  end if;
end $$;

-- Notifications: allow admins to insert notifications
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='public' and tablename='notifications'
      and policyname='Admins can insert notifications'
  ) then
    create policy "Admins can insert notifications"
      on public.notifications
      for insert
      with check (public.has_role(auth.uid(), 'admin'));
  end if;
end $$;

-- 7) Lock search_path on existing functions (hardening)
do $$
begin
  if exists (select 1 from pg_proc p
             join pg_namespace n on n.oid = p.pronamespace
             where n.nspname='public' and p.proname='handle_new_user' and p.pronargs=0)
  then
    alter function public.handle_new_user() set search_path = public;
  end if;
end $$;

do $$
begin
  if exists (select 1 from pg_proc p
             join pg_namespace n on n.oid = p.pronamespace
             where n.nspname='public' and p.proname='is_admin' and p.pronargs=0)
  then
    alter function public.is_admin() set search_path = public;
  end if;
end $$;

do $$
begin
  if exists (select 1 from pg_proc p
             join pg_namespace n on n.oid = p.pronamespace
             where n.nspname='public' and p.proname='update_updated_at_column' and p.pronargs=0)
  then
    alter function public.update_updated_at_column() set search_path = public;
  end if;
end $$;
