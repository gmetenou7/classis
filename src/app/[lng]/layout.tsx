import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/containers/header";
import Footer from "@/components/containers/footer";
import en from "@/locale/en/home.json";
import fr from "@/locale/fr/home.json";
import i18n, { dir } from "i18next";
import { initReactI18next } from "react-i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    fr: fr,
  },
});

export const metadata: Metadata = {
  title: "Classis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
