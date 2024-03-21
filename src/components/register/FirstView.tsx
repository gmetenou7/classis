"use client";
import { TextInput, Textarea } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { FaCalendar } from "react-icons/fa6";
import { HiIdentification } from "react-icons/hi";
import { IoBusinessOutline } from "react-icons/io5";
import { MdOutlineSettingsInputComposite } from "react-icons/md";

const FirstView = ({ classes }: { classes?: string }) => {
  return (
    <fieldset className={`space-y-4 my-4 ${classes || ""}`}>
      <legend className="text-center font-semibold ">
        Informations de base
      </legend>
      <TextInput
        label="Nom de l'entreprise"
        type="text"
        leftSection={<IoBusinessOutline size={18} />}
      />
      <TextInput
        label="Domaine d'activité"
        type="text"
        leftSection={<MdOutlineSettingsInputComposite size={18} />}
      />
      <TextInput
        label="Numéro d'identification fiscale"
        type="text"
        leftSection={<HiIdentification size={18} />}
      />
      <DatePickerInput
        label="Date de creation"
        leftSection={<FaCalendar size={18} />}
      />
      <Textarea label="Description: un bref résumé de ce que fait l'entreprise" />
    </fieldset>
  );
};

export { FirstView };
