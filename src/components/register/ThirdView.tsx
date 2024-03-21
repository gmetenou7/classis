"use client";
import { Select, TextInput, Textarea } from "@mantine/core";
import "@mantine/dates/styles.css";
import { IoBusinessOutline } from "react-icons/io5";

const ThirdView = ({ classes }: { classes?: string }) => {
  return (
    <fieldset className={`space-y-4 my-4 ${classes || ""}`}>
      <legend className="text-center font-semibold ">
        Informations de légales
      </legend>
      <Select
        label="Forme juridique"
        placeholder="Veuillez selectionner votre forme juridique"
        data={["SARL", "SAS", "SA"]}
      />
    </fieldset>
  );
};

export { ThirdView };
