
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AdminTabs from "@/components/admin/AdminTabs";
import LoadingState from "@/components/dashboard/LoadingState";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="space-y-6">
          <div className="hero-gradient rounded-xl text-white p-6 shadow-sm">
            <h2 className="text-2xl font-playfair">Welcome, Admin!</h2>
            <p className="text-white/90">Manage and track requests, approve or deny applications.</p>
          </div>
          
          <AdminTabs />
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminDashboard;
