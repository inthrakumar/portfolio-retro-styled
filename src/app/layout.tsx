import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
const Press_start = Press_Start_2P({ weight: '400', subsets: ["latin"] });
import Header from "@/components/Header";
import Body from "@/components/Body";
export const metadata: Metadata = {
  title: "Inthra Kumar",
  description: "Retro-Styled-Portfolio",
};
import Provider from './utils/Provider';
import bg from '../../public/retro-bg.png';
import 'nes.css/css/nes.min.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${Press_start.className}  flex flex-col min-h-screen  bg-cover bg-no-repeat gap-3 overflow-y-auto`} style={{ backgroundImage: `url(${bg.src})` }}>

        <Header />

        <Provider>
          <Body>{children}</Body>
        </Provider>


      </body>
    </html>
  );
}
