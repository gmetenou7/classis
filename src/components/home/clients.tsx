"use client";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

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
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = mockdata.map((item, index) => (
    <Carousel.Slide key={index}>
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
    </Carousel.Slide>
  ));
  return (
    <section className="my-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 p-4 justify-between">
        <p className="text-3xl font-bold">
          100+ Companies <br /> trust us
        </p>
        <div className="hidden md:block lg:hidden">
          <Carousel
            align="start"
            classNames={{
              controls: "!hidden",
            }}
            slideSize={{
              md: "33.3333%",
              sm: "50%",
            }}
            slideGap="md"
            loop
            slidesToScroll={3}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {slides}
          </Carousel>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-normal gap-4 md:hidden lg:flex md:gap-2 items-center shrink-0">
          {mockdata.map((item, index) => {
            return (
              <div
                className="flex items-center gap-3"
                key={`customer-${index}`}
              >
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
