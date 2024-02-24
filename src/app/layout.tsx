import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
    title: "Isekai'D",
    description:
        "This website uses the Jikan API (Unofficial MyAnimeList API) to visualize anime that exclusively has the isekai theme",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>{children}</body>
        </html>
    );
}
