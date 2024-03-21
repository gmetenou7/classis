import { Link } from "@/navigation";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import { FaAt, FaLock } from "react-icons/fa6";

const Form = () => {
  const router = useRouter();
  return (
    <div className="w-full p-4 rounded-lg border border-gray-200 shadow-lg">
      <form className="space-y-6">
        <TextInput
          label="Email"
          type="email"
          //   error="eg"
          placeholder="you@example.com"
          leftSection={<FaAt size={18} />}
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
        />
        <Button type="submit" fullWidth>
          SE CONNECTER
        </Button>
        <p>
          Avez vous déjà un compte?{" "}
          <Link
            href={`/${router.query.locale}/sign-up`}
            className="text-blue-500"
          >
            Créer un compte
          </Link>
        </p>
      </form>
    </div>
  );
};

export { Form };
