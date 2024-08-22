import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Skills",
    description: "Skills",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (


        <div>{children}</div>

    );
}
