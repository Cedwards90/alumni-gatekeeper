
interface AlumniStepProgressProps {
  currentStep: number;
}

const AlumniStepProgress = ({ currentStep }: AlumniStepProgressProps) => {
  return (
    <div className="relative mb-10">
      <div className="overflow-hidden h-2 mb-6 text-xs flex bg-gray-200 rounded-full">
        <div 
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-evolve-600 transition-all duration-500"
          style={{ width: `${currentStep * 20}%` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <div className={`text-xs ${currentStep >= 1 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Verification</div>
        <div className={`text-xs ${currentStep >= 2 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Eligibility</div>
        <div className={`text-xs ${currentStep >= 3 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Request Form</div>
        <div className={`text-xs ${currentStep >= 4 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Review</div>
        <div className={`text-xs ${currentStep >= 5 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Tracking</div>
      </div>
    </div>
  );
};

export default AlumniStepProgress;
