
import AuthLayout from "@/components/AuthLayout";
import AdminSignInForm from "@/components/AdminSignInForm";

const AdminSignIn = () => {
  return (
    <AuthLayout 
      title="Administrator Sign In" 
      subtitle="Enter your administrator credentials to access the admin portal"
    >
      <AdminSignInForm />
    </AuthLayout>
  );
};

export default AdminSignIn;
