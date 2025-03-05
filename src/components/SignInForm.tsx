import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const SignInForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Mock authentication success
      // In a real app, you would call an authentication API here
      setTimeout(() => {
        toast.success("Successfully signed in!");
        navigate("/dashboard");
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
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="transition-all-smooth"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link 
            to="/reset-password" 
            className="text-xs text-evolve-600 hover:text-evolve-800 transition-all-smooth"
          >
            Forgot password?
          </Link>
        </div>
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

      <Button
        type="submit"
        className="w-full bg-evolve-600 hover:bg-evolve-700 transition-all-smooth"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </Button>
      
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link 
          to="/sign-up" 
          className="text-evolve-600 hover:text-evolve-800 font-medium transition-all-smooth"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
