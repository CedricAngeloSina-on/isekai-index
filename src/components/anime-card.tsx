import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type AnimeCardProps = {
    cover_image: string;
    cover_image_alt: string;
    title: string;
    studio_name: string;
    synopsis: string;
};

export default async function AnimeCard(props: AnimeCardProps) {
    return (
        <Card className="h-flex-row flex h-[250px] w-[450px] items-center border-primary bg-gray-800">
            <div className="relative h-full w-5/12 overflow-hidden">
                <Image
                    src={props.cover_image}
                    alt={props.cover_image_alt + " Cover Image"}
                    sizes="500"
                    fill
                    className="absolute inset-0 rounded-bl rounded-tl object-fill"
                    priority
                />
                <div className="absolute bottom-0 left-0 z-10 w-full bg-gray-800 bg-opacity-80">
                    <CardContent className="p-2 text-sm font-semibold leading-tight tracking-tighter text-slate-300">
                        <p>{props.title}</p>
                    </CardContent>
                    <CardContent className="p-2 text-xs font-semibold tracking-tight text-slate-200">
                        <p>{props.studio_name}</p>
                    </CardContent>
                </div>
            </div>

            <div className="text-md h-full w-7/12 text-slate-400 transition duration-300 ease-in-out hover:text-slate-300">
                <CardContent className="h-32 overflow-hidden px-3 pt-3 text-xs hover:overflow-auto">
                    <p className="line-clamp-6 hover:line-clamp-none">
                        {props.synopsis}
                    </p>
                </CardContent>

                <CardContent className="relative h-36 w-full">
                    {/* <Image
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
                                /> */}
                </CardContent>
            </div>
        </Card>
    );
}
