import { getAnimeCharacters } from "@/utils/getAnimeCharacters";
import CharacterCard from "@/components/character-card";

export default async function Overview({
    params: { mal_id },
}: {
    params: { mal_id: number };
}) {
    const characterData = await getAnimeCharacters(mal_id);

    return characterData ? (
        <div className="flex h-auto w-full flex-col space-y-4 px-8 pb-8 text-left text-slate-400">
            <div className="flex text-base font-semibold capitalize leading-tight tracking-wider text-slate-400">
                Characters
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {characterData.slice(0, 9).map((character, index) => (
                    <CharacterCard key={index} {...character} />
                ))}
            </div>
            <div className="flex text-base font-semibold capitalize leading-tight tracking-wider text-slate-400">
                Staff
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <div className="flex h-32 w-full overflow-hidden rounded-sm bg-red-500">
                    <div className="flex">
                        <div className="h-full w-24 bg-sky-500"></div>
                        <div className="flex flex-col justify-between p-1 text-left">
                            <p>STAFF</p>
                            <p>POSITION</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-32 w-full overflow-hidden rounded-sm bg-red-500">
                    <div className="flex">
                        <div className="h-full w-24 bg-sky-500"></div>
                        <div className="flex flex-col justify-between p-1 text-left">
                            <p>STAFF</p>
                            <p>POSITION</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-32 w-full overflow-hidden rounded-sm bg-red-500">
                    <div className="flex">
                        <div className="h-full w-24 bg-sky-500"></div>
                        <div className="flex flex-col justify-between p-1 text-left">
                            <p>STAFF</p>
                            <p>POSITION</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-32 w-full overflow-hidden rounded-sm bg-red-500">
                    <div className="flex">
                        <div className="h-full w-24 bg-sky-500"></div>
                        <div className="flex flex-col justify-between p-1 text-left">
                            <p>STAFF</p>
                            <p>POSITION</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-32 w-full overflow-hidden rounded-sm bg-red-500">
                    <div className="flex">
                        <div className="h-full w-24 bg-sky-500"></div>
                        <div className="flex flex-col justify-between p-1 text-left">
                            <p>STAFF</p>
                            <p>POSITION</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-32 w-full overflow-hidden rounded-sm bg-red-500">
                    <div className="flex">
                        <div className="h-full w-24 bg-sky-500"></div>
                        <div className="flex flex-col justify-between p-1 text-left">
                            <p>STAFF</p>
                            <p>POSITION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
