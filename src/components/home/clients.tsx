import Image from "next/image";
import React from "react";

const mockdata = [
  {
    image: "/images/placeholder.png",
    title: "Open source",
  },
  {
    image: "/images/placeholder.png",
    title: "Open source",
  },
  {
    image: "/images/placeholder.png",
    title: "Open source",
  },
  {
    image: "/images/placeholder.png",
    title: "Open source",
  },
  {
    image: "/images/placeholder.png",
    title: "Open source",
  },
];

const Clients = () => {
  return (
    <section>
      <div className="container mx-auto flex gap-6 p-4 justify-between">
        <p className="text-3xl font-bold">
          100+ Companies <br /> trust us
        </p>
        <div className="flex gap-2 items-center shrink-0">
          {mockdata.map((item, index) => {
            return (
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={40}
                  width={40}
                  className="object-cover rounded-[50%] h-[40px] w-[40px]"
                />
                <p className="font-bold font-lg">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Clients };
