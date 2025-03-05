
import { Clock, FileText, CheckCircle2 } from "lucide-react";

interface Step4ReviewProps {
  supportType: string | null;
}

const Step4Review = ({ supportType }: Step4ReviewProps) => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 4: Review & Processing</h3>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h4 className="font-medium mb-4">Request Summary</h4>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Support Type</p>
              <p className="font-medium">{supportType ? supportType.charAt(0).toUpperCase() + supportType.slice(1) : "Not selected"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Submission Date</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Description</p>
            <p className="font-medium">Sample description of the alumni support request.</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Supporting Documents</p>
            <p className="font-medium">None attached</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Clock className="text-amber-500 mt-0.5 shrink-0" size={20} />
          <div>
            <h5 className="font-medium">Review (3-5 Business Days)</h5>
            <p className="text-sm text-gray-600">Our alumni team will review your request and determine the appropriate support.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <FileText className="text-amber-500 mt-0.5 shrink-0" size={20} />
          <div>
            <h5 className="font-medium">Consultation (If Needed)</h5>
            <p className="text-sm text-gray-600">A career advisor may contact you to discuss your request in more detail.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-amber-500 mt-0.5 shrink-0" size={20} />
          <div>
            <h5 className="font-medium">Implementation Plan</h5>
            <p className="text-sm text-gray-600">You'll receive a detailed plan for how we can support your request.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Review;
