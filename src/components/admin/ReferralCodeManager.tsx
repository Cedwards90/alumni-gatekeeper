
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Mail, Plus, RefreshCw, Trash } from "lucide-react";
import { toast } from "sonner";

// In a real app, this would be fetched from a database
const generateRandomCode = () => {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
};

const ReferralCodeManager = () => {
  const [codes, setCodes] = useState<Array<{ id: string; code: string; used: boolean }>>([
    { id: "1", code: "EVOLVE2023", used: false },
    { id: "2", code: "STUDENT2023", used: true },
  ]);
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
  
  const handleCreateCode = () => {
    const newCode = generateRandomCode();
    setCodes([...codes, { id: Date.now().toString(), code: newCode, used: false }]);
    toast.success("New referral code created");
  };
  
  const handleDeleteCode = (id: string) => {
    setCodes(codes.filter(code => code.id !== id));
    toast.success("Referral code deleted");
  };
  
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard");
  };
  
  const handleSendEmails = () => {
    if (emailList.length === 0) {
      toast.error("Please add at least one email address");
      return;
    }
    
    const unusedCodes = codes.filter(code => !code.used);
    if (unusedCodes.length === 0) {
      toast.error("No unused codes available. Please create more codes.");
      return;
    }
    
    // In a real app, this would send emails via an API
    toast.success(`Referral codes sent to ${emailList.length} recipients`);
    setEmailList([]);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Referral Code Management</h2>
          <p className="text-muted-foreground mb-4">
            Create and distribute referral codes for students to sign up for the portal.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Active Referral Codes</h3>
            <Button 
              onClick={handleCreateCode}
              className="bg-evolve-600 hover:bg-evolve-700 flex items-center gap-2"
            >
              <Plus size={16} />
              Create New Code
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            {codes.length === 0 ? (
              <p className="text-center text-muted-foreground py-4">No referral codes created yet</p>
            ) : (
              <div className="space-y-3">
                {codes.map((codeItem) => (
                  <div 
                    key={codeItem.id}
                    className={`flex justify-between items-center p-3 bg-white rounded border ${
                      codeItem.used ? "border-gray-200" : "border-green-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-medium text-base">{codeItem.code}</span>
                      {codeItem.used && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Used</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyCode(codeItem.code)}
                        title="Copy code"
                      >
                        <Copy size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteCode(codeItem.id)}
                        title="Delete code"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
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
                    <div key={index} className="flex justify-between items-center p-2 bg-white rounded border border-gray-200">
                      <span className="text-sm">{emailItem}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveEmail(index)}
                        className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash size={14} />
                      </Button>
                    </div>
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
      </div>
    </div>
  );
};

export default ReferralCodeManager;
