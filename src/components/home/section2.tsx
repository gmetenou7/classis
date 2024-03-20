"use client";
import { Badge } from "@mantine/core";
import React from "react";
import ProductCard from "../cards/productCard";

const Section2 = () => {
  return (
    <div className="py-[70px] bg-[#202124] px-2">
      <div className="container text-white flex items-center flex-col mx-auto">
        <Badge
          color="#99999928"
          radius={5}
          p={8}
          classNames={{
            root: "!px-3 !py-1 !h-fit ",
            label: "!text-white",
          }}
        >
          🚀 Innovative solutions, Measurable results
        </Badge>
        <h2 className="text-3xl font-bold my-7">
          We specialize in the following services
        </h2>
        <div className="grid grid-cols-4 gap-6 gap-y-[70px] my-5 w-fit">
          {Array(8)
            .fill(0)
            .map((product, index) => {
              return (
                <ProductCard
                  image="/images/placeholder.png"
                  title="Digital Marketing"
                  description="Growing brands online through digital channels."
                  link={{
                    label: "Know more",
                    path: "#",
                  }}
                  key={`product-${index}`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export { Section2 };
