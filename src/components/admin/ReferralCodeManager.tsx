
import { useState } from "react";
import { toast } from "sonner";
import CodeList from "./referral-codes/CodeList";
import EmailManager from "./referral-codes/EmailManager";
import { generateRandomCode } from "./referral-codes/codeUtils";

const ReferralCodeManager = () => {
  const [codes, setCodes] = useState<Array<{ id: string; code: string; used: boolean }>>([
    { id: "1", code: "EVOLVE2023", used: false },
    { id: "2", code: "STUDENT2023", used: true },
  ]);
  
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
  
  const handleSendEmails = (emailList: string[]) => {
    const unusedCodes = codes.filter(code => !code.used);
    if (unusedCodes.length === 0) {
      toast.error("No unused codes available. Please create more codes.");
      return;
    }
    
    // In a real app, this would send emails via an API
    toast.success(`Referral codes sent to ${emailList.length} recipients`);
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
        
        <CodeList 
          codes={codes}
          onCreateCode={handleCreateCode}
          onCopyCode={handleCopyCode}
          onDeleteCode={handleDeleteCode}
        />
        
        <EmailManager onSendEmails={handleSendEmails} />
      </div>
    </div>
  );
};

export default ReferralCodeManager;
