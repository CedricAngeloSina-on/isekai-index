import Link from "next/link";
import React from "react";

const seasons = [
    { key: 1, season: "winter" },
    { key: 2, season: "spring" },
    { key: 3, season: "summer" },
    { key: 4, season: "fall" },
];

const buttons = [
    { key: 1, label: "Airing" },
    { key: 2, label: "Archive" },
    { key: 3, label: "TBA" },
];

function Navbar() {
    return (
        <div className="flex flex-col items-center justify-between">
            <nav className="grid h-56 w-full grid-cols-1 gap-4 bg-gray-700 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex">
                    <span className="text-base">いせかい</span>
                </div>

                <ul className="flex w-full justify-center pt-10">
                    {seasons.map(({ key, season }) => (
                        <Link href={"/" + season}>
                            <li
                                key={key}
                                className="flex w-fit flex-col items-center px-4 py-0 text-slate-400 first-line:p-5 hover:text-slate-200"
                            >
                                <p className="text-base font-semibold capitalize leading-tight tracking-wider">
                                    {season}
                                </p>
                                <p className="text-xs font-medium tracking-wide">
                                    2024
                                </p>
                            </li>
                        </Link>
                    ))}
                </ul>

                <div className="flex justify-end">
                    {buttons.map(({ label, key }) => (
                        <Link
                            key={key}
                            href={"/" + label}
                            className="relative flex px-5 text-white hover:text-red-500"
                        >
                            {label}
                            <span className="absolute bottom-0 left-1/2 w-0 -translate-x-1/2 transform border-b-4 border-transparent bg-transparent transition duration-500"></span>
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
