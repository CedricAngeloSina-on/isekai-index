import { Suspense } from "react";
import AnimeSeasonList from "@/components/anime-season-list";
import AnimeSeasonListSkeleton from "@/components/skeleton/season/anime-season-list-skeleton";

export default function Airing() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            AIRING
            {/* <Suspense fallback={<AnimeSeasonListSkeleton />}>
                <AnimeSeasonList />
            </Suspense> */}
        </main>
    );
}
