import Image from "next/image";

const EdgeRowCard = ({
  image,
  title,
  subTitle,
}: {
  image: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="gap-3 my-3 flex items-center w-fit min-w-[250px]">
      <div className="h-[60px]">
        <Image
          src={image}
          alt={title}
          height={60}
          width={60}
          className="object-cover rounded-[50%] h-[60px] w-[60px]"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-bold font-lg">{title}</p>
        <p className="text-gray-500">{subTitle}</p>
      </div>
    </div>
  );
};

export default EdgeRowCard;
