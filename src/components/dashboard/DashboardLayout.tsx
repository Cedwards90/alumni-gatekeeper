
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import NotificationsBell from "@/components/notifications/NotificationsBell";
import { NotificationsProvider } from "@/contexts/NotificationsContext";
import { LayoutDashboard, Shield } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  // In a real app, this would be determined by the user's role from authentication
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSignOut = () => {
    // In a real app, you would call a sign out API here
    toast.success("Signed out successfully");
    navigate("/sign-in");
  };

  return (
    <NotificationsProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-evolve-800">Evolve Foundation</h1>
            <div className="flex items-center gap-3">
              {isAdmin && (
                <div className="mr-2">
                  <div className="hidden sm:flex gap-3">
                    <Button 
                      variant="ghost"
                      asChild
                      className="flex items-center gap-1 text-sm"
                    >
                      <Link to="/dashboard">
                        <LayoutDashboard size={16} />
                        Dashboard
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost"
                      asChild
                      className="flex items-center gap-1 text-sm"
                    >
                      <Link to="/admin">
                        <Shield size={16} />
                        Admin
                      </Link>
                    </Button>
                  </div>
                  <div className="sm:hidden">
                    <Button 
                      variant="ghost"
                      asChild
                      className="flex items-center gap-1 text-sm"
                    >
                      <Link to={window.location.pathname.includes('admin') ? '/dashboard' : '/admin'}>
                        {window.location.pathname.includes('admin') ? (
                          <>
                            <LayoutDashboard size={16} />
                            Dashboard
                          </>
                        ) : (
                          <>
                            <Shield size={16} />
                            Admin
                          </>
                        )}
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
              <NotificationsBell />
              <Button 
                variant="outline" 
                onClick={handleSignOut}
                className="text-sm"
              >
                Sign out
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {window.location.pathname !== '/admin' && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Welcome to your Dashboard</h2>
              <p className="text-muted-foreground">Track and manage your barrier and alumni requests.</p>
            </div>
          )}

          {children}
        </main>
      </div>
    </NotificationsProvider>
  );
};

export default DashboardLayout;
