"use client"
import { Link } from "@/navigation";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import { FaAt, FaLock } from "react-icons/fa6";
import { useForm } from "@mantine/form";
import { zodResolver } from 'mantine-form-zod-resolver';
import { schema } from "@/app/[locale]/(authentification)/login/schema";

const Form = () => {
  const form = useForm({
    initialValues: {
      password: "",
      email: "",
    },
    validate: zodResolver(schema),
  });
  const handleSubmit = (data : any) => {
    console.log("submit" , data);
  };
  return (
    <div className="w-full p-4 rounded-lg border border-gray-200 shadow-lg">
      <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-6">
        <TextInput
          label="Email"
          type="email"
          //   error="eg"
          placeholder="you@example.com"
          leftSection={<FaAt size={18} />}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label={
            <div className="flex !w-full justify-between gap-10 items-center">
              <span>Votre mot de passe</span>{" "}
              <Link href="#" className="text-blue-500">
                Mot de passe oublié
              </Link>
            </div>
          }
          type="email"
          //   error="eg"
          placeholder="you@example.com"
          leftSection={<FaLock size={18} />}
          classNames={{
            label: "!w-full",
          }}
          {...form.getInputProps("password")}
        />
        <Button type="submit" fullWidth>
          SE CONNECTER
        </Button>
        <p>
          Avez vous déjà un compte?{" "}
          <Link href={`/register`} className="text-blue-500">
            Créer un compte
          </Link>
        </p>
      </form>
    </div>
  );
};

export { Form };
