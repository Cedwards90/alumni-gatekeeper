
import React from "react";
import { Button } from "@/components/ui/button";
import { Car, Users, DollarSign, GraduationCap, Heart, Upload } from "lucide-react";

interface Step3RequestFormProps {
  barrierType: string | null;
  setBarrierType: (type: string) => void;
}

const Step3RequestForm = ({ barrierType, setBarrierType }: Step3RequestFormProps) => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 3: Request Form</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Type of Barrier (Select One)</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button 
              variant={barrierType === "transportation" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${barrierType === "transportation" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setBarrierType("transportation")}
            >
              <Car size={18} />
              <span>Transportation</span>
            </Button>
            <Button 
              variant={barrierType === "childcare" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${barrierType === "childcare" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setBarrierType("childcare")}
            >
              <Users size={18} />
              <span>Childcare</span>
            </Button>
            <Button 
              variant={barrierType === "emergency" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${barrierType === "emergency" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setBarrierType("emergency")}
            >
              <DollarSign size={18} />
              <span>Emergency Funds</span>
            </Button>
            <Button 
              variant={barrierType === "education" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${barrierType === "education" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setBarrierType("education")}
            >
              <GraduationCap size={18} />
              <span>Educational Support</span>
            </Button>
            <Button 
              variant={barrierType === "health" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${barrierType === "health" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setBarrierType("health")}
            >
              <Heart size={18} />
              <span>Health & Wellness</span>
            </Button>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description of Need
          </label>
          <textarea
            id="description"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-evolve-500"
            placeholder="Please describe your barrier and how it impacts your training..."
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Supporting Documents (if applicable)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              Drag and drop files here, or <span className="text-evolve-600">browse</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Accepts PDF, JPEG, PNG (Max: 5MB per file)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3RequestForm;
