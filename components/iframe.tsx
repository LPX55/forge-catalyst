'use client'

interface IframeProps {
    url: string;
}
export default function IframeComponent({ url }: IframeProps) {
    {
        return (
            <iframe
                seamless
                className="w-full h-full overflow-y-hidden bg-transparent"
                src={url}></iframe>
        );
    }
}