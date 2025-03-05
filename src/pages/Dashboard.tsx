
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CollapsibleInfo from "@/components/dashboard/CollapsibleInfo";
import BarrierTypesContent from "@/components/dashboard/BarrierTypes";
import AlumniTypesContent from "@/components/dashboard/AlumniTypes";
import RequestSubmissionProcess from "@/components/dashboard/RequestSubmissionProcess";
import LoadingState from "@/components/dashboard/LoadingState";
import RecentNotifications from "@/components/dashboard/RecentNotifications";

const Dashboard = () => {
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
        <>
          <RecentNotifications />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <RequestSubmissionProcess type="barrier" count={0} />
            <RequestSubmissionProcess type="alumni" count={0} />
          </div>

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
