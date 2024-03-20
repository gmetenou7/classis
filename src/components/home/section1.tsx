"use client";
import Image from "next/image";
import React from "react";
import FilyingsBirds from "../illustrations/filyingsBirds";
import StatCard from "../cards/statCard";
import { Badge, Button, List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

const Section1 = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto py-6 px-3 gap-10 flex items-center">
        <div className="flex gap-5 min-h-[500px] w-1/2">
          <div className="w-fit flex gap-3">
            <div className="relative w-1/2 h-4/5">
              <Image
                className="rounded-lg object-cover h-full w-full"
                src={"/images/placeholder.png"}
                alt="placeholder"
                width={330}
                height={500}
              />
              <FilyingsBirds
                classes={
                  "absolute !fill-[#09B850] -bottom-12 right-2 w-[106px] h-[96px]"
                }
              />
            </div>
            <div className="grid grid-cols-2 w-1/2 gap-3">
              <StatCard count="10+" description="Years of experience" />
              <StatCard
                count="1.2K"
                classes="!bg-[#09b850]"
                description="Happy customers"
              />
              <div className="col-span-2">
                <Image
                  className="rounded-lg object-cover h-full w-full min-h-[360px]"
                  src={"/images/placeholder.png"}
                  alt="placeholder"
                  width={330}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Badge color="#acacac77">🤝 Your gateway to digital success</Badge>
          <h3 className="font-bold text-3xl leading-10 my-7">
            Defining the future of online experiences!
          </h3>
          <p className="mb-4">
            Embrace a new era of digital success with Mizzle. Our team combines
            cutting-edge design with robust development to deliver websites that
            captivate and convert.
          </p>
          <List
            spacing="xs"
            size="sm"
            center
            icon={
              <ThemeIcon color="green" size={16} radius="xl">
                <IconCheck className="text-white font-bold" />
              </ThemeIcon>
            }
            classNames={{
              itemWrapper: "!flex items-center gap-2",
              itemIcon: "!flex items-center !m-0 !h-fit",
            }}
          >
            <List.Item>Emphasis on ROI-driven solutions</List.Item>
            <List.Item>Emphasis on ROI-driven solutions</List.Item>
            <List.Item>Emphasis on ROI-driven solutions</List.Item>
          </List>
          <Link href="#">
            <Button bg={"black"} color="white" my={15}>
              Discover more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Section1 };
