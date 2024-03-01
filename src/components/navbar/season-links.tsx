import Link from "next/link";

export default function SeasonLinks() {
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;
    const seasons = [
        { name: "winter", year: currentYear },
        { name: "spring", year: currentYear },
        { name: "summer", year: currentYear },
        { name: "fall", year: lastYear },
    ];

    return (
        <ul className="flex w-full justify-center pt-10">
            {seasons.map((season, index) => (
                <li
                    key={index}
                    className="flex w-fit flex-col items-center px-4 py-0 text-slate-400 first-line:p-5 hover:text-slate-200"
                >
                    <Link href={"/" + season.name}>
                        <p className="flex justify-center text-base font-semibold capitalize leading-tight tracking-wider">
                            {season.name}
                        </p>
                        <p className="flex justify-center text-xs font-medium tracking-wide">
                            2024
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
