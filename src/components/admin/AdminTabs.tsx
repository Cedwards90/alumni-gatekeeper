
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RequestsManager from "@/components/admin/RequestsManager";
import ReferralCodeManager from "@/components/admin/ReferralCodeManager";
import { FileText, Key, CheckCircle } from "lucide-react";

const AdminTabs = () => {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-3 mb-8">
        <TabsTrigger value="pending" className="flex items-center gap-2">
          <FileText size={16} />
          <span>Pending Requests</span>
        </TabsTrigger>
        <TabsTrigger value="approved" className="flex items-center gap-2">
          <CheckCircle size={16} />
          <span>Processed Requests</span>
        </TabsTrigger>
        <TabsTrigger value="referrals" className="flex items-center gap-2">
          <Key size={16} />
          <span>Referral Codes</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="pending" className="space-y-4">
        <RequestsManager status="pending" />
      </TabsContent>
      
      <TabsContent value="approved" className="space-y-4">
        <RequestsManager status="processed" />
      </TabsContent>
      
      <TabsContent value="referrals" className="space-y-4">
        <ReferralCodeManager />
      </TabsContent>
    </Tabs>
  );
};

export default AdminTabs;
