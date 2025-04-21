from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'role', 'is_staff')
    search_fields = ('email',)
    ordering = ('email',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('role', 'is_staff', 'is_active')}),
    )
