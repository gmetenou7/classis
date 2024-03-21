import AuthSlider from "@/components/commons/AuthSlider";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <section className="container flex gap-8 p-4">
        <aside className="w-1/2 h-full flex items-center justify-center">
          {children}
        </aside>
        <AuthSlider classes="w-1/2" />
      </section>
    </div>
  );
};

export default AuthLayout;
