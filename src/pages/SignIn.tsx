
import AuthLayout from "@/components/AuthLayout";
import SignInForm from "@/components/SignInForm";

const SignIn = () => {
  return (
    <AuthLayout 
      title="Sign in to your account" 
      subtitle="Enter your email below to access your account"
    >
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
