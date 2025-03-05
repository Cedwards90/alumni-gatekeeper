
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, GraduationCap } from "lucide-react";

interface RequestSubmissionProcessProps {
  type: "barrier" | "alumni";
}

const RequestSubmissionProcess = ({ type }: RequestSubmissionProcessProps) => {
  const navigate = useNavigate();

  const handleNewRequest = () => {
    navigate(type === "barrier" ? "/barrier-request" : "/alumni-request");
  };

  const isBarrier = type === "barrier";

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-start gap-3">
        {isBarrier ? (
          <FileText className="text-evolve-600 shrink-0" />
        ) : (
          <GraduationCap className="text-evolve-600 shrink-0" />
        )}
        <div>
          <h3 className="text-lg font-medium mb-2">
            {isBarrier ? "Barrier Request Submission Process" : "Alumni Request Submission Process"}
          </h3>
          <p className="text-muted-foreground mb-4">
            {isBarrier 
              ? "Need assistance with your training program? Submit a barrier request to get help with transportation, childcare, emergency funds, educational support, or health & wellness needs."
              : "Graduated from an Evolve Foundation program? Alumni requests provide career development support, professional resources, work readiness assistance, and health & wellness services."
            }
          </p>
          <Button 
            className="bg-evolve-600 hover:bg-evolve-700"
            onClick={handleNewRequest}
          >
            {isBarrier ? "Start New Request" : "Start Alumni Request"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestSubmissionProcess;
