import Logo from "@/components/navbar/logo";
import SeasonLinks from "@/components/navbar/season-links";
import Menu from "@/components/navbar/menu";

export default function Navbar() {
    return (
        <div className="flex flex-col items-center justify-between bg-slate-900/95 px-0">
            <div className="container mx-0 grid h-56 w-full grid-cols-1 gap-4 px-3 pt-10 sm:grid-cols-2 md:grid-cols-3">
                <Logo />
                <SeasonLinks />
                <Menu />
            </div>
        </div>
    );
}
