import { getAnimeCharacters } from "@/utils/getAnimeCharacters";
import CharacterCard from "../character-card";

export default async function CharactersList({ mal_id }: { mal_id: number }) {
    const characterData = await getAnimeCharacters(mal_id);
    return (
        <>
            <div className="flex text-base font-semibold capitalize leading-tight tracking-wider text-slate-400">
                Characters
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {characterData.map((character, index) => (
                    <CharacterCard key={index} {...character} />
                ))}
            </div>
        </>
    );
}
