"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Calendar, Archive, ChevronsRight } from "lucide-react";

export default function Menu() {
    const pathname = usePathname();

    const links = [
        {
            name: "Airing",
            icon: Calendar,
        },
        {
            name: "Archive",
            icon: Archive,
        },
        {
            name: "TBA",
            icon: ChevronsRight,
        },
    ];

    return (
        <nav className="flex h-fit w-full justify-center">
            <ul className="flex w-full justify-center">
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center justify-center px-3 text-slate-400 hover:text-slate-200"
                    >
                        <Link
                            key={index}
                            href={`/${link.name.toLowerCase()}`}
                            className={`flex flex-col items-center ${pathname === `/${link.name.toLowerCase()}` ? "active text-white" : ""}`}
                        >
                            <link.icon className="h-5 w-5" strokeWidth={2.25} />
                            <p className="text-xs font-medium tracking-wide">
                                {link.name}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
