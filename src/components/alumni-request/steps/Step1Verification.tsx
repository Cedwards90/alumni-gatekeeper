
const Step1Verification = () => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 1: Alumni Verification</h3>
      <p className="mb-6">We have confirmed your alumni status with the following information:</p>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">Jane Doe</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-medium">jane.doe@example.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Graduation Date</p>
            <p className="font-medium">May 15, 2023</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Program Completed</p>
            <p className="font-medium">Web Development Bootcamp</p>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mb-6">
        If any of this information is incorrect, please contact our alumni support team before continuing.
      </p>
    </div>
  );
};

export default Step1Verification;
