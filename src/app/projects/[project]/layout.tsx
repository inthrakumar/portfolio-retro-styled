import { useParams } from "next/navigation";
import { Metadata, ResolvingMetadata } from 'next';
type Props = {
    params: { project: string }
}
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const title = params.project



    return {
        title: title,
        description: `Description for ${title}`,


    }
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (


        children

    );
}
