import { useRouter } from "@/navigation";
import Image from "next/image";

const Logo = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.push("/")} className="flex items-center gap-3 cursor-pointer shrink-0 mr-4">
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
