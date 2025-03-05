
import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const Step2Eligibility = () => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 2: Eligibility Criteria</h3>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <h4 className="font-medium mb-2">Eligibility Requirements:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>You must be an active participant in an Evolve Foundation training program.</li>
          <li>Your request must be directly related to training (not employment or ongoing financial support).</li>
          <li>Emergency funds are for urgent, one-time assistance only.</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-3">What We Cover:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Transportation</p>
              <p className="text-xs text-gray-600">Bus passes, gas cards, ride-share stipends</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Childcare</p>
              <p className="text-xs text-gray-600">Short-term assistance for training-related needs</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Emergency Funds</p>
              <p className="text-xs text-gray-600">Eviction prevention, medical emergencies, critical expenses</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Educational Support</p>
              <p className="text-xs text-gray-600">Tutoring, learning resources</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Health & Wellness</p>
              <p className="text-xs text-gray-600">Mental health support, medical assistance</p>
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
              <p className="font-medium text-sm">Ongoing Financial Support</p>
              <p className="text-xs text-gray-600">No living stipends</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
            <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Non-Training Requests</p>
              <p className="text-xs text-gray-600">Employment assistance, personal expenses</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
            <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-medium text-sm">Long-Term Assistance</p>
              <p className="text-xs text-gray-600">Non-urgent or ongoing needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Eligibility;
