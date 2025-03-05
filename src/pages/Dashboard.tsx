
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import RequestSummary from "@/components/dashboard/RequestSummary";
import CollapsibleInfo from "@/components/dashboard/CollapsibleInfo";
import BarrierTypesContent from "@/components/dashboard/BarrierTypes";
import AlumniTypesContent from "@/components/dashboard/AlumniTypes";
import SubmissionProcess from "@/components/dashboard/SubmissionProcess";
import LoadingState from "@/components/dashboard/LoadingState";

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

  const handleNewBarrierRequest = () => {
    navigate("/barrier-request");
  };

  return (
    <DashboardLayout>
      {isLoading ? (
        <LoadingState />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <RequestSummary
              title="Barrier Requests"
              description="Manage and track barrier requests."
              count={0}
              onNewRequest={handleNewBarrierRequest}
            />

            <RequestSummary
              title="Alumni Requests"
              description="Track and process alumni requests."
              count={0}
            />
          </div>

          <CollapsibleInfo title="What Qualifies as a Barrier Request?">
            <BarrierTypesContent />
          </CollapsibleInfo>

          <CollapsibleInfo title="What Qualifies as an Alumni Request?">
            <AlumniTypesContent />
          </CollapsibleInfo>

          <SubmissionProcess />
        </>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
