import { Anime } from "@/types/jikanAnime.types";
export async function getAnimeByIDFull(mal_id: number): Promise<Anime> {
    const response = await fetch(
        `https://api.jikan.moe/v4/anime/${mal_id}/full`
    );
    const data = (await response.json()).data as Anime;
    return data; // Assuming the API response is of type Anime
}
