import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 shrink-0 mr-4">
      <Image
        src={"/images/logo.png"}
        alt="classis"
        height={40}
        width={40}
        className="h-[40px] w-[40px]"
      />
      <p className="font-bold text-2xl">Classis</p>
    </div>
  );
};

export default Logo;
