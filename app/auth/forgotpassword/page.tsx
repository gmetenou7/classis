"use client";
import Form1 from "@/components/forgot-password/form1";
import Form2 from "@/components/forgot-password/form2";
import Form3 from "@/components/forgot-password/form3";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPassword: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const nextFn = () => setPageIndex((prev) => prev + 1);
  console.log("pageIndex", pageIndex);
  return (
    <>
      <span className="mb-1.5 block font-medium">N'ayez aucune crainte!</span>
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Retrouvez l'accès à votre compte dès maintenant
      </h2>
      {pageIndex === 0 ? (
        <Form1 nextFn={nextFn} />
      ) : pageIndex === 1 ? (
        <Form2 nextFn={nextFn} />
      ) : pageIndex === 2 ? (
        <Form3 nextFn={nextFn} />
      ) : (
        <div>
          <p>Félicitations, il est temps de vous connecter à votre compte</p>
          <p className="flex gap-3 my-4">
            <button className="grow-1 w-1/2 rounded-lg border-2 border-blue-500 bg-white p-2 text-blue-500">
              <Link href="/auth/signup"> Se connecter</Link>
            </button>
            <button className="grow-1 w-1/2 rounded-lg border-2 border-blue-500 bg-blue-500 p-2 text-white">
              <Link href="/"> Acceuil</Link>{" "}
            </button>
          </p>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
