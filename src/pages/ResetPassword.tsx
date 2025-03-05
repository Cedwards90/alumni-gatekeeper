
import AuthLayout from "@/components/AuthLayout";
import ResetPasswordForm from "@/components/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <AuthLayout 
      title="Reset your password" 
      subtitle="Enter your email address and we'll send you instructions to reset your password"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPassword;
