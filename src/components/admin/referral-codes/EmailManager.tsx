
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Trash } from "lucide-react";
import { toast } from "sonner";

interface EmailListItemProps {
  email: string;
  onRemove: () => void;
}

const EmailListItem = ({ email, onRemove }: EmailListItemProps) => (
  <div className="flex justify-between items-center p-2 bg-white rounded border border-gray-200">
    <span className="text-sm">{email}</span>
    <Button
      variant="ghost"
      size="sm"
      onClick={onRemove}
      className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
    >
      <Trash size={14} />
    </Button>
  </div>
);

interface EmailManagerProps {
  onSendEmails: (emails: string[]) => void;
}

const EmailManager = ({ onSendEmails }: EmailManagerProps) => {
  const [email, setEmail] = useState("");
  const [emailList, setEmailList] = useState<string[]>([]);
  
  const handleAddEmail = () => {
    if (!email.trim()) {
      toast.error("Please enter an email address");
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (emailList.includes(email)) {
      toast.error("This email is already in the list");
      return;
    }
    
    setEmailList([...emailList, email]);
    setEmail("");
  };
  
  const handleRemoveEmail = (indexToRemove: number) => {
    setEmailList(emailList.filter((_, index) => index !== indexToRemove));
  };
  
  const handleSendEmails = () => {
    if (emailList.length === 0) {
      toast.error("Please add at least one email address");
      return;
    }
    
    onSendEmails(emailList);
    setEmailList([]);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Send Referral Codes</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Student Email</Label>
          <div className="flex gap-2">
            <Input
              id="email"
              type="email"
              placeholder="student@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleAddEmail}
              className="bg-evolve-600 hover:bg-evolve-700"
            >
              Add
            </Button>
          </div>
        </div>
        
        {emailList.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium mb-2">Recipients ({emailList.length})</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {emailList.map((emailItem, index) => (
                <EmailListItem 
                  key={index} 
                  email={emailItem} 
                  onRemove={() => handleRemoveEmail(index)} 
                />
              ))}
            </div>
          </div>
        )}
        
        <Button 
          onClick={handleSendEmails}
          className="bg-evolve-600 hover:bg-evolve-700 w-full flex items-center justify-center gap-2"
          disabled={emailList.length === 0}
        >
          <Mail size={16} />
          Send Referral Codes
        </Button>
      </div>
    </div>
  );
};

export default EmailManager;
