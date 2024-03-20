import React from "react";
import { YellowRate } from "../commons/Rate";
import { Avatar } from "@mantine/core";

const TestimonialCard = ({
  description,
  image,
  name,
  rate,
  classes,
}: {
  image: string;
  name: string;
  rate: number;
  description: string;
  classes?: string;
}) => {
  return (
    <div className={`space-y-2 ${classes || ""}`}>
      <YellowRate rate={rate} />
      <p>{description}</p>
      <div className="flex items-center gap-2">
        <Avatar
          classNames={{
            root: "!rounded-md",
          }}
          src={image}
        />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
