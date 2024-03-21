import { Character } from "@/types/jikanCharacter.types";
import { JikanResponse } from "@/types/jikanResponse.types";

export async function getAnimeCharacters(mal_id: number): Promise<Character[]> {
    const allData: Character[] = [];
    try {
        const response = await fetch(
            `https://api.jikan.moe/v4/anime/${mal_id}/characters`
        );
        const data = (await response.json()) as JikanResponse<Character[]>;

        if (data.data) {
            allData.push(...data.data);
        }

        return allData;
    } catch (error) {
        console.error("Error fetching characters:", error);
        return allData;
    }
}
