import Link from "next/link";
import React from "react";
import SeasonLinks from "@/components/navbar/season-links";

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

                <SeasonLinks />

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
