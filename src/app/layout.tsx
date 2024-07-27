import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import 'nes.css/css/nes.min.css'
const Press_start = Press_Start_2P({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IK PORTFOLIO",
  description: "Retro-Styled-Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={Press_start.className}>{children}</body>
    </html>
  );
}
