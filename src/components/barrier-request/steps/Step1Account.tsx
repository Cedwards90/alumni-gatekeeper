
import React from "react";

const Step1Account = () => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 1: Account & Login</h3>
      <p className="mb-6">You're already logged in to your account! We have the following information on file:</p>
      
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
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-medium">(555) 123-4567</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Training Program</p>
            <p className="font-medium">Web Development Bootcamp</p>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mb-6">
        If any of this information is incorrect, please update your profile before continuing.
      </p>
    </div>
  );
};

export default Step1Account;
