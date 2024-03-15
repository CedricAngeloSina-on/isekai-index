import { Suspense } from "react";
import AnimeCoverImageAndInfo from "@/components/anime/anime-cover-image-and-info";
import AnimeStatisticsAndSynopsis from "@/components/anime/anime-statistics-and-synopsis";
//skeletons
import AnimeCoverImageAndInfoSkeleton from "@/components/skeleton/anime/anime-cover-image-and-info-skeleton";
import AnimeStatisticsAndSynopsisSkeleton from "@/components/skeleton/anime/anime-statistics-and-synopsis-skeleton";
import Link from "next/link";

export default function AnimePage({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { mal_id: number };
}) {
    const labels = ["Overview", "Characters", "Staff"];

    return (
        <main className="min-h-screen w-full bg-slate-900">
            <div className="container flex flex-row px-3">
                <Suspense fallback={<AnimeCoverImageAndInfoSkeleton />}>
                    <AnimeCoverImageAndInfo mal_id={params.mal_id} />
                </Suspense>
                <div className="relative flex h-auto w-full flex-col">
                    <Suspense fallback={<AnimeStatisticsAndSynopsisSkeleton />}>
                        <AnimeStatisticsAndSynopsis mal_id={params.mal_id} />
                    </Suspense>
                    <div className="flex h-auto w-full flex-row space-y-4 p-8 text-left text-slate-400">
                        <ul className="flex w-full justify-center">
                            {labels.map((label, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col items-center px-4 py-0 text-slate-400 hover:text-slate-200"
                                >
                                    <Link
                                        href={
                                            "/anime/" +
                                            params.mal_id +
                                            "/" +
                                            label.toLowerCase()
                                        }
                                        className="text-slate-400"
                                    >
                                        <p className="flex justify-center text-base font-semibold capitalize leading-tight tracking-wider">
                                            {label}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {children}
                </div>
            </div>
        </main>
    );
}
