import { getSeasonNowAllData } from "@/utils/getSeasonNowAllData";
import AnimeCard from "@/components/ui/anime-card";
export default async function Home() {
    const data = await getSeasonNowAllData();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-xl font-black">
            Isekai Index
            {data
                .filter((entry: any) =>
                    entry.themes.some(
                        (theme: { mal_id: number }) => theme.mal_id === 62
                    )
                )
                .map((entry, index) => (
                    <AnimeCard key={index}
                        cover_image={entry.images.jpg.image_url}
                        cover_image_alt={entry.title + " Cover image"}
                        title={entry.title}
                        studio_name={entry.studios[0].name}
                        synopsis={entry.synopsis}
                    ></AnimeCard>
                ))}
        </main>
    );
}
