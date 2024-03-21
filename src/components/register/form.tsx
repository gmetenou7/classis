"use client";
import { Button } from "@mantine/core";
import "@mantine/dates/styles.css";
import classNames from "classnames";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FifthView } from "./FifthView";
import { FirstView } from "./FirstView";
import { FourthView } from "./FourthView";
import { SecondView } from "./SecondView";
import { ThirdView } from "./ThirdView";

const Form = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPageIndex(pageIndex + 1);
  };
  const handleSubmit = (data: any) => {
    data.preventDefault();
    console.log("data", data);
  };
  return (
    <div className="w-full p-4 rounded-lg border border-gray-200 shadow-lg">
      <form onSubmit={handleSubmit}>
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
  );
};

export { Form };
