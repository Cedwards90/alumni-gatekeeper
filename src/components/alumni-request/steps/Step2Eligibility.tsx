
import { CheckCircle2, XCircle } from "lucide-react";

const Step2Eligibility = () => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 2: Eligibility Criteria</h3>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <h4 className="font-medium mb-2">Alumni Support Eligibility:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>You must be a verified graduate of an Evolve Foundation program.</li>
          <li>Your request must be directly related to career development or employment support.</li>
          <li>Support is available for up to 24 months after graduation.</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-3">What We Cover:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Employment Stability</p>
              <p className="text-xs text-gray-600">Job transition support and employer connections</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Professional Development</p>
              <p className="text-xs text-gray-600">Resume building, interview coaching, entrepreneurial support</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Work Readiness</p>
              <p className="text-xs text-gray-600">Tools, safety gear, and attire for employment</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Health & Wellness</p>
              <p className="text-xs text-gray-600">Mental health resources and wellness programs</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-3">What We Do Not Cover:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
            <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Financial Support</p>
              <p className="text-xs text-gray-600">Ongoing financial support unrelated to career development</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
            <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Personal Expenses</p>
              <p className="text-xs text-gray-600">Non-employment-related personal expenses</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
            <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Training Needs</p>
              <p className="text-xs text-gray-600">Training-related requests (covered under Barrier Requests)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Eligibility;
