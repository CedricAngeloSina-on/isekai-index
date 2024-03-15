import AnimeCard from "./anime-card";
import { getSeasonUpcoming } from "@/utils/getSeasonUpcoming";

export default async function AnimeSeasonListUpcoming() {
    const animeData = await getSeasonUpcoming();

    return (
        <div className="-mt-14 mb-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {animeData.map((data, index) => (
                <AnimeCard key={index} {...data} />
            ))}
        </div>
    );
}
