import Image from "next/image";
import Link from "next/link";
import { getAnimeByIDFull } from "@/utils/getAnimeByIDFull";
import { PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type AnimeDetailsProps = {
    mal_id: number;
};
export default async function AnimeStatisticsAndSynopsis({
    mal_id,
}: AnimeDetailsProps) {
    const animeData = await getAnimeByIDFull(mal_id);

    return animeData ? (
        <>
            <div className="flex h-auto w-full flex-col space-y-4 p-8 text-left text-slate-400">
                <p className="text-3xl font-semibold">
                    {animeData.titles[0].title}
                </p>
                <div className="flex h-32 justify-between space-x-3">
                    <div className="flex h-full w-4/5 flex-row items-center rounded bg-slate-800">
                        <div className="flex h-full w-1/5 flex-col items-center justify-center space-y-1">
                            <Badge
                                variant="outline"
                                className="rounded border-sky-500 bg-sky-500 px-2 py-0 text-lg font-bold text-white"
                            >
                                SCORE
                            </Badge>
                            <p className="text-4xl font-bold">
                                {animeData.score}
                            </p>
                        </div>
                        <Separator
                            orientation="vertical"
                            className="h-4/5 bg-slate-400"
                        />
                        <div className="flex h-full w-4/5 flex-col">
                            <div className="flex h-1/2 flex-row items-center space-x-6 pl-6 pt-4 text-xl">
                                <p>
                                    Ranked{" "}
                                    <span className="font-extrabold">
                                        #{animeData.rank}
                                    </span>
                                </p>
                                <p>
                                    Popularity{" "}
                                    <span className="font-extrabold">
                                        #{animeData.popularity}
                                    </span>
                                </p>
                                <p>
                                    Members{" "}
                                    <span className="font-extrabold">
                                        {animeData.members}
                                    </span>
                                </p>
                            </div>
                            <div className="flex h-1/2 flex-row items-center space-x-2.5 pl-6">
                                <p className="capitalize">
                                    {animeData.season} {animeData.year}
                                </p>
                                <Separator
                                    orientation="vertical"
                                    className="h-2/5 bg-slate-400"
                                />
                                <p>{animeData.type}</p>
                                <Separator
                                    orientation="vertical"
                                    className="h-2/5 bg-slate-400"
                                />
                                {animeData.studios.length > 0 && (
                                    <p>{animeData.studios[0].name}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-full w-1/5 items-center justify-center overflow-hidden rounded">
                        <Link
                            href={animeData.trailer.url}
                            className="absolute inset-0 flex items-center justify-center"
                            target="_blank"
                        >
                            <Image
                                src={animeData.trailer.images.medium_image_url}
                                alt={animeData.title + " Youtube thumbnail"}
                                fill
                                sizes={"10vw"}
                                quality={100}
                                className="absolute w-full object-cover brightness-75"
                                loading="lazy"
                            />
                            <PlayCircle className="absolute size-12 text-slate-400 transition duration-200 ease-in-out group-hover:text-slate-200" />
                        </Link>
                        d
                    </div>
                </div>
                <p className="text-base font-medium">SYNOPSIS</p>
                <p className="text-sm">{animeData.synopsis}</p>
            </div>
        </>
    ) : null;
}
