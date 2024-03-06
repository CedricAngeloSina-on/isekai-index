"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FormatDateRange } from "@/utils/dateFormatter";
import { Anime } from "@/types/jikanAnime.types";

export default function AnimeCard(props: Anime) {
    const contentRef = useRef<HTMLParagraphElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleHoverEnter = () => {
        setIsExpanded(true);
    };

    const handleHoverLeave = () => {
        if (!contentRef.current || contentRef.current.scrollTop >= 10) {
            contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => setIsExpanded(false), 250);
            return;
        }
        setIsExpanded(false);
    };

    return (
        <Card className="h-flex-row flex aspect-video h-[261px] w-[464px] items-center border-primary bg-slate-800">
            <div className="relative h-full w-5/12 overflow-hidden">
                <Link
                    href={"/anime/" + props.mal_id}
                    className="absolute inset-0"
                >
                    <Image
                        src={props.images.webp.large_image_url}
                        alt={props.title + " Cover Image"}
                        sizes="20vw"
                        quality={100}
                        fill
                        className="absolute inset-0 rounded-bl-lg rounded-tl-lg object-fill"
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 z-10 w-full rounded-bl-lg bg-slate-800 bg-opacity-80">
                        <CardContent className="p-2 pb-0 text-sm font-semibold leading-tight tracking-tight text-slate-300">
                            <p>{props.title}</p>
                        </CardContent>
                        <CardContent className="p-2 text-xs font-semibold tracking-tight text-sky-500">
                            {props.studios.length > 0 && (
                                <p>{props.studios[0].name}</p>
                            )}
                        </CardContent>
                    </div>
                </Link>
            </div>
            <div className="text-md group relative h-full w-7/12 text-slate-400 transition-all duration-500 ease-in-out hover:text-slate-200">
                <CardContent
                    ref={contentRef}
                    onMouseEnter={handleHoverEnter}
                    onMouseLeave={handleHoverLeave}
                    className="absolute top-0 h-[85%] overflow-hidden px-3 pb-0 pt-3 text-xs hover:overflow-auto"
                    style={{
                        scrollbarGutter: "stable",
                    }}
                >
                    <div>
                        <div className="flex h-20">
                            <div className="w-2/3">
                                <p>{props.status}</p>
                                <p className="text-balance text-sm font-black">
                                    {props.airing ? (
                                        <>{props.broadcast.string}</>
                                    ) : (
                                        <>
                                            {FormatDateRange(
                                                props.aired.from,
                                                props.aired.to
                                            )}
                                        </>
                                    )}
                                </p>

                                <p>Source • {props.source}</p>
                            </div>
                            {props.trailer &&
                                props.trailer.images.medium_image_url && (
                                    <div className="relative h-3/5 w-1/3 items-center justify-center overflow-hidden rounded-sm border-2 border-slate-400 transition duration-500 ease-in-out hover:scale-105 group-hover:border-slate-200">
                                        <Link
                                            href={props.trailer.url}
                                            className="absolute inset-0 flex items-center justify-center"
                                            target="_blank"
                                        >
                                            <Image
                                                src={
                                                    props.trailer.images
                                                        .medium_image_url
                                                }
                                                alt={
                                                    props.title +
                                                    " Youtube thumbnail"
                                                }
                                                fill
                                                sizes={"10vw"}
                                                quality={100}
                                                className="absolute w-full object-cover brightness-50"
                                                loading="lazy"
                                            />
                                            <PlayCircle className="absolute text-slate-400 transition duration-200 ease-in-out group-hover:text-slate-200" />
                                        </Link>
                                    </div>
                                )}
                        </div>
                        <Separator className="bg-slate-400 group-hover:bg-slate-200 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out" />
                        <div className="pt-4">
                            <p
                                className={`text-left ${
                                    isExpanded
                                        ? "line-clamp-none"
                                        : "line-clamp-6"
                                }`}
                            >
                                {props.synopsis}
                            </p>
                        </div>
                    </div>
                </CardContent>
                <CardContent className="absolute bottom-0 flex h-[15%] w-full space-x-2 rounded-br-lg bg-slate-700 p-2">
                    {props.genres.length > 0 &&
                        props.genres.slice(0, 3).map((genre, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="border-sky-500 bg-sky-500 px-2 py-0 lowercase text-slate-200"
                            >
                                {genre.name}
                            </Badge>
                        ))}
                </CardContent>
            </div>
        </Card>
    );
}
