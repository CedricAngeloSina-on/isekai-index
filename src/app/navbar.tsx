import React from "react";

const navItems = [
    { key: 1, label: "Winter" },
    { key: 2, label: "Spring" },
    { key: 3, label: "Summer" },
    { key: 4, label: "Fall" },
];

const buttons = [
    { key: 1, label: "Airing" },
    { key: 2, label: "Archive" },
    { key: 3, label: "TBA" },
    { key: 4, label: "Settings" },
];

function Navbar() {
    return (
        <nav className="grid h-16 w-full grid-cols-1 gap-4 bg-red-900 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex items-center">
                <img
                    src="/path/to/your/logo.png"
                    alt="Logo"
                    className="mx-4 h-8"
                />
            </div>

            <div className="flex flex-1 items-center justify-center">
                {" "}
                <ul className="flex w-full items-center justify-center">
                    {" "}
                    {navItems.map(({ label, key }) => (
                        <li key={key} className="h-full">
                            <button className="relative flex h-full items-center px-5 text-white hover:text-red-500">
                                <span className="text-base">{label}</span>
                                <span className="absolute bottom-0 left-1/2 w-0 -translate-x-1/2 transform border-b-4 border-transparent bg-transparent transition duration-500"></span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center justify-end">
                {buttons.map(({ label, key }) => (
                    <button
                        key={key}
                        className="relative flex h-full items-center px-5 text-white hover:text-red-500"
                    >
                        {label}
                        <span className="absolute bottom-0 left-1/2 w-0 -translate-x-1/2 transform border-b-4 border-transparent bg-transparent transition duration-500"></span>
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
