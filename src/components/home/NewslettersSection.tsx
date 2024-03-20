import React from "react";
import NewsletterForm from "../commons/NewslettersForm/NewsletterForm";
import { FaClock, FaMessage, FaPhone } from "react-icons/fa6";

const NewslettersSection = () => {
  return (
    <div className="relative bottom-[-150px] text-white">
      <div className="container flex-col lg:flex-row mx-auto bg-[#09b850] rounded-lg p-5  flex justify-between">
        <NewsletterForm classes="text-center lg:text-left lg:w-1/2  lg:max-w-[450px]" />
        <div className="lg:space-y-3 mt-4 lg:mt-0 flex gap-6 flex-wrap justify-center items-center lg:flex-col  lg:items-end">
          <p className="flex items-center gap-2">
            <span>
              <FaPhone />
            </span>{" "}
            Call on: 0125 258 993 22
          </p>
          <p className="flex items-center gap-2">
            <span>
              <FaClock />
            </span>{" "}
            Time: 9am to 5pm (Sunday close)
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <span>
              <FaMessage />
            </span>{" "}
            Email: example@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export { NewslettersSection };
