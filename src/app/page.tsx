import AnimeSeasonList from "@/components/anime-season-list";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <AnimeSeasonList year={2024} season={"spring"} />
        </main>
    );
}
