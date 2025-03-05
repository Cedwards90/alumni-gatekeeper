
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Component imports
import BarrierHeader from "@/components/barrier-request/BarrierHeader";
import BarrierStepProgress from "@/components/barrier-request/BarrierStepProgress";
import BarrierNavigation from "@/components/barrier-request/BarrierNavigation";

// Step components
import Step1Account from "@/components/barrier-request/steps/Step1Account";
import Step2Eligibility from "@/components/barrier-request/steps/Step2Eligibility";
import Step3RequestForm from "@/components/barrier-request/steps/Step3RequestForm";
import Step4Review from "@/components/barrier-request/steps/Step4Review";
import Step5Tracking from "@/components/barrier-request/steps/Step5Tracking";

const BarrierRequest = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [barrierType, setBarrierType] = useState<string | null>(null);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = () => {
    toast.success("Your barrier request has been submitted successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BarrierHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Barrier Request Submission</h2>
          <p className="text-muted-foreground">Complete the steps below to submit your barrier request.</p>
        </div>

        {/* Progress Steps */}
        <BarrierStepProgress currentStep={currentStep} />

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-8">
          {/* Step 1: Account Information */}
          {currentStep === 1 && <Step1Account />}

          {/* Step 2: Eligibility Information */}
          {currentStep === 2 && <Step2Eligibility />}

          {/* Step 3: Request Form */}
          {currentStep === 3 && <Step3RequestForm barrierType={barrierType} setBarrierType={setBarrierType} />}

          {/* Step 4: Review & Processing */}
          {currentStep === 4 && <Step4Review barrierType={barrierType} />}

          {/* Step 5: Status Tracking */}
          {currentStep === 5 && <Step5Tracking />}

          {/* Navigation Buttons */}
          <BarrierNavigation 
            currentStep={currentStep}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
};

export default BarrierRequest;
