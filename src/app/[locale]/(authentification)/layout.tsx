import AuthSlider from "@/components/commons/AuthSlider";
import styles from "@/styles/auth.module.css";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <section className="container mx-auto flex gap-8 p-4 items-stretch">
        <aside className={`w-full lg:w-1/2 ${styles["form-size"]}`}>
          {children}
        </aside>
        <AuthSlider classes="w-1/2 hidden lg:block" />
      </section>
    </div>
  );
};

export default AuthLayout;
