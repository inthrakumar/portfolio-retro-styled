import type { Metadata } from "next";
import { useParams } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (


        children

    );
}
