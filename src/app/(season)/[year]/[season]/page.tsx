import { Suspense } from "react";
import AnimeSeasonList from "@/components/anime-season-list";
import AnimeSeasonListSkeleton from "@/components/skeleton/anime-season-list-skeleton";

export default function Season({
    params,
}: {
    params: { year: number; season: string };
}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <Suspense fallback={<AnimeSeasonListSkeleton />}>
                <AnimeSeasonList year={params.year} season={params.season} />
            </Suspense>
        </main>
    );
}
