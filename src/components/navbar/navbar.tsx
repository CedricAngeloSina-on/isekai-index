import Link from "next/link";
import React from "react";
import SeasonLinks from "@/components/navbar/season-links";
import Menu from "@/components/navbar/menu";

function Navbar() {
    return (
        <div className="flex flex-col items-center justify-between">
            <div className="grid h-56 w-full grid-cols-1 gap-4 bg-gray-700 pt-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="">
                    <span className="text-base">いせかい</span>
                </div>
                <SeasonLinks />
                <Menu />
            </div>
        </div>
    );
}

export default Navbar;
