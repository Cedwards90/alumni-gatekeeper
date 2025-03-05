
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

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

        {isLoading ? (
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
              <h3 className="text-lg font-medium mb-2">Barrier Requests</h3>
              <p className="text-muted-foreground mb-4">Manage and track barrier requests.</p>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-semibold text-evolve-600">0</p>
                <p className="text-sm text-muted-foreground">Active requests</p>
              </div>
              <Button className="w-full mt-4 bg-evolve-600 hover:bg-evolve-700">
                View Requests
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
              <h3 className="text-lg font-medium mb-2">Alumni Requests</h3>
              <p className="text-muted-foreground mb-4">Track and process alumni requests.</p>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-semibold text-evolve-600">0</p>
                <p className="text-sm text-muted-foreground">Active requests</p>
              </div>
              <Button className="w-full mt-4 bg-evolve-600 hover:bg-evolve-700">
                View Requests
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
