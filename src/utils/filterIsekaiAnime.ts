import { Anime } from "@/types/jikanAnime.types";
export default function filterIsekaiAnime(animeList: Anime[]): Anime[] {
    return animeList.filter((anime) =>
        anime.themes.some((theme) => theme.mal_id === 62)
    );
}
