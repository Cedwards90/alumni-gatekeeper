
import React from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showBackground?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  showBackground = true
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      {showBackground && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-evolve-100 opacity-30 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-evolve-200 opacity-30 blur-3xl" />
        </div>
      )}
      
      <div className="flex w-full flex-col items-center space-y-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-evolve-800">Evolve Foundation</span>
        </Link>
        
        <div className="w-full max-w-md animate-fade-in space-y-8 rounded-xl glass-effect p-8 shadow-md">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
