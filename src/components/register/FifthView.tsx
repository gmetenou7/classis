"use client";
import "@mantine/dates/styles.css";

const FifthView = ({ classes }: { classes?: string }) => {
  return (
    <div
      className={`h-[300px] w-[300px] my-4 flex mx-auto items-center justify-center ${
        classes || ""
      }`}
    >
      <p className="w-fit text-center text-2xl min-w-[80%] sm:text-3xl sm:min-w-[400px] text-[#228be6] font-bold">
        Bravo vous y êtes arrivé, <br /> Un dernier clic pour terminer
      </p>
    </div>
  );
};

export { FifthView };
