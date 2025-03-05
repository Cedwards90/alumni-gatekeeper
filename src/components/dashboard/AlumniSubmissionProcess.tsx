
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const AlumniSubmissionProcess = () => {
  const navigate = useNavigate();

  const handleNewAlumniRequest = () => {
    navigate("/alumni-request");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-start gap-3">
        <GraduationCap className="text-evolve-600 shrink-0" />
        <div>
          <h3 className="text-lg font-medium mb-2">Alumni Request Submission Process</h3>
          <p className="text-muted-foreground mb-4">
            Graduated from an Evolve Foundation program? Alumni requests provide career development support,
            professional resources, work readiness assistance, and health & wellness services.
          </p>
          <Button 
            className="bg-evolve-600 hover:bg-evolve-700"
            onClick={handleNewAlumniRequest}
          >
            Start Alumni Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlumniSubmissionProcess;
