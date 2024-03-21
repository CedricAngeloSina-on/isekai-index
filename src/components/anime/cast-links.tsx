"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CastLinks({ mal_id }: { mal_id: number }) {
    const pathname = usePathname();

    const labels = ["Overview", "Characters", "Staff"];

    return (
        <div className="flex h-auto w-full flex-row space-y-4 p-8 text-left text-slate-400">
            <ul className="flex w-full justify-center">
                {labels.map((label, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center px-4 py-0 text-slate-400 hover:text-slate-200"
                    >
                        <Link
                            href={
                                "/anime/" + mal_id + "/" + label.toLowerCase()
                            }
                            key={index}
                            className={`flex flex-col items-center ${pathname === `/anime/${mal_id}/${label.toLowerCase()}` ? "active text-white" : ""}`}
                        >
                            <p className="flex justify-center text-base font-medium capitalize leading-tight tracking-wider">
                                {label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
