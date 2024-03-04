"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SeasonLinks() {
    const pathname = usePathname();

    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;
    const seasons = [
        { year: currentYear, name: "winter" },
        { year: currentYear, name: "spring" },
        { year: currentYear, name: "summer" },
        { year: lastYear, name: "fall" },
    ];

    return (
        <nav className="flex h-fit w-full justify-center">
            <ul className="flex w-full justify-center">
                {seasons.map((season, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center px-4 py-0 text-slate-400 hover:text-slate-200"
                    >
                        <Link
                            href={"/" + season.year + "/" + season.name}
                            className={`flex flex-col items-center ${pathname === `/${season.year}/${season.name.toLowerCase()}` ? "active text-slate-200" : ""}`}
                        >
                            <p className="flex justify-center text-base font-semibold capitalize leading-tight tracking-wider">
                                {season.name}
                            </p>
                            <p className="flex justify-center text-xs font-medium tracking-wide">
                                {season.year}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
