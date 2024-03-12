import AnimeSeasonList from "@/components/anime-season-list";

export default function Season({
    params,
}: {
    params: { year: number; season: string };
}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <AnimeSeasonList year={params.year} season={params.season} />
        </main>
    );
}
