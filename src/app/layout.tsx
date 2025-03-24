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
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-b from-zinc-900 to-neutral-900 text-neutral-300 antialiased`}
      >
        <NavbarWithMegaMenu />
        <main className="relative h-full min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
