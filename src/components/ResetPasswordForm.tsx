import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Mock password reset success
      // In a real app, you would call a password reset API here
      setTimeout(() => {
        setSubmitted(true);
        toast.success("Password reset instructions sent to your email!");
      }, 1500);
    } catch (error) {
      toast.error("Failed to send reset instructions. Please try again.");
    } finally {
      // For the mock we need to keep this commented to see the loading state
      // setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-6 animate-fade-in text-center">
        <div className="rounded-full bg-green-100 p-3 w-12 h-12 mx-auto flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium">Check your email</h3>
        <p className="text-sm text-muted-foreground">
          We've sent password reset instructions to <span className="font-medium">{email}</span>
        </p>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Didn't receive the email?
          </p>
          <Button
            variant="outline"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                Resending...
              </>
            ) : (
              "Resend"
            )}
          </Button>
        </div>
        <div className="text-center text-sm">
          <Link 
            to="/sign-in" 
            className="text-evolve-600 hover:text-evolve-800 font-medium transition-all-smooth"
          >
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

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

      <Button
        type="submit"
        className="w-full bg-evolve-600 hover:bg-evolve-700 transition-all-smooth"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
            Sending instructions...
          </>
        ) : (
          "Reset password"
        )}
      </Button>
      
      <div className="text-center text-sm">
        Remember your password?{" "}
        <Link 
          to="/sign-in" 
          className="text-evolve-600 hover:text-evolve-800 font-medium transition-all-smooth"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
