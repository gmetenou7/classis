"use client";
import { Link } from "@/navigation";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import { FaAt, FaLock } from "react-icons/fa6";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { schema } from "@/app/[locale]/(authentification)/login/schema";

const defaultsInputClasses = {
  input: "!h-[50px] !text-xl",
  label: "!text-xl !w-full",
};

const Form = () => {
  const form = useForm({
    initialValues: {
      password: "",
      email: "",
    },
    validate: zodResolver(schema),
  });
  const handleSubmit = (data: any) => {
    console.log("submit", data);
  };
  return (
    <div className="w-full p-4 rounded-lg ">
      <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-10">
        <TextInput
          label="Email"
          type="email"
          //   error="eg"
          classNames={defaultsInputClasses}
          placeholder="vous@exemple.com"
          leftSection={<FaAt size={18} />}
          {...form.getInputProps("email")}
        />
        <div>
          <PasswordInput
            label={
              <div className="flex !w-full justify-between gap-10 items-center">
                <span>Mot de passe</span>{" "}
                <Link href="#" className="hidden sm:block text-blue-500">
                  Mot de passe oublié
                </Link>
              </div>
            }
            type="email"
            //   error="eg"
            placeholder="vous@exemple.com"
            leftSection={<FaLock size={18} />}
            classNames={defaultsInputClasses}
            {...form.getInputProps("password")}
          />
          <Link href="/forgot-password" className="text-right sm:hidden w-full block text-blue-500">
            Mot de passe oublié
          </Link>
        </div>
        <Button
          classNames={{
            root: "!h-[50px] !text-2xl",
          }}
          type="submit"
          fullWidth
        >
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
