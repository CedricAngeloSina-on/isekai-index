import type { Anime } from "@/types/jikanAnime.types";
import type { JikanResponse } from "@/types/jikanResponse.types";

import filterIsekaiAnime from "./filterIsekaiAnime";

export async function getSeasonUpcoming(): Promise<Anime[]> {
    const allData: Anime[] = [];
    let page = 1;

    while (true) {
        const response = await fetch(
            `https://api.jikan.moe/v4/seasons/upcoming?page=${page}`
        );

        const data = (await response.json()) as JikanResponse<Anime[]>;

        await new Promise((resolve) => setTimeout(resolve, 400));

        if (
            !data.pagination ||
            (data.pagination.has_next_page === false &&
                data.pagination.current_page !==
                    data.pagination.last_visible_page)
        ) {
            break;
        }

        allData.push(...filterIsekaiAnime(data.data));

        page++;
    }
    return allData;
}
