
import React from "react";
import { Clock, FileText, CheckCircle2 } from "lucide-react";
import { useBarrierForm } from "@/contexts/BarrierFormContext";

const Step4Review = () => {
  const { formData } = useBarrierForm();
  const { barrierType, description, fileNames } = formData;

  const formatBarrierType = (type: string | null) => {
    if (!type) return "Not selected";
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 4: Review & Processing</h3>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h4 className="font-medium mb-4">Request Summary</h4>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Barrier Type</p>
              <p className="font-medium">{formatBarrierType(barrierType)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Submission Date</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Description</p>
            <p className="font-medium">{description || "No description provided"}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Supporting Documents</p>
            {fileNames.length > 0 ? (
              <div className="mt-2 space-y-1">
                {fileNames.map((fileName, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FileText size={16} className="text-evolve-600" />
                    <span className="text-sm">{fileName}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-medium">None attached</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Clock className="text-amber-500 mt-0.5 shrink-0" size={20} />
          <div>
            <h5 className="font-medium">Review (48 Hours)</h5>
            <p className="text-sm text-gray-600">Our team will verify your eligibility and review any documentation provided.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <FileText className="text-amber-500 mt-0.5 shrink-0" size={20} />
          <div>
            <h5 className="font-medium">Follow-Up (If Needed)</h5>
            <p className="text-sm text-gray-600">We may contact you if additional information is required.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-amber-500 mt-0.5 shrink-0" size={20} />
          <div>
            <h5 className="font-medium">Decision Communication</h5>
            <p className="text-sm text-gray-600">Your approval or denial will be communicated via email and on your portal.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Review;
