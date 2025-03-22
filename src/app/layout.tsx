import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/top/Footer";
import NavbarWithMegaMenu from "@/components/top/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proxreal Portfolio",
  description: "Proxreal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-neutral-300 from-zinc-900 to-neutral-900 bg-gradient-to-b`}
      >
        <NavbarWithMegaMenu />
        <main className="min-h-screen h-full relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
