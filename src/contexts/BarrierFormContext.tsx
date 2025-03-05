
import React, { createContext, useContext, useState, useEffect } from "react";

// Define types for our form data
type BarrierFormData = {
  barrierType: string | null;
  description: string;
  uploadedFiles: File[];
  fileNames: string[];
};

// Initial form state
const initialFormData: BarrierFormData = {
  barrierType: null,
  description: "",
  uploadedFiles: [],
  fileNames: [],
};

type BarrierFormContextType = {
  formData: BarrierFormData;
  updateFormField: <K extends keyof BarrierFormData>(
    field: K,
    value: BarrierFormData[K]
  ) => void;
  addFile: (file: File) => void;
  removeFile: (index: number) => void;
  hasFormErrors: (step: number) => boolean;
  getFormErrors: (step: number) => string[];
  resetForm: () => void;
};

const BarrierFormContext = createContext<BarrierFormContextType | undefined>(
  undefined
);

export const BarrierFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Load saved form data from localStorage if available
  const [formData, setFormData] = useState<BarrierFormData>(() => {
    const savedData = localStorage.getItem("barrierFormData");
    return savedData ? JSON.parse(savedData) : initialFormData;
  });

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("barrierFormData", JSON.stringify(formData));
  }, [formData]);

  // Update a specific field in the form
  const updateFormField = <K extends keyof BarrierFormData>(
    field: K,
    value: BarrierFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Add a file to the uploaded files array
  const addFile = (file: File) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, file],
      fileNames: [...prev.fileNames, file.name],
    }));
  };

  // Remove a file from the uploaded files array
  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index),
      fileNames: prev.fileNames.filter((_, i) => i !== index),
    }));
  };

  // Validate form fields based on current step
  const hasFormErrors = (step: number): boolean => {
    return getFormErrors(step).length > 0;
  };

  // Get specific error messages for current step
  const getFormErrors = (step: number): string[] => {
    const errors: string[] = [];

    if (step === 3) {
      if (!formData.barrierType) {
        errors.push("Please select a barrier type");
      }
      if (!formData.description.trim()) {
        errors.push("Please provide a description of your need");
      }
    }

    return errors;
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormData(initialFormData);
    localStorage.removeItem("barrierFormData");
  };

  return (
    <BarrierFormContext.Provider
      value={{
        formData,
        updateFormField,
        addFile,
        removeFile,
        hasFormErrors,
        getFormErrors,
        resetForm,
      }}
    >
      {children}
    </BarrierFormContext.Provider>
  );
};

// Custom hook to use the barrier form context
export const useBarrierForm = () => {
  const context = useContext(BarrierFormContext);
  if (context === undefined) {
    throw new Error("useBarrierForm must be used within a BarrierFormProvider");
  }
  return context;
};
