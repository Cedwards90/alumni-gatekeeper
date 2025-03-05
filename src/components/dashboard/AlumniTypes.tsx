
import { 
  TrendingUp, 
  CheckSquare, 
  Shirt, 
  HeartPulse,
  HelpCircle
} from "lucide-react";

interface AlumniTypeProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const alumniTypes: AlumniTypeProps[] = [
  {
    id: 1,
    title: "Employment Stability Assistance",
    description: "Job transition support and employer connections for new opportunities.",
    icon: <TrendingUp className="text-evolve-600" />
  },
  {
    id: 2,
    title: "Professional Development Assistance",
    description: "Resume building, interview coaching, and entrepreneurial support for career mobility.",
    icon: <CheckSquare className="text-evolve-600" />
  },
  {
    id: 3,
    title: "Work Readiness Attire & Tools",
    description: "Assistance with required tools, safety gear, equipment, and work attire for employment.",
    icon: <Shirt className="text-evolve-600" />
  },
  {
    id: 4,
    title: "Health & Wellness Resources",
    description: "Mental health counseling, stress management resources, and access to wellness programs.",
    icon: <HeartPulse className="text-evolve-600" />
  }
];

const AlumniTypesContent = () => {
  return (
    <>
      <p className="mb-4">
        An Alumni Request is support for graduates to sustain and grow their careers after completing an Evolve Foundation training program.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {alumniTypes.map((type) => (
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
            <h4 className="font-medium text-sm mb-2">What Alumni Requests Do NOT Cover:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Ongoing financial support unrelated to career development</li>
              <li>Non-employment-related personal expenses</li>
              <li>Training-related requests (these fall under Barrier Requests)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-sm mb-2">Why Alumni Requests Matter</h4>
        <p className="text-sm text-muted-foreground">
          Evolve Foundation is committed to ensuring that graduates not only secure employment but also sustain and grow their careers. 
          Alumni Requests provide the long-term support necessary to help individuals advance, overcome challenges, 
          and remain engaged in the clean energy workforce.
        </p>
      </div>
    </>
  );
};

export default AlumniTypesContent;
