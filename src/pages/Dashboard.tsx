
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CollapsibleInfo from "@/components/dashboard/CollapsibleInfo";
import BarrierTypesContent from "@/components/dashboard/BarrierTypes";
import AlumniTypesContent from "@/components/dashboard/AlumniTypes";
import RequestSubmissionProcess from "@/components/dashboard/RequestSubmissionProcess";
import LoadingState from "@/components/dashboard/LoadingState";
import RecentNotifications from "@/components/dashboard/RecentNotifications";
import ReferralCodeManager from "@/components/admin/ReferralCodeManager";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAdmin } = useUserRole();

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
        <>
          <RecentNotifications />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <RequestSubmissionProcess type="barrier" count={0} />
            <RequestSubmissionProcess type="alumni" count={0} />
          </div>

          {isAdmin && (
            <div className="mb-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Admin Tools</h3>
                    <p className="text-muted-foreground">Access the admin dashboard to manage requests and referral codes</p>
                  </div>
                  <Button asChild className="bg-evolve-600 hover:bg-evolve-700">
                    <Link to="/admin" className="flex items-center gap-2">
                      <Shield size={16} />
                      Admin Dashboard
                    </Link>
                  </Button>
                </div>
              </div>
              <ReferralCodeManager />
            </div>
          )}

          <CollapsibleInfo title="What Qualifies as a Barrier Request?">
            <BarrierTypesContent />
          </CollapsibleInfo>

          <CollapsibleInfo title="What Qualifies as an Alumni Request?">
            <AlumniTypesContent />
          </CollapsibleInfo>
        </>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
