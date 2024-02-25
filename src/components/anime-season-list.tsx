import { Suspense } from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getSeasonNowAllData } from "../utils/getSeasonNowAllData";

export default async function AnimeSeasonList() {
    let data = await getSeasonNowAllData();

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data
                .filter((entry) =>
                    entry.themes.some(
                        (theme: { mal_id: number }) => theme.mal_id === 62
                    )
                )
                .map((entry, index) => (
                    <Card
                        key={index}
                        className="h-flex-row flex h-[250px] w-[450px] items-center border-primary bg-gray-800"
                    >
                        <div className="relative h-full w-5/12 overflow-hidden">
                            <Image
                                src={entry.images.jpg.image_url}
                                alt={entry.title + " Cover image"}
                                sizes="500"
                                fill
                                className="absolute inset-0 rounded-bl rounded-tl object-fill"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 z-10 w-full bg-gray-800 bg-opacity-80">
                                <CardContent className="p-2 text-sm font-semibold leading-tight tracking-tighter text-slate-300">
                                    <p>{entry.title}</p>
                                </CardContent>
                                <CardContent className="p-2 text-xs font-semibold tracking-tight text-slate-200">
                                    <p>{entry.studios[0].name}</p>
                                </CardContent>
                            </div>
                        </div>

                        <div className="text-md h-full w-7/12 text-slate-400 transition duration-300 ease-in-out hover:text-slate-300">
                            <CardContent className="text-xs">
                                <p className="line-clamp-6 hover:line-clamp-none">
                                    {entry.synopsis}
                                </p>
                            </CardContent>

                            <CardContent className="relative h-36 w-full">
                                <Image
                                    src={
                                        "https://img.youtube.com/vi/" +
                                        entry.trailer.youtube_id +
                                        "/mqdefault.jpg"
                                    }
                                    alt={
                                        entry.trailer.youtube_id +
                                        " Youtube Thumbnail"
                                    }
                                    sizes="500"
                                    fill
                                    className="absolute inset-0 rounded-bl rounded-tl object-contain"
                                />
                            </CardContent>
                        </div>
                    </Card>
                ))}
        </div>
    );
}
