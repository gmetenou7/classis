"use client";
import { TextInput } from "@mantine/core";
import "@mantine/dates/styles.css";
import { useContext } from "react";
import { BsFillPostageFill } from "react-icons/bs";
import { FaAt, FaEarthEurope, FaPhone } from "react-icons/fa6";
import { formContext } from "./form";

const SecondView = ({ classes }: { classes?: string }) => {
  const { form } = useContext(formContext);
  return (
    <fieldset className={`space-y-4 my-4 ${classes || ""}`}>
      <legend className="text-center font-semibold ">
        Contact et localisation
      </legend>
      <TextInput
        label="Adresse postale, contient la rue, le code postal, la ville et parfois le pays"
        type="text"
        leftSection={<BsFillPostageFill size={18} />}
        {...form.getInputProps("address")}
      />
      <TextInput
        label="Numéro de téléphone"
        type="tel"
        leftSection={<FaPhone size={18} />}
        {...form.getInputProps("phone")}
      />
      <TextInput
        label="adresse email"
        type="email"
        leftSection={<FaAt size={18} />}
        {...form.getInputProps("email")}
      />
      <TextInput
        label="site web"
        type="url"
        leftSection={<FaEarthEurope size={18} />}
        {...form.getInputProps("website")}
      />
    </fieldset>
  );
};

export { SecondView };
