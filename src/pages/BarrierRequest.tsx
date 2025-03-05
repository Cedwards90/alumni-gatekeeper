
import { useState, useEffect } from "react";
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

// Context
import { BarrierFormProvider, useBarrierForm } from "@/contexts/BarrierFormContext";

const BarrierRequestContent = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("barrierCurrentStep");
    return savedStep ? parseInt(savedStep) : 1;
  });
  
  const { formData, hasFormErrors, getFormErrors, resetForm } = useBarrierForm();

  // Save current step to localStorage
  useEffect(() => {
    localStorage.setItem("barrierCurrentStep", currentStep.toString());
  }, [currentStep]);

  const handleNext = () => {
    // Validate the current step before proceeding
    if (hasFormErrors(currentStep)) {
      const errors = getFormErrors(currentStep);
      errors.forEach(error => toast.error(error));
      return;
    }

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
    // Submit form data here...
    toast.success("Your barrier request has been submitted successfully!");
    
    // Reset form data and step
    resetForm();
    localStorage.removeItem("barrierCurrentStep");
    
    // Navigate to dashboard with a short delay to allow the toast to be seen
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
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
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <Step1Account />
            </div>
          )}

          {/* Step 2: Eligibility Information */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <Step2Eligibility />
            </div>
          )}

          {/* Step 3: Request Form */}
          {currentStep === 3 && (
            <div className="animate-fade-in">
              <Step3RequestForm />
            </div>
          )}

          {/* Step 4: Review & Processing */}
          {currentStep === 4 && (
            <div className="animate-fade-in">
              <Step4Review />
            </div>
          )}

          {/* Step 5: Status Tracking */}
          {currentStep === 5 && (
            <div className="animate-fade-in">
              <Step5Tracking />
            </div>
          )}

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

// Wrap the component with the context provider
const BarrierRequest = () => {
  return (
    <BarrierFormProvider>
      <BarrierRequestContent />
    </BarrierFormProvider>
  );
};

export default BarrierRequest;
