
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import NotificationsBell from "@/components/notifications/NotificationsBell";
import { NotificationsProvider } from "@/contexts/NotificationsContext";
import { LayoutDashboard, Shield } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdmin, setUserRole } = useUserRole();

  const handleSignOut = () => {
    // Clear user role from localStorage
    setUserRole(null);
    toast.success("Signed out successfully");
    navigate("/sign-in");
  };

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      adminOnly: false,
    },
    ...(isAdmin ? [{
      name: "Admin",
      href: "/admin",
      icon: Shield,
      adminOnly: true,
    }] : []),
  ];

  return (
    <NotificationsProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-evolve-800">Evolve Foundation</h1>
              
              {/* Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  
                  return (
                    <Button
                      key={item.name}
                      variant="ghost"
                      asChild
                      className={cn(
                        "flex items-center gap-2 text-sm transition-colors",
                        isActive 
                          ? "bg-evolve-50 text-evolve-700 hover:bg-evolve-100" 
                          : "text-gray-600 hover:text-evolve-700 hover:bg-evolve-50"
                      )}
                    >
                      <Link to={item.href}>
                        <Icon size={16} />
                        {item.name}
                      </Link>
                    </Button>
                  );
                })}
              </nav>

              {/* Mobile Navigation Toggle - Simple version for now */}
              <div className="md:hidden">
                <select 
                  value={location.pathname}
                  onChange={(e) => navigate(e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1 bg-white"
                >
                  {navItems.map((item) => (
                    <option key={item.name} value={item.href}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3">
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
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {location.pathname === '/dashboard' && (
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
