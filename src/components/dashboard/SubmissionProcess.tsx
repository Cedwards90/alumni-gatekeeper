
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const SubmissionProcess = () => {
  const navigate = useNavigate();

  const handleNewBarrierRequest = () => {
    navigate("/barrier-request");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-start gap-3">
        <FileText className="text-evolve-600 shrink-0" />
        <div>
          <h3 className="text-lg font-medium mb-2">Barrier Request Submission Process</h3>
          <p className="text-muted-foreground mb-4">
            Need assistance with your training program? Submit a barrier request to get help with transportation, 
            childcare, emergency funds, educational support, or health & wellness needs.
          </p>
          <Button 
            className="bg-evolve-600 hover:bg-evolve-700"
            onClick={handleNewBarrierRequest}
          >
            Start New Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionProcess;
