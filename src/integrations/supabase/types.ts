export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      documents: {
        Row: {
          created_at: string | null
          description: string | null
          document_type: Database["public"]["Enums"]["document_type"]
          file_path: string
          file_size: number
          id: string
          mime_type: string
          original_filename: string
          request_id: string
          uploaded_by: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          document_type?: Database["public"]["Enums"]["document_type"]
          file_path: string
          file_size: number
          id?: string
          mime_type: string
          original_filename: string
          request_id: string
          uploaded_by: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          document_type?: Database["public"]["Enums"]["document_type"]
          file_path?: string
          file_size?: number
          id?: string
          mime_type?: string
          original_filename?: string
          request_id?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "requests"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          read_at: string | null
          request_id: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          read_at?: string | null
          request_id?: string | null
          title: string
          type?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          read_at?: string | null
          request_id?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      requests: {
        Row: {
          admin_notes: string | null
          alumni_support_type: string | null
          approved_amount: number | null
          approved_at: string | null
          assigned_admin_id: string | null
          barrier_type: string | null
          completed_at: string | null
          created_at: string | null
          denial_reason: string | null
          description: string
          id: string
          needed_by_date: string | null
          requested_amount: number | null
          requested_date: string | null
          status: Database["public"]["Enums"]["request_status"]
          title: string
          type: Database["public"]["Enums"]["request_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          alumni_support_type?: string | null
          approved_amount?: number | null
          approved_at?: string | null
          assigned_admin_id?: string | null
          barrier_type?: string | null
          completed_at?: string | null
          created_at?: string | null
          denial_reason?: string | null
          description: string
          id?: string
          needed_by_date?: string | null
          requested_amount?: number | null
          requested_date?: string | null
          status?: Database["public"]["Enums"]["request_status"]
          title: string
          type: Database["public"]["Enums"]["request_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          alumni_support_type?: string | null
          approved_amount?: number | null
          approved_at?: string | null
          assigned_admin_id?: string | null
          barrier_type?: string | null
          completed_at?: string | null
          created_at?: string | null
          denial_reason?: string | null
          description?: string
          id?: string
          needed_by_date?: string | null
          requested_amount?: number | null
          requested_date?: string | null
          status?: Database["public"]["Enums"]["request_status"]
          title?: string
          type?: Database["public"]["Enums"]["request_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          date_of_birth: string | null
          email: string
          first_name: string
          id: string
          is_active: boolean | null
          last_login_at: string | null
          last_name: string
          phone: string | null
          profile_completed: boolean | null
          role: Database["public"]["Enums"]["user_role"]
          terms_accepted: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          first_name: string
          id: string
          is_active?: boolean | null
          last_login_at?: string | null
          last_name: string
          phone?: string | null
          profile_completed?: boolean | null
          role?: Database["public"]["Enums"]["user_role"]
          terms_accepted?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          first_name?: string
          id?: string
          is_active?: boolean | null
          last_login_at?: string | null
          last_name?: string
          phone?: string | null
          profile_completed?: boolean | null
          role?: Database["public"]["Enums"]["user_role"]
          terms_accepted?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "student" | "alumni" | "user"
      document_type: "supporting_document" | "receipt" | "transcript" | "other"
      request_status:
        | "draft"
        | "submitted"
        | "under_review"
        | "approved"
        | "denied"
        | "completed"
      request_type: "barrier" | "alumni"
      user_role: "student" | "alumni" | "admin" | "super_admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "student", "alumni", "user"],
      document_type: ["supporting_document", "receipt", "transcript", "other"],
      request_status: [
        "draft",
        "submitted",
        "under_review",
        "approved",
        "denied",
        "completed",
      ],
      request_type: ["barrier", "alumni"],
      user_role: ["student", "alumni", "admin", "super_admin"],
    },
  },
} as const
