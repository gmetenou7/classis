import React from "react";

const StatCard = ({
  count,
  description,
  classes,
}: {
  count: string;
  description: string;
  classes?: string;
}) => {
  return (
    <div
      className={`text-white rounded-lg p-3 bg-black flex gap-3 flex-col items-center justify-center ${
        classes || ""
      }`}
    >
      <p className="text-center text-4xl font-extrabold ">{count}</p>
      <small>{description}</small>
    </div>
  );
};

export default StatCard;
