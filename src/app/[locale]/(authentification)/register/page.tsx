import registerComponents from "@/components/register";
import React from "react";
const Register = () => {
  return (
    <div className="space-y-4 flex p-8 flex-col h-full border border-gray-200 shadow-lg rounded-lg">
      <h1 className="w-full text-center font-3xl font-bold">
        Créer un compte maintenant et prennez en
        <br />
        main vos sous-traitances B2B dès aujourd'hui
      </h1>
      <registerComponents.Form />
    </div>
  );
};

export default Register;
