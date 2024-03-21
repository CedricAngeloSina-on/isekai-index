import { Suspense } from "react";
import CastLinks from "@/components/anime/cast-links";
import AnimeCoverImageAndInfo from "@/components/anime/anime-cover-image-and-info";
import AnimeStatisticsAndSynopsis from "@/components/anime/anime-statistics-and-synopsis";
//skeletons
import AnimeCoverImageAndInfoSkeleton from "@/components/skeleton/anime/anime-cover-image-and-info-skeleton";
import AnimeStatisticsAndSynopsisSkeleton from "@/components/skeleton/anime/anime-statistics-and-synopsis-skeleton";

export default function AnimePage({
    children,
    params: { mal_id },
}: {
    children: React.ReactNode;
    params: { mal_id: number };
}) {
    return (
        <main className="min-h-screen w-full bg-slate-900">
            <div className="container flex flex-row px-3">
                <Suspense fallback={<AnimeCoverImageAndInfoSkeleton />}>
                    <AnimeCoverImageAndInfo mal_id={mal_id} />
                </Suspense>
                <div className="relative flex h-auto w-full flex-col">
                    <Suspense fallback={<AnimeStatisticsAndSynopsisSkeleton />}>
                        <AnimeStatisticsAndSynopsis mal_id={mal_id} />
                    </Suspense>
                    <CastLinks mal_id={mal_id} />
                    {children}
                </div>
            </div>
        </main>
    );
}
