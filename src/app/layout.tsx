import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
    title: "Isekai'Dex",
    description:
        "Isekai'Dex uses the Jikan API (Unofficial MyAnimeList API) to show only isekai anime.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${GeistSans.className} bg-slate-900`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
