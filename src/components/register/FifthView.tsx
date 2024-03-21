"use client";
import "@mantine/dates/styles.css";

const FifthView = ({ classes }: { classes?: string }) => {
  return (
    <div
      className={`h-[300px] w-[300px] my-4 flex mx-auto items-center justify-center ${
        classes || ""
      }`}
    >
      <p className="w-fit tect-center">
        Bravo vous y êtes arrivé, <br /> Un dernier clic pour terminer
      </p>
    </div>
  );
};

export { FifthView };
