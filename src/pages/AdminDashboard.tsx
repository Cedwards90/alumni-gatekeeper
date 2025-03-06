
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
          <div>
            <h2 className="text-2xl font-semibold mb-2">Admin Dashboard</h2>
            <p className="text-muted-foreground">Manage and track requests, approve or deny applications, and handle referral codes.</p>
          </div>
          
          <AdminTabs />
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminDashboard;
