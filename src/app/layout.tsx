import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "ziad.dev",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
