import type { AnimeFull } from "@/types/jikanAnime.types";

export async function getAnimeByIDFull(mal_id: number): Promise<AnimeFull> {
    const response = await fetch(
        `https://api.jikan.moe/v4/anime/${mal_id}/full`
    );

    const data = (await response.json()).data as AnimeFull;
    return data;
}
