
import RequestNavigation from "@/components/common/RequestNavigation";

interface AlumniNavigationProps {
  currentStep: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSubmit: () => void;
}

const AlumniNavigation = ({ 
  currentStep, 
  handlePrevious, 
  handleNext, 
  handleSubmit 
}: AlumniNavigationProps) => {
  return (
    <RequestNavigation
      currentStep={currentStep}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
      handleSubmit={handleSubmit}
    />
  );
};

export default AlumniNavigation;
