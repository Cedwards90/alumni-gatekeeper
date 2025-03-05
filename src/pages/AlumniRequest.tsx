
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Heart,
  Shirt, 
  BookOpen,
  CheckCircle2, 
  XCircle, 
  FileText, 
  Clock, 
  Upload, 
  ChevronRight
} from "lucide-react";
import { toast } from "sonner";

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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-evolve-800">Evolve Foundation</h1>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/dashboard")}
            className="text-sm"
          >
            Back to Dashboard
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Alumni Request Submission</h2>
          <p className="text-muted-foreground">Complete the steps below to submit your alumni support request.</p>
        </div>

        {/* Progress Steps */}
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

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-8">
          {/* Step 1: Alumni Verification */}
          {currentStep === 1 && (
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
          )}

          {/* Step 2: Eligibility Information */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-medium mb-4">Step 2: Eligibility Criteria</h3>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2">Alumni Support Eligibility:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>You must be a verified graduate of an Evolve Foundation program.</li>
                  <li>Your request must be directly related to career development or employment support.</li>
                  <li>Support is available for up to 24 months after graduation.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">What We Cover:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Employment Stability</p>
                      <p className="text-xs text-gray-600">Job transition support and employer connections</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Professional Development</p>
                      <p className="text-xs text-gray-600">Resume building, interview coaching, entrepreneurial support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Work Readiness</p>
                      <p className="text-xs text-gray-600">Tools, safety gear, and attire for employment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Health & Wellness</p>
                      <p className="text-xs text-gray-600">Mental health resources and wellness programs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">What We Do Not Cover:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                    <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Financial Support</p>
                      <p className="text-xs text-gray-600">Ongoing financial support unrelated to career development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                    <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Personal Expenses</p>
                      <p className="text-xs text-gray-600">Non-employment-related personal expenses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                    <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Training Needs</p>
                      <p className="text-xs text-gray-600">Training-related requests (covered under Barrier Requests)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Request Form */}
          {currentStep === 3 && (
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-evolve-500"
                    placeholder="Please describe how this support will help advance your career or employment stability..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Supporting Documents (if applicable)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">
                      Drag and drop files here, or <span className="text-evolve-600">browse</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Accepts PDF, JPEG, PNG (Max: 5MB per file)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Processing */}
          {currentStep === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-medium mb-4">Step 4: Review & Processing</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-medium mb-4">Request Summary</h4>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Support Type</p>
                      <p className="font-medium">{supportType ? supportType.charAt(0).toUpperCase() + supportType.slice(1) : "Not selected"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Submission Date</p>
                      <p className="font-medium">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Description</p>
                    <p className="font-medium">Sample description of the alumni support request.</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Supporting Documents</p>
                    <p className="font-medium">None attached</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="text-amber-500 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h5 className="font-medium">Review (3-5 Business Days)</h5>
                    <p className="text-sm text-gray-600">Our alumni team will review your request and determine the appropriate support.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FileText className="text-amber-500 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h5 className="font-medium">Consultation (If Needed)</h5>
                    <p className="text-sm text-gray-600">A career advisor may contact you to discuss your request in more detail.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-500 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h5 className="font-medium">Implementation Plan</h5>
                    <p className="text-sm text-gray-600">You'll receive a detailed plan for how we can support your request.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Status Tracking */}
          {currentStep === 5 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-medium mb-4">Step 5: Request Status Tracking</h3>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium">Submission Complete</h4>
                    <p className="text-sm">Your alumni support request has been successfully submitted.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <p>You can track the status of your request at any time by logging into your alumni dashboard.</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium mb-2">Alumni Support Features:</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Track your request status in real-time</li>
                    <li>Schedule appointments with career advisors</li>
                    <li>Access alumni events and networking opportunities</li>
                    <li>Connect with other graduates in your field</li>
                    <li>Access continuing education resources</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button
                  className="bg-evolve-600 hover:bg-evolve-700 transition-all-smooth"
                  onClick={() => navigate("/dashboard")}
                >
                  Return to Dashboard
                </Button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep < 5 && (
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  className="bg-evolve-600 hover:bg-evolve-700 transition-all-smooth"
                  onClick={handleNext}
                >
                  Next Step
                  <ChevronRight size={16} />
                </Button>
              ) : (
                <Button
                  className="bg-evolve-600 hover:bg-evolve-700 transition-all-smooth"
                  onClick={handleSubmit}
                >
                  Submit Request
                </Button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AlumniRequest;
