
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Car,
  Users,
  DollarSign,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  PlusCircle
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showBarrierInfo, setShowBarrierInfo] = useState(false);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSignOut = () => {
    // In a real app, you would call a sign out API here
    toast.success("Signed out successfully");
    navigate("/sign-in");
  };

  const handleNewBarrierRequest = () => {
    navigate("/barrier-request");
  };

  const barrierTypes = [
    {
      id: 1,
      title: "Transportation Assistance",
      description: "Bus passes, ride-share stipends, or gas cards to ensure trainees can attend training.",
      icon: <Car className="text-evolve-600" />
    },
    {
      id: 2,
      title: "Childcare Support",
      description: "Help covering short-term childcare needs so participants can focus on training.",
      icon: <Users className="text-evolve-600" />
    },
    {
      id: 3,
      title: "Emergency Funds",
      description: "One-time financial assistance for urgent situations like eviction prevention, medical needs, or critical expenses.",
      icon: <DollarSign className="text-evolve-600" />
    },
    {
      id: 4,
      title: "Housing Stability",
      description: "Assistance for temporary shelter or emergency housing situations that affect training attendance.",
      icon: <Home className="text-evolve-600" />
    },
    {
      id: 5,
      title: "Workforce Readiness Needs",
      description: "Essential items such as safety gear, uniforms, tools, or training-related materials.",
      icon: <Briefcase className="text-evolve-600" />
    },
    {
      id: 6,
      title: "Educational Support",
      description: "Tutoring or additional learning resources for trainees struggling with coursework.",
      icon: <GraduationCap className="text-evolve-600" />
    },
    {
      id: 7,
      title: "Health & Wellness Support",
      description: "Mental health services, stress management, or medical assistance needed to stay engaged in training.",
      icon: <Heart className="text-evolve-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-evolve-800">Evolve Foundation</h1>
          <Button 
            variant="outline" 
            onClick={handleSignOut}
            className="text-sm"
          >
            Sign out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Welcome to your Dashboard</h2>
          <p className="text-muted-foreground">Track and manage your barrier and alumni requests.</p>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
                <h3 className="text-lg font-medium mb-2">Barrier Requests</h3>
                <p className="text-muted-foreground mb-4">Manage and track barrier requests.</p>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-semibold text-evolve-600">0</p>
                  <p className="text-sm text-muted-foreground">Active requests</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Button className="bg-evolve-600 hover:bg-evolve-700">
                    View Requests
                  </Button>
                  <Button 
                    className="flex items-center gap-1" 
                    variant="outline"
                    onClick={handleNewBarrierRequest}
                  >
                    <PlusCircle size={16} />
                    New Request
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
                <h3 className="text-lg font-medium mb-2">Alumni Requests</h3>
                <p className="text-muted-foreground mb-4">Track and process alumni requests.</p>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-semibold text-evolve-600">0</p>
                  <p className="text-sm text-muted-foreground">Active requests</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Button className="bg-evolve-600 hover:bg-evolve-700">
                    View Requests
                  </Button>
                  <Button 
                    className="flex items-center gap-1" 
                    variant="outline"
                  >
                    <PlusCircle size={16} />
                    New Request
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-8">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => setShowBarrierInfo(!showBarrierInfo)}
              >
                <h3 className="text-lg font-medium">What Qualifies as a Barrier Request?</h3>
                <div className="text-gray-500">
                  {showBarrierInfo ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              {showBarrierInfo && (
                <div className="mt-4">
                  <p className="mb-4">
                    A Barrier Request is any request for assistance that directly impacts a participant's ability to complete their workforce training.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {barrierTypes.map((type) => (
                      <div key={type.id} className="bg-gray-50 p-4 rounded-lg flex">
                        <div className="mr-3 mt-1">{type.icon}</div>
                        <div>
                          <h4 className="font-medium text-sm">{type.title}</h4>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <HelpCircle className="text-amber-500 mt-0.5 mr-2 shrink-0" size={18} />
                      <div>
                        <h4 className="font-medium text-sm mb-2">What Barrier Requests Do NOT Cover:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          <li>Ongoing financial support (no living stipends)</li>
                          <li>Employment-related requests (support applies only to training phase)</li>
                          <li>Non-urgent personal expenses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-sm mb-2">Why Are Barrier Requests Important?</h4>
                    <p className="text-sm text-muted-foreground">
                      By addressing immediate challenges that could prevent trainees from completing their programs, 
                      Evolve Foundation ensures that participants have the support they need to succeed and transition into career opportunities.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-start gap-3">
                <FileText className="text-evolve-600 shrink-0" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Barrier Request Submission Process</h3>
                  <p className="text-muted-foreground mb-4">
                    Need assistance with your training program? Submit a barrier request to get help with transportation, 
                    childcare, emergency funds, educational support, or health & wellness needs.
                  </p>
                  <Button 
                    className="bg-evolve-600 hover:bg-evolve-700"
                    onClick={handleNewBarrierRequest}
                  >
                    Start New Request
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
