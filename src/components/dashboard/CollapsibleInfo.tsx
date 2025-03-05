
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleInfoProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleInfo = ({ title, children }: CollapsibleInfoProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-8">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="text-gray-500">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleInfo;
