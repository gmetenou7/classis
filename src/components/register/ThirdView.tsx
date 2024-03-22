"use client";
import { Select, TextInput, Textarea } from "@mantine/core";
import "@mantine/dates/styles.css";
import { useContext } from "react";
import { IoBusinessOutline } from "react-icons/io5";
import { formContext } from "./form";
import { defaultsInputClasses } from "@/utils/input/styles";

const ThirdView = ({ classes }: { classes?: string }) => {
  const { form } = useContext(formContext);
  return (
    <fieldset className={`space-y-4 my-4 ${classes || ""}`}>
      <legend className="text-center font-semibold ">
        Informations de légales
      </legend>
      <Select
        label="Forme juridique"
        placeholder="Veuillez selectionner votre forme juridique"
        data={["SARL", "SAS", "SA"]}
        classNames={defaultsInputClasses}
        {...form.getInputProps("juridictionStatus")}
      />
    </fieldset>
  );
};

export { ThirdView };
