import AuthSlider from "@/components/commons/AuthSlider";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <section className="container flex gap-8 p-4">
        <aside className="w-1/2 min-h-[100vh]">{children}</aside>
        <AuthSlider classes="w-1/2" />
      </section>
    </div>
  );
};

export default AuthLayout;
