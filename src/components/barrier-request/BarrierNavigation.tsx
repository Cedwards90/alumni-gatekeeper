
import { useBarrierForm } from "@/contexts/BarrierFormContext";
import RequestNavigation from "@/components/common/RequestNavigation";

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
  
  const isCurrentStepValid = !hasFormErrors(currentStep);
  
  return (
    <RequestNavigation
      currentStep={currentStep}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
      handleSubmit={handleSubmit}
      isCurrentStepValid={isCurrentStepValid}
    />
  );
};

export default BarrierNavigation;
