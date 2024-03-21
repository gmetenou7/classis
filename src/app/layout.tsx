import Footer from "@/components/containers/footer";
import Header from "@/components/containers/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Classis",
  description: "Page de présentation de la plateforme classis",
};

export default function RootLayout({
  children,
  params: { locale: lng },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={lng}>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
