
import AuthLayout from "@/components/AuthLayout";
import SignUpForm from "@/components/SignUpForm";

const SignUp = () => {
  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Fill out the form below to create your account"
    >
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
