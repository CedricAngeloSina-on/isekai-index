import AnimeCard from "./anime-card";
import { getSeasonNowAllData } from "../utils/getSeasonNowAllData";

export default async function AnimeSeasonList() {
    let data = await getSeasonNowAllData();

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data
                .filter((entry) =>
                    entry.themes.some(
                        (theme: { mal_id: number }) => theme.mal_id === 62
                    )
                )
                .map((entry, index) => (
                    <AnimeCard
                        key={index}
                        cover_image={entry.images.jpg.image_url}
                        cover_image_alt={entry.titles[0].title + " Cover image"}
                        title={entry.titles[0].title}
                        studio_name={entry.studios[0].name}
                        synopsis={entry.synopsis}
                    ></AnimeCard>
                ))}
        </div>
    );
}
