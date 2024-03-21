import { loginComponents } from "@/components/login";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "Login | Classis",
  description: "Page de connexion de la plateforme classis",
};

const Login = () => {
  return (
    <div>
      <h1 className="w-full text-center font-3xl font-bold">
        Connectez vous maintenant pour gérer
        <br />
        facilement vos sous-traitances B2B.
      </h1>
      <loginComponents.Form />
    </div>
  );
};

export default Login;
