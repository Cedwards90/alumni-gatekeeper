
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Users, 
  DollarSign, 
  GraduationCap, 
  Heart, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Clock, 
  Upload, 
  ChevronRight
} from "lucide-react";
import { toast } from "sonner";

const BarrierRequest = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [barrierType, setBarrierType] = useState<string | null>(null);

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
    toast.success("Your barrier request has been submitted successfully!");
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
          <h2 className="text-2xl font-semibold mb-2">Barrier Request Submission</h2>
          <p className="text-muted-foreground">Complete the steps below to submit your barrier request.</p>
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
            <div className={`text-xs ${currentStep >= 1 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Account</div>
            <div className={`text-xs ${currentStep >= 2 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Eligibility</div>
            <div className={`text-xs ${currentStep >= 3 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Request Form</div>
            <div className={`text-xs ${currentStep >= 4 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Review</div>
            <div className={`text-xs ${currentStep >= 5 ? "text-evolve-600 font-medium" : "text-gray-500"}`}>Tracking</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-8">
          {/* Step 1: Account Information */}
          {currentStep === 1 && (
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
          )}

          {/* Step 2: Eligibility Information */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-medium mb-4">Step 2: Eligibility Criteria</h3>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2">Eligibility Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>You must be an active participant in an Evolve Foundation training program.</li>
                  <li>Your request must be directly related to training (not employment or ongoing financial support).</li>
                  <li>Emergency funds are for urgent, one-time assistance only.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">What We Cover:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Transportation</p>
                      <p className="text-xs text-gray-600">Bus passes, gas cards, ride-share stipends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Childcare</p>
                      <p className="text-xs text-gray-600">Short-term assistance for training-related needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Emergency Funds</p>
                      <p className="text-xs text-gray-600">Eviction prevention, medical emergencies, critical expenses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Educational Support</p>
                      <p className="text-xs text-gray-600">Tutoring, learning resources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Health & Wellness</p>
                      <p className="text-xs text-gray-600">Mental health support, medical assistance</p>
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
                      <p className="font-medium text-sm">Ongoing Financial Support</p>
                      <p className="text-xs text-gray-600">No living stipends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                    <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Non-Training Requests</p>
                      <p className="text-xs text-gray-600">Employment assistance, personal expenses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                    <XCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-sm">Long-Term Assistance</p>
                      <p className="text-xs text-gray-600">Non-urgent or ongoing needs</p>
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
                  <label className="block text-sm font-medium mb-2">Type of Barrier (Select One)</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Button 
                      variant={barrierType === "transportation" ? "default" : "outline"} 
                      className={`justify-start gap-2 h-auto py-3 ${barrierType === "transportation" ? "bg-evolve-600 text-white" : ""}`}
                      onClick={() => setBarrierType("transportation")}
                    >
                      <Car size={18} />
                      <span>Transportation</span>
                    </Button>
                    <Button 
                      variant={barrierType === "childcare" ? "default" : "outline"} 
                      className={`justify-start gap-2 h-auto py-3 ${barrierType === "childcare" ? "bg-evolve-600 text-white" : ""}`}
                      onClick={() => setBarrierType("childcare")}
                    >
                      <Users size={18} />
                      <span>Childcare</span>
                    </Button>
                    <Button 
                      variant={barrierType === "emergency" ? "default" : "outline"} 
                      className={`justify-start gap-2 h-auto py-3 ${barrierType === "emergency" ? "bg-evolve-600 text-white" : ""}`}
                      onClick={() => setBarrierType("emergency")}
                    >
                      <DollarSign size={18} />
                      <span>Emergency Funds</span>
                    </Button>
                    <Button 
                      variant={barrierType === "education" ? "default" : "outline"} 
                      className={`justify-start gap-2 h-auto py-3 ${barrierType === "education" ? "bg-evolve-600 text-white" : ""}`}
                      onClick={() => setBarrierType("education")}
                    >
                      <GraduationCap size={18} />
                      <span>Educational Support</span>
                    </Button>
                    <Button 
                      variant={barrierType === "health" ? "default" : "outline"} 
                      className={`justify-start gap-2 h-auto py-3 ${barrierType === "health" ? "bg-evolve-600 text-white" : ""}`}
                      onClick={() => setBarrierType("health")}
                    >
                      <Heart size={18} />
                      <span>Health & Wellness</span>
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
                    placeholder="Please describe your barrier and how it impacts your training..."
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
                      <p className="text-sm text-gray-500">Barrier Type</p>
                      <p className="font-medium">{barrierType ? barrierType.charAt(0).toUpperCase() + barrierType.slice(1) : "Not selected"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Submission Date</p>
                      <p className="font-medium">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Description</p>
                    <p className="font-medium">Sample description of the barrier request.</p>
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
                    <h5 className="font-medium">Review (48 Hours)</h5>
                    <p className="text-sm text-gray-600">Our team will verify your eligibility and review any documentation provided.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FileText className="text-amber-500 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h5 className="font-medium">Follow-Up (If Needed)</h5>
                    <p className="text-sm text-gray-600">We may contact you if additional information is required.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-500 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h5 className="font-medium">Decision Communication</h5>
                    <p className="text-sm text-gray-600">Your approval or denial will be communicated via email and on your portal.</p>
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
                    <p className="text-sm">Your barrier request has been successfully submitted.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <p>You can track the status of your request at any time by logging into your dashboard.</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium mb-2">Request Tracking Features:</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Real-time status updates</li>
                    <li>Communication history with support team</li>
                    <li>Ability to provide additional documentation if requested</li>
                    <li>Notification of approval or denial</li>
                    <li>Next steps for approved requests</li>
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

export default BarrierRequest;
