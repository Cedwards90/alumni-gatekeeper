
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

interface RequestNavigationProps {
  currentStep: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSubmit: () => void;
  maxSteps?: number;
  isCurrentStepValid?: boolean;
}

const RequestNavigation = ({ 
  currentStep, 
  handlePrevious, 
  handleNext, 
  handleSubmit,
  maxSteps = 4,
  isCurrentStepValid = true
}: RequestNavigationProps) => {
  
  if (currentStep >= 5) return null;
  
  return (
    <div className="flex justify-between mt-8">
      <Button
        variant="outline"
        onClick={handlePrevious}
        disabled={currentStep === 1}
        className="gap-2"
      >
        <ChevronLeft size={16} />
        Previous
      </Button>
      
      {currentStep < maxSteps ? (
        <Button
          className={`transition-all duration-300 ${
            isCurrentStepValid 
              ? "bg-evolve-600 hover:bg-evolve-700" 
              : "bg-evolve-400"
          }`}
          onClick={handleNext}
        >
          Next Step
          <ChevronRight size={16} />
        </Button>
      ) : (
        <Button
          className="bg-evolve-600 hover:bg-evolve-700 transition-all duration-300"
          onClick={handleSubmit}
        >
          <Check size={16} className="mr-1" />
          Submit Request
        </Button>
      )}
    </div>
  );
};

export default RequestNavigation;
