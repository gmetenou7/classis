"use client";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Avatar, Badge } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import TestimonialCard from "../cards/TestimonialCard";
import Image from "next/image";
import RoundedArrow from "../illustrations/RoundedArrow";

const Section4 = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = Array(7)
    .fill({
      description:
        "Mizzle is the perfect theme for businesses that want to create a stylish and functional website.",
      image: "/images/placeholder.png",
      name: "By Denis MAXWELL",
      rate: 4.5,
    })
    .map((item, index) => (
      <Carousel.Slide key={index}>
        <TestimonialCard {...item} />
      </Carousel.Slide>
    ));
  return (
    <section>
      <div className="container flex mx-auto py-8 gap-10 items-center space-y-6">
        <div className="w-1/2">
          <Badge
            color="#99999928"
            radius={5}
            p={8}
            classNames={{
              root: "!px-3 !py-1 !h-fit ",
              label: "!text-black",
            }}
          >
            💖 Real results from real clients
          </Badge>
          <h2 className="text-3xl font-bold my-7">
            See how we've helped our clients succeed
          </h2>
          <p className="font-bold">More than 1500+ agencies using Mizzle</p>
          <Carousel
            align="start"
            withIndicators
            height={200}
            slideSize="50%"
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
        <div className="w-1/2 relative ml-[130px]">
          <div className="rounded-lg p-2 absolute top-9 -left-8 flex items-center gap-4 text-white bg-black max-w-[270px]">
            <Avatar src="/images/placeholder.png" alt="avatar" size={25} />
            <p className="text-sm">
              The best Bootstrap theme we've ever used 🔥
            </p>
          </div>
          <div className="rounded-lg p-2 absolute bottom-8 shadow-md border border-gray-200 bg-white -left-4 flex items-center gap-4">
            <Avatar src="/images/placeholder.png" alt="avatar" size={25} />
            <p className="text-sm">Excellent Theme 💗</p>
          </div>
          <RoundedArrow classes="absolute top-[85px] right-[99%]" />
          <Image
            height={400}
            width={250}
            className="object-cover h-full w-full"
            src="/images/placeholder.png"
            alt="placeholder"
          />
        </div>
      </div>
    </section>
  );
};

export { Section4 };
