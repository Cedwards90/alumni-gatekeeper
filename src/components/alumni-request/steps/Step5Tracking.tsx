
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Step5Tracking = () => {
  const navigate = useNavigate();
  
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 5: Request Status Tracking</h3>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
          <div>
            <h4 className="font-medium">Submission Complete</h4>
            <p className="text-sm">Your alumni support request has been successfully submitted.</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <p>You can track the status of your request at any time by logging into your alumni dashboard.</p>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h5 className="font-medium mb-2">Alumni Support Features:</h5>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Track your request status in real-time</li>
            <li>Schedule appointments with career advisors</li>
            <li>Access alumni events and networking opportunities</li>
            <li>Connect with other graduates in your field</li>
            <li>Access continuing education resources</li>
          </ul>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button
          className="bg-evolve-600 hover:bg-evolve-700 transition-all-smooth"
          onClick={() => navigate("/dashboard")}
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Step5Tracking;
