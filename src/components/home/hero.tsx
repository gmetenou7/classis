"use client";
import { Avatar, Badge, Button, Input } from "@mantine/core";
import React from "react";
import Typewriter from "typewriter-effect";
import EdgeRowCard from "../cards/EdgeRowCard";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Rate } from "../commons/Rate";

const Hero = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto items-center flex gap-4 p-4">
        <div className="space-y-3">
          <Badge color="#80808077">🤩 Award-winning digital services</Badge>
          <h1 className="text-4xl font-extrabold leading-[1.5] !my-5">
            <span>Studio creatif focus sur </span>
            <span className="text-rose-500">
              <Typewriter
                component={"span"}
                options={{
                  strings: ["Hello", "World"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="mt-4 text-lg">
            From concept to execution, we deliver web designs that make an
            impact. Let your brand shine with our innovative and visually
            stunning websites.
          </p>
          <div className="flex mt-4 gap-2 p-2 rounded border border-gray-400 shadow-md">
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
              Start trial
            </Button>
          </div>
          <div className="flex gap-7 flex-wrap">
            <EdgeRowCard
              image="/images/placeholder.png"
              title="24/7 Support"
              subTitle="We're always here to help"
            />
            <EdgeRowCard
              image="/images/placeholder.png"
              title="Award Winning agency"
              subTitle="You are in safe hand"
            />
          </div>
        </div>

        <div className="relative mx-10">
          <Image
            src="/images/placeholder.png"
            alt="placeholder"
            width={1000}
            height={500}
          />

          {/* small top card on image */}
          <div className="absolute shadow-md rounded-xl -top-8 -right-8 bg-white border border-gray-200">
            <p className="flex items-center gap-2 p-2 pb-0">
              <FaStar className="text-green-300 shrink-0" />
              <span>Truspilot</span>
            </p>
            <div className="pr-2 flex items-center">
              <Rate rate={4.5} />
              <span className="font-semibold">4.5/5</span>
            </div>
            <small className="text-gray-500 px-2 pb-2">
              Reviewed by 365 users
            </small>
          </div>

          {/* small bottom card on image */}
          <div className="absolute shadow-lg rounded-xl text-white -bottom-8 -left-8 pb-2 bg-black border border-gray-200">
            <div className="flex items-center gap-2 p-2 pb-0">
              <span className="text-xl font-bold">5K+</span>
              <Avatar.Group>
                {Array(5)
                  .fill(0)
                  .map((profile, index) => {
                    return (
                      <Avatar
                        src="/images/placeholder.png"
                        size={30}
                        key={index}
                      />
                    );
                  })}
              </Avatar.Group>
            </div>
            <small className=" px-2 pb-2">Total visitors per month</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
