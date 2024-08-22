import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "LeetCode",
    description: "LeetCodeProfile",
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
