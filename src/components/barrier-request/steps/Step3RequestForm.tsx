
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useBarrierForm } from "@/contexts/BarrierFormContext";
import { 
  Car, 
  Users, 
  DollarSign, 
  GraduationCap, 
  Heart, 
  Upload,
  X,
  FileText
} from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

const Step3RequestForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { formData, updateFormField, addFile, removeFile } = useBarrierForm();
  const [dragActive, setDragActive] = useState(false);

  const handleBarrierTypeSelect = (type: string) => {
    updateFormField("barrierType", type);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormField("description", e.target.value);
  };

  // Handle file drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  // Handle file selection from file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  // Process and validate files
  const handleFiles = (files: File[]) => {
    for (const file of files) {
      // Check file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error(`File "${file.name}" is not an accepted file type`);
        continue;
      }
      
      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`File "${file.name}" exceeds the 5MB size limit`);
        continue;
      }
      
      // Add valid file
      addFile(file);
      toast.success(`File "${file.name}" uploaded successfully`);
    }
    
    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle file removal
  const handleRemoveFile = (index: number) => {
    const fileName = formData.fileNames[index];
    removeFile(index);
    toast.info(`File "${fileName}" removed`);
  };

  // Handle drag events
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Trigger file input click
  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 3: Request Form</h3>
      
      <div className="space-y-6">
        <div>
          <Label className="block mb-2">Type of Barrier (Select One)</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button 
              variant={formData.barrierType === "transportation" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${formData.barrierType === "transportation" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => handleBarrierTypeSelect("transportation")}
              type="button"
            >
              <Car size={18} />
              <span>Transportation</span>
            </Button>
            
            <Button 
              variant={formData.barrierType === "childcare" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${formData.barrierType === "childcare" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => handleBarrierTypeSelect("childcare")}
              type="button"
            >
              <Users size={18} />
              <span>Childcare</span>
            </Button>
            
            <Button 
              variant={formData.barrierType === "emergency" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${formData.barrierType === "emergency" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => handleBarrierTypeSelect("emergency")}
              type="button"
            >
              <DollarSign size={18} />
              <span>Emergency Funds</span>
            </Button>
            
            <Button 
              variant={formData.barrierType === "education" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${formData.barrierType === "education" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => handleBarrierTypeSelect("education")}
              type="button"
            >
              <GraduationCap size={18} />
              <span>Educational Support</span>
            </Button>
            
            <Button 
              variant={formData.barrierType === "health" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${formData.barrierType === "health" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => handleBarrierTypeSelect("health")}
              type="button"
            >
              <Heart size={18} />
              <span>Health & Wellness</span>
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="description" className="block mb-2">
            Description of Need
          </Label>
          <textarea
            id="description"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-evolve-500"
            placeholder="Please describe your barrier and how it impacts your training..."
            value={formData.description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>

        <div>
          <Label className="block mb-2">Supporting Documents (if applicable)</Label>
          
          {/* File Drop Zone */}
          <div 
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
              dragActive ? "border-evolve-600 bg-evolve-50" : "border-gray-300"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={handleBrowseClick}
          >
            <Input 
              ref={fileInputRef}
              type="file" 
              className="hidden"
              accept=".pdf,.png,.jpg,.jpeg"
              multiple
              onChange={handleFileChange}
            />
            <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              Drag and drop files here, or <span className="text-evolve-600 cursor-pointer">browse</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Accepts PDF, JPEG, PNG (Max: 5MB per file)
            </p>
          </div>

          {/* File List */}
          {formData.fileNames.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Uploaded Files:</p>
              <div className="space-y-2">
                {formData.fileNames.map((fileName, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-evolve-600" />
                      <span className="text-sm truncate max-w-[250px]">{fileName}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFile(index);
                      }}
                      className="h-8 w-8 p-0"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step3RequestForm;
