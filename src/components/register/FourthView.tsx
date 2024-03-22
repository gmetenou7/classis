"use client";
import { ActionIcon, TextInput } from "@mantine/core";
import "@mantine/dates/styles.css";
import React, { useContext, useRef, useState } from "react";
import { FaPlus, FaXmark } from "react-icons/fa6";
import { formContext } from "./form";
import { defaultsInputClasses } from "@/utils/input/styles";

const FourthView = ({ classes }: { classes?: string }) => {
  const { form } = useContext(formContext);
  const [contacts, setContacts] = useState<
    {
      id: number;
      name: string;
      phone: string;
      email: string;
    }[]
  >([]);
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const handleAdd = () => {
    if (!validate()) return;
    if (
      contacts.find(({ name, email, phone }) => {
        return (
          name === nameRef.current?.value &&
          email === emailRef.current?.value &&
          phone === phoneRef.current?.value
        );
      })
    ) {
      return;
    }
    setContacts((prev) => {
      const newValue = [...prev];
      newValue.push({
        id: prev.length,
        name: nameRef.current?.value || "",
        email: emailRef.current?.value || "",
        phone: phoneRef.current?.value || "",
      });
      form.setFieldValue("contacts", newValue);
      return newValue;
    });
  };
  const validate = () => {
    let isValid = true;
    Object.keys(errors).forEach((key) => {
      if (!refs[key as keyof typeof refs].current?.value) {
        isValid = false;
        setErrors((prev) => ({ ...prev, [key]: "Ce champ est requis!" }));
      } else {
        setErrors((prev) => ({ ...prev, [key]: "" }));
      }
    });
    return isValid;
  };
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const refs = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
  };
  const handleRemove = (id: number) => () => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== id);
    });
  };
  return (
    <fieldset className={`space-y-4 my-4 ${classes || ""}`}>
      <legend className="text-center font-semibold ">Contacts clés</legend>
      <div className={`gap-3 flex items-start `}>
        <TextInput
          ref={nameRef}
          error={errors.name}
          onChange={validate}
          classNames={defaultsInputClasses}
          label="Nom complet"
        />
        <TextInput
          ref={emailRef}
          error={errors.email}
          onChange={validate}
          classNames={defaultsInputClasses}
          label="Adresse email"
          type="email"
        />
        <TextInput
          ref={phoneRef}
          error={errors.phone}
          onChange={validate}
          label="Téléphone"
          classNames={defaultsInputClasses}
          type="tel"
        />
        <ActionIcon
          type="button"
          onClick={handleAdd}
          variant="filled"
          size={37}
          aria-label="add"
          mt={25}
          classNames={{
            root: "!h-[50px] !text-2xl",
          }}
        >
          <FaPlus size={26} />
        </ActionIcon>
      </div>
      <div
        className="grid gap-2 items-center"
        style={{
          gridTemplateColumns: "repeat(3, 1fr) auto",
        }}
      >
        {contacts.map((contact, index) => {
          return (
            <React.Fragment key={index}>
              <span>{contact.name}</span>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
              <ActionIcon
                type="button"
                onClick={handleRemove(contact.id)}
                variant="filled"
                color="red"
                size={37}
                aria-label="add"
              >
                <FaXmark />
              </ActionIcon>
            </React.Fragment>
          );
        })}
      </div>
    </fieldset>
  );
};

export { FourthView };
