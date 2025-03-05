
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AlumniHeader = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};

export default AlumniHeader;
