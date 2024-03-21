import registerComponents from "@/components/register";
import React from "react";
const Register = () => {
  return (
    <div className="space-y-4">
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
