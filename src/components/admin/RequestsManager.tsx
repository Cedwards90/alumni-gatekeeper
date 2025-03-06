
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RequestCard from "@/components/admin/RequestCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";

// Define interface to match RequestCard's Request interface
interface Request {
  id: string;
  type: "barrier" | "alumni";
  category: string;
  student: string;
  date: string;
  status: "pending" | "approved" | "denied";
  details: string;
}

// Mock data - in a real app, these would come from an API
const mockBarrierRequests: Request[] = [
  { id: "br1", type: "barrier", category: "Transportation", student: "John Doe", date: "2023-10-15", status: "pending", details: "Need assistance with transportation to the training center" },
  { id: "br2", type: "barrier", category: "Childcare", student: "Sara Johnson", date: "2023-10-17", status: "pending", details: "Requesting childcare support during evening classes" },
  { id: "br3", type: "barrier", category: "Emergency Fund", student: "Michael Brown", date: "2023-10-10", status: "approved", details: "Emergency financial assistance needed for housing" },
];

const mockAlumniRequests: Request[] = [
  { id: "ar1", type: "alumni", category: "Career Development", student: "Lisa Wilson", date: "2023-10-12", status: "pending", details: "Seeking career counseling after graduation" },
  { id: "ar2", type: "alumni", category: "Work Readiness", student: "David Martinez", date: "2023-10-09", status: "denied", details: "Request for resume review and interview preparation" },
  { id: "ar3", type: "alumni", category: "Health Services", student: "Jennifer Davis", date: "2023-10-14", status: "approved", details: "Assistance with health insurance enrollment after program completion" },
];

interface RequestsManagerProps {
  status: "pending" | "processed";
}

const RequestsManager = ({ status }: RequestsManagerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [requestType, setRequestType] = useState<"all" | "barrier" | "alumni">("all");
  
  // Filter requests based on status (pending or processed)
  const allRequests = [...mockBarrierRequests, ...mockAlumniRequests];
  const filteredByStatus = status === "pending" 
    ? allRequests.filter(req => req.status === "pending")
    : allRequests.filter(req => req.status === "approved" || req.status === "denied");
  
  // Further filter by type and search query
  const filteredRequests = filteredByStatus
    .filter(req => requestType === "all" || req.type === requestType)
    .filter(req => 
      req.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.details.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleApprove = (id: string) => {
    // In a real app, this would call an API
    toast.success(`Request ${id} has been approved`);
  };

  const handleDeny = (id: string) => {
    // In a real app, this would call an API
    toast.success(`Request ${id} has been denied`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search requests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-gray-600" />
          <div className="flex rounded-md border border-input overflow-hidden">
            <Button
              type="button"
              variant="ghost"
              className={`px-3 rounded-none ${requestType === "all" ? "bg-evolve-100 text-evolve-800" : ""}`}
              onClick={() => setRequestType("all")}
            >
              All
            </Button>
            <Button
              type="button"
              variant="ghost"
              className={`px-3 rounded-none border-l border-r border-input ${requestType === "barrier" ? "bg-evolve-100 text-evolve-800" : ""}`}
              onClick={() => setRequestType("barrier")}
            >
              Barrier
            </Button>
            <Button
              type="button"
              variant="ghost"
              className={`px-3 rounded-none ${requestType === "alumni" ? "bg-evolve-100 text-evolve-800" : ""}`}
              onClick={() => setRequestType("alumni")}
            >
              Alumni
            </Button>
          </div>
        </div>
      </div>
      
      {filteredRequests.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
          <p className="text-muted-foreground">No {requestType === "all" ? "" : requestType} requests found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onApprove={status === "pending" ? handleApprove : undefined}
              onDeny={status === "pending" ? handleDeny : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestsManager;
