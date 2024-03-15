import AnimeCard from "./anime-card";
import { getSeason } from "../utils/getSeason";

export default async function AnimeSeasonList({
    year,
    season,
}: {
    year: number;
    season: string;
}) {
    const animeData = await getSeason({ year, season });

    return (
        <div className="-mt-14 mb-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {animeData.map((data, index) => (
                <AnimeCard key={index} {...data} />
            ))}
        </div>
    );
}
