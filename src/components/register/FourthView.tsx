"use client";
import { ActionIcon, Button, TextInput } from "@mantine/core";
import "@mantine/dates/styles.css";
import { FaPlus } from "react-icons/fa6";

const FourthView = ({ classes }: { classes?: string }) => {
  return (
    <fieldset className={`space-y-4 my-4 ${classes || ""}`}>
      <legend className="text-center font-semibold ">Contacts clés</legend>
      <div className="gap-3 flex items-end">
        <TextInput label="Nom complet" />
        <TextInput label="Adresse email" type="email" />
        <TextInput label="Téléphone" type="tel" />
        <ActionIcon variant="filled" size={37} aria-label="add">
          <FaPlus size={26} />
        </ActionIcon>
      </div>
    </fieldset>
  );
};

export { FourthView };
