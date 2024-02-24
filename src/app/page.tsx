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
    console.log(data);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>Isekai'D</CardTitle>
                </CardHeader>
            </Card>

            <div className="container grid grid-cols-3 gap-4 text-balance">
                {data
                    .filter((entry) =>
                        entry.themes.some((theme: any) => theme.mal_id === 62)
                    )
                    .map((entry, index) => (
                        <Card
                            key={index}
                            className="h-flex-row flex aspect-video h-[270] w-[480] items-center border-primary bg-gray-800"
                        >
                            <AspectRatio ratio={16 / 9}>
                                <Image
                                    src={entry.images.jpg.image_url}
                                    alt="Image"
                                    className="object-cover"
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    width={160}
                                    height={270}
                                />
                            </AspectRatio>
                            <CardContent className="text-md h-full w-2/3 font-medium leading-tight tracking-tight text-slate-200">
                                <p>{entry.title}</p>
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </main>
    );
}
