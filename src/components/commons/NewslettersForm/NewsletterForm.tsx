import { Button, Input } from "@mantine/core";
import React from "react";

const NewsletterForm = ({ classes }: { classes?: string }) => {
  return (
    <div className={`space-y-4 ${classes || ""}`}>
      <h2 className="font-bold text-3xl">
        Let's talk about your digital agency goals
      </h2>
      <div className="flex mt-4 gap-2 p-2 rounded border bg-white">
        <Input
          placeholder="Enter your email address"
          p={6}
          classNames={{
            wrapper: "!p-0 !w-full",
            input: "!border-none",
          }}
        />
        <Button
          variant="gradient"
          gradient={{ from: "#000000d2", to: "#0000009c" }}
          classNames={{
            root: "text-white !w-[150px]",
          }}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewsletterForm;
