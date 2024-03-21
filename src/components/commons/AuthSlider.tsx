"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Card } from "@mantine/core";
import Image from "next/image";
import "@mantine/carousel/styles.css";

const AuthSlider = ({ classes , cardClasses}: { classes?: string, cardClasses? : string }) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = Array(7)
    .fill({
      description: "Mizzle is the perfect theme for businesses ",
      image: "/images/placeholder.png",
    })
    .map((item, index) => (
      <Carousel.Slide key={`slide-${index}`}>
        <div className="h-full rounded-xl overflow-hidden">
          <Image
            src={item.image}
            height={500}
            alt={`slide-${index}`}
            width={300}
            className={`h-full w-full`}
          />
          <p className="absolute w-full bottom-8 left-0 text-center text-xl font-semibold">
            {item.description}
          </p>
        </div>
      </Carousel.Slide>
    ));
  return (
    <div className={`overflow-hidden  ${classes || ""}`}>
      <Carousel
        // align="start"
        withIndicators
        slideGap="md"
        slideSize={"100%"}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        classNames={{
          controls: "!hidden",
          container : "!h-full",
          root : "!h-full",
          viewport : "!h-full"
        }}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default AuthSlider;
