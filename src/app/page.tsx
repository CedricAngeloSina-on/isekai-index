import AnimeSeasonList from "@/components/anime-season-list";

export default function Home() {
    const currentDate = new Date().toISOString().slice(0, 7);
    const [year, month] = currentDate.split("-");

    const getSeason = (month: string) => {
        if (["12", "01", "02"].includes(month)) return "winter";
        if (["03", "04", "05"].includes(month)) return "spring";
        if (["06", "07", "08"].includes(month)) return "summer";
        if (["09", "10", "11"].includes(month)) return "fall";
    };

    const season = getSeason(month);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <AnimeSeasonList year={parseInt(year, 10)} season={season!} />
        </main>
    );
}
