"use client";
import { Badge, Button, List } from "@mantine/core";
import { FaCheck } from "react-icons/fa6";
import CoinWallet from "../illustrations/CoinWallet";
import Link from "next/link";

const Section3 = () => {
  return (
    <section>
      <div className="container flex mx-auto py-8 flex-col items-center space-y-6">
        <Badge
          color="#99999928"
          radius={5}
          p={8}
          classNames={{
            root: "!px-3 !py-1 !h-fit ",
            label: "!text-black",
          }}
        >
          🚀 Innovative solutions, Measurable results
        </Badge>
        <h2 className="text-4xl font-bold">Get a plan that grows with you</h2>
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 gap-4">
          <div className="pr-3 border-r space-y-4 border-r-gray-200">
            <CoinWallet />
            <Badge
              color="#000000e1"
              radius={5}
              p={3}
              classNames={{
                root: "!py-0 !h-fit ",
                label: "!text-white",
              }}
            >
              Boss mode
            </Badge>
            <p>
              <span className="text-5xl font-bold">$59</span> /month
            </p>
            <p>
              The all-in-one solution for businesses that want to succeed
              online.
            </p>
          </div>
          <div className="space-y-4 p-3 justify-self-center">
            <p className="font-bold">Features list of your need</p>
            <List icon={<FaCheck color="green" size={16} />}>
              {[
                "Up to 05 users monthly",
                "Free 5 host & domain",
                "Google Docs style editors",
                "Support for 30+ languages",
                "Landing pages & Web widgets",
                "24/7 Dedicated Support",
              ].map((feature, index) => (
                <List.Item key={`feature-${index}`}>{feature}</List.Item>
              ))}
            </List>
            <div>
              <Link href="#">
                <Button color="black">Start trial for 7-day free</Button>
              </Link>
              <p>
                <small>No credit card is required!</small>
              </p>
            </div>
          </div>
          <div className="space-y-4 col-span-2 lg:col-span-1 text-white rounded-lg flex flex-col justify-between bg-[#09b850] p-4">
            <div>
              <Badge
                color="#000000e1"
                radius={5}
                p={3}
                classNames={{
                  root: "!py-0 !h-fit ",
                  label: "!text-white",
                }}
              >
                Boss mode
              </Badge>
              <p className="text-3xl font-bold">Custom pricing plan</p>
            </div>
            <div>
              <Button color="white" fullWidth>
                <span className="text-black">Contact sales</span>
              </Button>
              <p className="text-center text-white">
                Get personalized demo and custom plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Section3 };
