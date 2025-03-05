
import { useState } from "react";
import { toast } from "sonner";

// Maximum file size in bytes (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Allowed file types
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

interface UseBarrierUploadProps {
  onFileAccepted: (file: File) => void;
  onFileRejected?: (file: File, reason: string) => void;
}

export const useBarrierUpload = ({
  onFileAccepted,
  onFileRejected
}: UseBarrierUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  
  const validateFile = (file: File): { valid: boolean; reason?: string } => {
    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return { valid: false, reason: "File type not supported" };
    }
    
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return { valid: false, reason: "File exceeds the 5MB size limit" };
    }
    
    return { valid: true };
  };
  
  const handleFiles = (fileList: FileList | File[]) => {
    const files = Array.from(fileList);
    
    files.forEach(file => {
      const validation = validateFile(file);
      
      if (validation.valid) {
        onFileAccepted(file);
      } else if (onFileRejected && validation.reason) {
        onFileRejected(file, validation.reason);
        toast.error(`${file.name}: ${validation.reason}`);
      }
    });
  };
  
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };
  
  return {
    dragActive,
    handleDrag,
    handleDrop,
    handleFiles
  };
};
