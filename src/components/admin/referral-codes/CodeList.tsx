
import { Button } from "@/components/ui/button";
import { Copy, Plus, Trash } from "lucide-react";
import { toast } from "sonner";

interface CodeItemProps {
  id: string;
  code: string;
  used: boolean;
  onCopy: (code: string) => void;
  onDelete: (id: string) => void;
}

const CodeItem = ({ id, code, used, onCopy, onDelete }: CodeItemProps) => (
  <div 
    className={`flex justify-between items-center p-3 bg-white rounded border ${
      used ? "border-gray-200" : "border-green-200"
    }`}
  >
    <div className="flex items-center gap-2">
      <span className="font-mono font-medium text-base">{code}</span>
      {used && (
        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Used</span>
      )}
    </div>
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onCopy(code)}
        title="Copy code"
      >
        <Copy size={16} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(id)}
        title="Delete code"
        className="text-red-500 hover:text-red-700 hover:bg-red-50"
      >
        <Trash size={16} />
      </Button>
    </div>
  </div>
);

interface CodeListProps {
  codes: Array<{ id: string; code: string; used: boolean }>;
  onCreateCode: () => void;
  onCopyCode: (code: string) => void;
  onDeleteCode: (id: string) => void;
}

const CodeList = ({ codes, onCreateCode, onCopyCode, onDeleteCode }: CodeListProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Active Referral Codes</h3>
        <Button 
          onClick={onCreateCode}
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
              <CodeItem 
                key={codeItem.id}
                id={codeItem.id}
                code={codeItem.code}
                used={codeItem.used}
                onCopy={onCopyCode}
                onDelete={onDeleteCode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeList;
