
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, GraduationCap, PlusCircle } from "lucide-react";

interface RequestSubmissionProcessProps {
  type: "barrier" | "alumni";
  count: number;
}

const RequestSubmissionProcess = ({ type, count }: RequestSubmissionProcessProps) => {
  const navigate = useNavigate();

  const handleNewRequest = () => {
    navigate(type === "barrier" ? "/barrier-request" : "/alumni-request");
  };

  const isBarrier = type === "barrier";
  const title = isBarrier ? "Barrier Requests" : "Alumni Requests";
  const viewRequestsLabel = isBarrier ? "View Barrier Requests" : "View Alumni Requests";
  const newRequestLabel = isBarrier ? "New Barrier Request" : "New Alumni Request";

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-start gap-3">
        {isBarrier ? (
          <FileText className="text-evolve-600 shrink-0" />
        ) : (
          <GraduationCap className="text-evolve-600 shrink-0" />
        )}
        <div className="w-full">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">
            {isBarrier 
              ? "Need assistance with your training program? Submit a barrier request to get help with transportation, childcare, emergency funds, educational support, or health & wellness needs."
              : "Graduated from an Evolve Foundation program? Alumni requests provide career development support, professional resources, work readiness assistance, and health & wellness services."
            }
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 text-center mb-4">
            <p className="text-2xl font-semibold text-evolve-600">{count}</p>
            <p className="text-sm text-muted-foreground">Active requests</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button className="bg-evolve-600 hover:bg-evolve-700">
              {viewRequestsLabel}
            </Button>
            <Button 
              className="flex items-center gap-1" 
              variant="outline"
              onClick={handleNewRequest}
            >
              <PlusCircle size={16} />
              {newRequestLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSubmissionProcess;
