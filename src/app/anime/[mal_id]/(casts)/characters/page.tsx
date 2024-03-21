import { getAnimeCharacters } from "@/utils/getAnimeCharacters";
import CharacterCard from "@/components/character-card";

export default async function Characters({
    params: { mal_id },
}: {
    params: { mal_id: number };
}) {
    const characterData = await getAnimeCharacters(mal_id);
    return (
        <div className="flex h-auto w-full flex-col space-y-4 px-8 pb-8 text-left text-slate-400">
            <div className="flex text-base font-semibold capitalize leading-tight tracking-wider text-slate-400">
                Characters
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {characterData.map((character, index) => (
                    <CharacterCard key={index} {...character} />
                ))}
            </div>
        </div>
    );
}
