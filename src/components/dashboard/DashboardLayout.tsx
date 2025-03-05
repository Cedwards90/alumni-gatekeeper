
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // In a real app, you would call a sign out API here
    toast.success("Signed out successfully");
    navigate("/sign-in");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-evolve-800">Evolve Foundation</h1>
          <Button 
            variant="outline" 
            onClick={handleSignOut}
            className="text-sm"
          >
            Sign out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Welcome to your Dashboard</h2>
          <p className="text-muted-foreground">Track and manage your barrier and alumni requests.</p>
        </div>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
