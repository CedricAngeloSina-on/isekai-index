import { getAnimeCharacters } from "@/utils/getAnimeCharacters";
import { getAnimeStaff } from "@/utils/getAnimeStaff";
import CharacterCard from "@/components/character-card";
import StaffCard from "@/components/staff-card";

export default async function Overview({
    params: { mal_id },
}: {
    params: { mal_id: number };
}) {
    const characterData = await getAnimeCharacters(mal_id);
    const staffData = await getAnimeStaff(mal_id);

    return characterData ? (
        <div className="flex h-auto w-full flex-col space-y-4 px-8 pb-8 text-left text-slate-400">
            <div className="flex text-base font-semibold capitalize leading-tight tracking-wider text-slate-400">
                Characters
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {characterData.slice(0, 10).map((character, index) => (
                    <CharacterCard key={index} {...character} />
                ))}
            </div>
            <div className="flex pt-6 text-base font-semibold capitalize leading-tight tracking-wider text-slate-400">
                Staff
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {staffData.slice(0, 4).map((staff, index) => (
                    <StaffCard key={index} {...staff} />
                ))}
            </div>
        </div>
    ) : null;
}
