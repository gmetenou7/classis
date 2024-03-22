"use client";
import { Button } from "@mantine/core";
import "@mantine/dates/styles.css";
import classNames from "classnames";
import { createContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FifthView } from "./FifthView";
import { FirstView } from "./FirstView";
import { FourthView } from "./FourthView";
import { SecondView } from "./SecondView";
import { ThirdView } from "./ThirdView";
import { UseFormReturnType, useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { schema } from "@/app/[locale]/(authentification)/register/schema";

type TFormState = {
  name: string;
  activityDomain: string;
  fiscalIdentification: string;
  creationDate: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  juridictionStatus: string;
  contacts: { name: string; phone: string; email: string }[];
};

export const formContext = createContext<{
  form: UseFormReturnType<TFormState>;
}>({} as any);

const Form = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPageIndex(pageIndex + 1);
  };
  const form = useForm({
    initialValues: {
      name: "",
      activityDomain: "",
      fiscalIdentification: "",
      creationDate: "",
      description: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      juridictionStatus: "",
      contacts: [] as TFormState["contacts"],
    },
    validate: zodResolver(schema),
  });
  const handleSubmit = (data: any) => {
    console.log("submit", data);
  };
  console.log("errors", form.errors);
  return (
    <formContext.Provider value={{ form }}>
      <div className="w-full p-4 h-full">
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col justify-between h-full"
        >
          <FirstView
            classes={`hidden ${classNames({
              "!block": pageIndex === 0,
            })}`}
          />
          <SecondView
            classes={`hidden ${classNames({
              "!block": pageIndex === 1,
            })}`}
          />
          <ThirdView
            classes={`hidden ${classNames({
              "!block": pageIndex === 2,
            })}`}
          />
          <FourthView
            classes={`hidden ${classNames({
              "!block": pageIndex === 3,
            })}`}
          />
          <FifthView
            classes={`hidden ${classNames({
              "!flex": pageIndex === 4,
            })}`}
          />
          <div className="flex items-center justify-end">
            {pageIndex === 4 ? (
              <Button type={"submit"} fullWidth key={"submit button"}>
                JE CREE MON COMPTE MAINTENANT
              </Button>
            ) : (
              <Button
                type={"button"}
                onClick={handleClick}
                rightSection={<FaArrowRight size={18} />}
                key={"next button"}
              >
                SUIVANT
              </Button>
            )}
          </div>
        </form>
      </div>
    </formContext.Provider>
  );
};

export { Form };
