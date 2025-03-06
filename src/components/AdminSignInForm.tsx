import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Shield } from "lucide-react";

const AdminSignInForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !adminCode) {
      toast.error("Please enter email, password, and admin code");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Mock authentication success with admin role
      // In a real app, you would validate the admin code and set role permissions
      setTimeout(() => {
        // Set admin status in localStorage for persistence
        localStorage.setItem("userRole", "admin");
        toast.success("Successfully signed in as administrator!");
        navigate("/admin");
      }, 1500);
    } catch (error) {
      toast.error("Failed to sign in. Please check your credentials.");
    } finally {
      // For the mock we need to keep this commented to see the loading state
      // setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
      <div className="flex items-center justify-center mb-4">
        <Shield className="h-8 w-8 text-evolve-600" />
        <span className="ml-2 text-xl font-semibold text-evolve-600">Administrator Access</span>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="transition-all-smooth"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="transition-all-smooth"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="adminCode">Admin Access Code</Label>
        <Input
          id="adminCode"
          type="password"
          placeholder="Enter administrator code"
          value={adminCode}
          onChange={(e) => setAdminCode(e.target.value)}
          required
          className="transition-all-smooth"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-evolve-600 hover:bg-evolve-700 transition-all-smooth"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
            Authenticating...
          </>
        ) : (
          "Sign in as Administrator"
        )}
      </Button>
    </form>
  );
};

export default AdminSignInForm;
