import AnimeSeasonListSkeleton from "@/components/skeleton/season/anime-season-list-skeleton";

export default function Loading() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <AnimeSeasonListSkeleton />
        </main>
    );
}
