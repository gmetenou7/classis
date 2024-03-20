import { UnstyledButton } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ProductCard = ({
  description,
  classes,
  image,
  link,
  title,
}: {
  classes?: string;
  image: string;
  title: string;
  description: string;
  link: { label: string; path: string };
}) => {
  const router = useRouter();
  return (
    <div
      className={`rounded-md bg-white/20 p-3 relative pt-[40px] cursor-pointer ${
        classes || ""
      }`}
      onClick={() => {
        router.push(link.path);
      }}
    >
      <div className="flex flex-col absolute top-[-28px] h-[56px] w-[56px] left-[28px] justify-center items-center rounded-[50%] bg-white">
        <Image
          src={image}
          alt={title}
          height={24}
          width={24}
          className="object-cover h-[24px] w-[24px] shrink-0"
        />
      </div>
      <h4 className="font-bold  my-4 text-xl">{title}</h4>
      <p className="">{description}</p>
      <UnstyledButton
        classNames={{
          root: "flex items-center justify-center text-[#09b850] gap-2",
        }}
      >
        <span>{link.label}</span>
        <span>
          <FaArrowRight />
        </span>
      </UnstyledButton>
    </div>
  );
};

export default ProductCard;
