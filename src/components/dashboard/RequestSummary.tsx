
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface RequestSummaryProps {
  title: string;
  description: string;
  count: number;
  viewRequestsLabel?: string;
  newRequestLabel?: string;
  onNewRequest?: () => void;
}

const RequestSummary = ({
  title,
  description,
  count,
  viewRequestsLabel = "View Requests",
  newRequestLabel = "New Request",
  onNewRequest
}: RequestSummaryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="bg-gray-50 rounded-lg p-4 text-center">
        <p className="text-2xl font-semibold text-evolve-600">{count}</p>
        <p className="text-sm text-muted-foreground">Active requests</p>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <Button className="bg-evolve-600 hover:bg-evolve-700">
          {viewRequestsLabel}
        </Button>
        <Button 
          className="flex items-center gap-1" 
          variant="outline"
          onClick={onNewRequest}
        >
          <PlusCircle size={16} />
          {newRequestLabel}
        </Button>
      </div>
    </div>
  );
};

export default RequestSummary;
