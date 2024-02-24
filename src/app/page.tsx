import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getSeasonNowAllData } from "../utils/getSeasonNowAllData";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function Home() {
    let data = await getSeasonNowAllData();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>Isekai'Dex</CardTitle>
                </CardHeader>
            </Card>

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
                            <div className="relative h-full w-5/12 ">
                                <Image
                                    src={entry.images.jpg.image_url}
                                    alt="Picture of the author"
                                    fill
                                    className="rounded-bl rounded-tl object-fill"
                                />
                            </div>
                            <div className="text-md h-full w-7/12">
                                <CardContent className=" font-medium leading-tight tracking-tight text-slate-200">
                                    <p>{entry.title}</p>
                                </CardContent>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
            </div>
        </main>
    );
}
