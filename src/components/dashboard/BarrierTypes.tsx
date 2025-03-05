
import { 
  Car, 
  Users, 
  DollarSign, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Heart,
  HelpCircle
} from "lucide-react";

interface BarrierTypeProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const barrierTypes: BarrierTypeProps[] = [
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

const BarrierTypesContent = () => {
  return (
    <>
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
    </>
  );
};

export default BarrierTypesContent;
