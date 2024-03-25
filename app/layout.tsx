"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./data-tables-css.css";
import "./globals.css";
import "./satoshi.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </html>
  );
}
