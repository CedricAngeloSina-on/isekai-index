import { Suspense } from "react";
import AnimeCoverImageAndInfo from "@/components/anime/anime-cover-image-and-info";
import AnimeStatisticsAndSynopsis from "@/components/anime/anime-statistics-and-synopsis";
//skeletons
import AnimeCoverImageAndInfoSkeleton from "@/components/skeleton/anime/anime-cover-image-and-info-skeleton";
import AnimeStatisticsAndSynopsisSkeleton from "@/components/skeleton/anime/anime-statistics-and-synopsis-skeleton";

export default function AnimePage({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { mal_id: number };
}) {
    return (
        <main className="container flex min-h-screen w-full flex-row bg-slate-900 px-3">
            <Suspense fallback={<AnimeCoverImageAndInfoSkeleton />}>
                <AnimeCoverImageAndInfo mal_id={params.mal_id} />
            </Suspense>
            <div className="relative flex h-auto w-full flex-col">
                <Suspense fallback={<AnimeStatisticsAndSynopsisSkeleton />}>
                    <AnimeStatisticsAndSynopsis mal_id={params.mal_id} />
                </Suspense>
                <div className="h-auto w-full flex-col space-y-4 p-8 text-left text-slate-400">
                    {children}
                </div>
            </div>
        </main>
    );
}
