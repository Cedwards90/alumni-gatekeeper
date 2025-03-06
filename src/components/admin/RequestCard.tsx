
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronDown, ChevronUp, FileText, GraduationCap, CheckCircle, XCircle, MessageCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Request {
  id: string;
  type: "barrier" | "alumni";
  category: string;
  student: string;
  date: string;
  status: "pending" | "approved" | "denied";
  details: string;
}

interface RequestCardProps {
  request: Request;
  onApprove?: (id: string) => void;
  onDeny?: (id: string) => void;
}

const RequestCard = ({ request, onApprove, onDeny }: RequestCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>;
      case "approved":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Approved</Badge>;
      case "denied":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Denied</Badge>;
      default:
        return null;
    }
  };
  
  const handleApproveWithFeedback = () => {
    if (onApprove) {
      onApprove(request.id);
      if (feedback) {
        toast.success("Feedback submitted with approval");
      }
    }
  };
  
  const handleDenyWithFeedback = () => {
    if (onDeny) {
      onDeny(request.id);
      if (feedback) {
        toast.success("Feedback submitted with denial");
      }
    }
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="border border-gray-200 rounded-lg bg-white shadow-sm"
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {request.type === "barrier" ? (
                <FileText size={18} className="text-evolve-600" />
              ) : (
                <GraduationCap size={18} className="text-evolve-600" />
              )}
              <h3 className="text-base font-medium">
                {request.type === "barrier" ? "Barrier Request" : "Alumni Request"}: {request.category}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">From: {request.student}</p>
          </div>
          
          <div className="flex items-center gap-2">
            {getStatusBadge(request.status)}
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Calendar size={14} />
              <span>{formatDate(request.date)}</span>
            </div>
          </div>
        </div>
        
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-full mt-4 flex items-center justify-center gap-1 text-muted-foreground">
            {isOpen ? "Hide Details" : "View Details"}
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent className="px-5 pb-5 pt-1 border-t border-gray-100">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Request Details:</h4>
            <p className="text-sm bg-gray-50 p-3 rounded">{request.details}</p>
          </div>
          
          {(onApprove || onDeny) && (
            <>
              <div>
                <h4 className="text-sm font-medium mb-1 flex items-center gap-1">
                  <MessageCircle size={14} />
                  Feedback to Student:
                </h4>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Add optional feedback or notes about this request..."
                  className="resize-none"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleApproveWithFeedback}
                  className="bg-green-600 hover:bg-green-700 flex items-center justify-center gap-1"
                >
                  <CheckCircle size={16} />
                  Approve
                </Button>
                <Button
                  onClick={handleDenyWithFeedback}
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 flex items-center justify-center gap-1"
                >
                  <XCircle size={16} />
                  Deny
                </Button>
              </div>
            </>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default RequestCard;
