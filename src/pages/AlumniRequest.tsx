
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AlumniHeader from "@/components/alumni-request/AlumniHeader";
import AlumniStepProgress from "@/components/alumni-request/AlumniStepProgress";
import Step1Verification from "@/components/alumni-request/steps/Step1Verification";
import Step2Eligibility from "@/components/alumni-request/steps/Step2Eligibility";
import Step3RequestForm from "@/components/alumni-request/steps/Step3RequestForm";
import Step4Review from "@/components/alumni-request/steps/Step4Review";
import Step5Tracking from "@/components/alumni-request/steps/Step5Tracking";
import AlumniNavigation from "@/components/alumni-request/AlumniNavigation";

const AlumniRequest = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [supportType, setSupportType] = useState<string | null>(null);

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
    toast.success("Your alumni request has been submitted successfully!");
    navigate("/dashboard");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Verification />;
      case 2:
        return <Step2Eligibility />;
      case 3:
        return <Step3RequestForm supportType={supportType} setSupportType={setSupportType} />;
      case 4:
        return <Step4Review supportType={supportType} />;
      case 5:
        return <Step5Tracking />;
      default:
        return <Step1Verification />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AlumniHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Alumni Request Submission</h2>
          <p className="text-muted-foreground">Complete the steps below to submit your alumni support request.</p>
        </div>

        {/* Progress Steps */}
        <AlumniStepProgress currentStep={currentStep} />

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-8">
          {renderCurrentStep()}
          
          {/* Navigation Buttons */}
          <AlumniNavigation 
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

export default AlumniRequest;
