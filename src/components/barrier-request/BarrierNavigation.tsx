
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { useBarrierForm } from "@/contexts/BarrierFormContext";

interface BarrierNavigationProps {
  currentStep: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSubmit: () => void;
}

const BarrierNavigation = ({ 
  currentStep, 
  handlePrevious, 
  handleNext, 
  handleSubmit 
}: BarrierNavigationProps) => {
  const { hasFormErrors } = useBarrierForm();
  
  if (currentStep >= 5) return null;
  
  const isCurrentStepValid = !hasFormErrors(currentStep);
  
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
      
      {currentStep < 4 ? (
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

export default BarrierNavigation;
