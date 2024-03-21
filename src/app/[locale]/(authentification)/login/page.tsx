import { loginComponents } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Classis",
  description: "Page de connexion de la plateforme classis",
};

const Login = () => {
  return (
    <div className="space-y-4 flex p-8 flex-col h-full border border-gray-200 shadow-lg rounded-lg">
      <h1 className="w-full text-center text-3xl font-bold">
        Connectez vous maintenant pour gérer
        <br />
        facilement vos sous-traitances B2B.
      </h1>
      <loginComponents.Form />
    </div>
  );
};

export default Login;
