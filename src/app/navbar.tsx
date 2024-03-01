import Link from "next/link";
import React from "react";

const seasons = [
    { key: 1, season: "Winter" },
    { key: 2, season: "Spring" },
    { key: 3, season: "Summer" },
    { key: 4, season: "Fall" },
];

const buttons = [
    { key: 1, label: "Airing" },
    { key: 2, label: "Archive" },
    { key: 3, label: "TBA" },
];

function Navbar() {
    return (
        <nav className="grid h-56 w-full grid-cols-1 gap-4 bg-gray-700 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex">
                {/* <img
                    src="/path/to/your/logo.png"
                    alt="Logo"
                    className="mx-4 h-8"
                /> */}
            </div>

            <div className="flex flex-1 justify-center">
                <ul className="flex w-full justify-center">
                    {seasons.map(({ key, season }) => (
                        <li key={key}>
                            <button className="relative flex items-center px-5 text-white hover:text-red-500">
                                <span className="text-base">{season}</span>
                                <span className="absolute bottom-0 left-1/2 w-0 -translate-x-1/2 transform border-b-4 border-transparent bg-transparent transition duration-500"></span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

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
    );
}

export default Navbar;
