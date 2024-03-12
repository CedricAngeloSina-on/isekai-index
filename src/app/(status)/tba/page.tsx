import { Suspense } from "react";
import AnimeSeasonListUpcoming from "@/components/anime-season-list-upcoming";
import AnimeSeasonListSkeleton from "@/components/skeleton/anime-season-list-skeleton";

export default function TBA() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            TBA
            <Suspense fallback={<AnimeSeasonListSkeleton />}>
                <AnimeSeasonListUpcoming />
            </Suspense>
        </main>
    );
}
