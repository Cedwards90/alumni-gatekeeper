
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Award, 
  Heart,
  Shirt, 
  BookOpen, 
  Upload 
} from "lucide-react";

interface Step3RequestFormProps {
  supportType: string | null;
  setSupportType: (type: string) => void;
}

const Step3RequestForm = ({ supportType, setSupportType }: Step3RequestFormProps) => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 3: Request Form</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Type of Support (Select One)</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button 
              variant={supportType === "employment" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "employment" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("employment")}
            >
              <Briefcase size={18} />
              <span>Employment Stability</span>
            </Button>
            <Button 
              variant={supportType === "professional" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "professional" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("professional")}
            >
              <Award size={18} />
              <span>Professional Development</span>
            </Button>
            <Button 
              variant={supportType === "workReadiness" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "workReadiness" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("workReadiness")}
            >
              <Shirt size={18} />
              <span>Work Readiness</span>
            </Button>
            <Button 
              variant={supportType === "health" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "health" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("health")}
            >
              <Heart size={18} />
              <span>Health & Wellness</span>
            </Button>
            <Button 
              variant={supportType === "education" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "education" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("education")}
            >
              <BookOpen size={18} />
              <span>Continuing Education</span>
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
            placeholder="Please describe how this support will help advance your career or employment stability..."
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
