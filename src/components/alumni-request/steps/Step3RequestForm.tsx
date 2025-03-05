
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Briefcase, 
  Award, 
  Heart,
  Shirt, 
  BookOpen, 
  Upload,
  X
} from "lucide-react";
import { toast } from "sonner";

interface Step3RequestFormProps {
  supportType: string | null;
  setSupportType: (type: string) => void;
}

const Step3RequestForm = ({ supportType, setSupportType }: Step3RequestFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // Check file size limit (5MB)
      const oversizedFiles = newFiles.filter(file => file.size > 5 * 1024 * 1024);
      if (oversizedFiles.length > 0) {
        toast.error("Some files exceed the 5MB size limit and were not added.");
        
        // Only add files that are under the size limit
        const validFiles = newFiles.filter(file => file.size <= 5 * 1024 * 1024);
        setFiles(prev => [...prev, ...validFiles]);
        return;
      }
      
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  
  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Step 3: Request Form</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Type of Support (Select One)</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button 
              variant={supportType === "employment" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "employment" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("employment")}
            >
              <Briefcase size={18} />
              <span>Employment Stability</span>
            </Button>
            <Button 
              variant={supportType === "professional" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "professional" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("professional")}
            >
              <Award size={18} />
              <span>Professional Development</span>
            </Button>
            <Button 
              variant={supportType === "workReadiness" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "workReadiness" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("workReadiness")}
            >
              <Shirt size={18} />
              <span>Work Readiness</span>
            </Button>
            <Button 
              variant={supportType === "health" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "health" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("health")}
            >
              <Heart size={18} />
              <span>Health & Wellness</span>
            </Button>
            <Button 
              variant={supportType === "education" ? "default" : "outline"} 
              className={`justify-start gap-2 h-auto py-3 ${supportType === "education" ? "bg-evolve-600 text-white" : ""}`}
              onClick={() => setSupportType("education")}
            >
              <BookOpen size={18} />
              <span>Continuing Education</span>
            </Button>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description of Need
          </label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-evolve-500"
            placeholder="Please describe how this support will help advance your career or employment stability..."
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Supporting Documents (if applicable)</label>
          
          {files.length > 0 && (
            <div className="mb-3 space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-200">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="bg-evolve-100 p-1.5 rounded">
                      <Upload size={16} className="text-evolve-600" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => removeFile(index)}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ))}
            </div>
          )}
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Input
              type="file"
              id="file-upload"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer"
            >
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">
                Drag and drop files here, or <span className="text-evolve-600">browse</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Accepts PDF, JPEG, PNG (Max: 5MB per file)
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3RequestForm;
