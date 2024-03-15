import Image from "next/image";
import { getAnimeByIDFull } from "@/utils/getAnimeByIDFull";
import { FormatDate, FormatDateRange } from "@/utils/dateFormatter";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type AnimeDetailsProps = {
    mal_id: number;
};
export default async function AnimeCoverImageAndInfo({
    mal_id,
}: AnimeDetailsProps) {
    const animeData = await getAnimeByIDFull(mal_id);

    return animeData ? (
        <>
            <div className="relative flex h-auto flex-col">
                <div className="relative -mt-14 flex h-[360px] w-[270px] justify-start">
                    <Image
                        src={animeData.images.webp.large_image_url}
                        alt={animeData.titles[0].title + "cover image"}
                        sizes="500px"
                        fill
                        className="rounded-lg object-cover"
                        priority
                    />
                </div>
                <div className="relative flex w-[270px] flex-col justify-start">
                    <Card className="mt-4 bg-slate-800 pt-4 text-slate-400">
                        <CardContent>
                            <p className="text-sm font-bold">Format</p>
                            <p className="text-xs font-normal">
                                {animeData.type}
                            </p>
                        </CardContent>
                        <CardContent>
                            <p className="text-sm font-bold">Status</p>
                            <p className="text-xs font-normal">
                                {animeData.status}
                            </p>
                        </CardContent>
                        <CardContent>
                            <p className="text-sm font-bold">Start Date</p>
                            <p className="text-xs font-normal">
                                {FormatDate(animeData.aired.from)}
                            </p>
                        </CardContent>
                        <CardContent>
                            <p className="text-sm font-bold">Popularity</p>
                            <p className="text-xs font-normal">
                                {animeData.popularity}
                            </p>
                        </CardContent>
                        <CardContent>
                            <p className="text-sm font-bold">Favorites</p>
                            <p className="text-xs font-normal">
                                {animeData.favorites}
                            </p>
                        </CardContent>
                        <CardContent>
                            <p className="text-sm font-bold">Studios</p>
                            {animeData.studios.length > 0 && (
                                <p className="text-xs font-normal">
                                    {animeData.studios[0].name}
                                </p>
                            )}
                        </CardContent>
                        <CardContent>
                            <p className="text-sm font-bold">Producers</p>
                            {animeData.producers.length > 0 &&
                                animeData.producers.map((producer, index) => (
                                    <p
                                        key={index}
                                        className="text-xs font-normal"
                                    >
                                        {producer.name}
                                    </p>
                                ))}
                        </CardContent>
                        <CardContent>
                            <p className="text-sm font-bold">Source</p>
                            <p className="text-xs font-normal">
                                {animeData.source}
                            </p>
                        </CardContent>
                        <CardContent>
                            <p className="text-sm font-bold">Genres</p>
                            {animeData.genres.length > 0 &&
                                animeData.genres.map((genre, index) => (
                                    <p
                                        key={index}
                                        className="text-xs font-normal"
                                    >
                                        {genre.name}
                                    </p>
                                ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    ) : null;
}
