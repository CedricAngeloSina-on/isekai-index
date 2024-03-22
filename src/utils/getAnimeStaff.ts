import type { Staff } from "@/types/jikanStaff.types";
import { JikanResponse } from "@/types/jikanResponse.types";

export async function getAnimeStaff(mal_id: number): Promise<Staff[]> {
    const allData: Staff[] = [];
    try {
        const response = await fetch(
            `https://api.jikan.moe/v4/anime/${mal_id}/staff`
        );
        const data = (await response.json()) as JikanResponse<Staff[]>;

        if (data.data) {
            allData.push(...data.data);
        }

        return allData;
    } catch (error) {
        console.error("Error fetching characters:", error);
        return allData;
    }
}
