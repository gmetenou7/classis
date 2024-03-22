import { locales, usePathname, useRouter } from "@/navigation";
import { UnstyledButton } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [lang, setlang] = useState<"fr" | "en">("fr");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const paths = window.location.pathname.split("/");
    const langPath = paths[1];
    // @ts-ignore
    setlang(langPath);
    // router.replace(pathname, { locale: "de" });
  }, []);
  return (
    <UnstyledButton
      onClick={() => {
        router.push(pathname, { locale: lang === "en" ? "fr" : "en" });
        setlang((prev) => {
          return prev === "en" ? "fr" : "en";
        });
      }}
      title={lang === "en" ? "changez en français" : "switch to english"}
    >
      {renderLangIcon(lang)}
    </UnstyledButton>
  );
};

const renderLangIcon = (lang: "fr" | "en") => {
  const props = {
    height: 20,
    width: 35,
    className: "h-[20px] w-[35px] object-cover",
  };
  switch (lang) {
    case "fr":
      return <Image src={"/images/fr-lang.png"} alt="fr-flag" {...props} />;
    case "en":
      return <Image src={"/images/en-lang.png"} alt="en-flag" {...props} />;
    default:
      return null;
  }
};

export default LanguageSwitcher;
