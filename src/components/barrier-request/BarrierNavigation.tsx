
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface BarrierNavigationProps {
  currentStep: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSubmit: () => void;
}

const BarrierNavigation = ({ currentStep, handlePrevious, handleNext, handleSubmit }: BarrierNavigationProps) => {
  if (currentStep >= 5) return null;
  
  return (
    <div className="flex justify-between mt-8">
      <Button
        variant="outline"
        onClick={handlePrevious}
        disabled={currentStep === 1}
      >
        Previous
      </Button>
      
      {currentStep < 4 ? (
        <Button
          className="bg-evolve-600 hover:bg-evolve-700 transition-all-smooth"
          onClick={handleNext}
        >
          Next Step
          <ChevronRight size={16} />
        </Button>
      ) : (
        <Button
          className="bg-evolve-600 hover:bg-evolve-700 transition-all-smooth"
          onClick={handleSubmit}
        >
          Submit Request
        </Button>
      )}
    </div>
  );
};

export default BarrierNavigation;
