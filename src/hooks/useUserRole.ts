
import { useState, useEffect } from "react";

type UserRole = "admin" | "student" | null;

export const useUserRole = (): { 
  isAdmin: boolean;
  isStudent: boolean;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
} => {
  const [userRole, setUserRoleState] = useState<UserRole>(null);

  useEffect(() => {
    // Check localStorage for user role
    const storedRole = localStorage.getItem("userRole") as UserRole;
    if (storedRole) {
      setUserRoleState(storedRole);
    }
  }, []);

  const setUserRole = (role: UserRole) => {
    if (role) {
      localStorage.setItem("userRole", role);
    } else {
      localStorage.removeItem("userRole");
    }
    setUserRoleState(role);
  };

  return {
    isAdmin: userRole === "admin",
    isStudent: userRole === "student",
    userRole,
    setUserRole,
  };
};
