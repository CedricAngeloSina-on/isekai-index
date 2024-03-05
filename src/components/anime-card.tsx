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
import { Badge } from "@/components/ui/badge";
type AnimeCardProps = {
    mal_id: number;
    cover_image: string;
    cover_image_alt: string;
    title: string;
    studio_name: string;
    synopsis: string;
    genres: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
};

export default function AnimeCard(props: AnimeCardProps) {
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
        <Card className="h-flex-row flex h-[250px] w-[450px] items-center border-primary bg-slate-800">
            <div className="relative h-full w-5/12 overflow-hidden">
                <Link
                    href={"/anime/" + props.mal_id}
                    className="absolute inset-0"
                >
                    <Image
                        src={props.cover_image}
                        alt={props.cover_image_alt + " Cover Image"}
                        sizes="500px"
                        quality={100}
                        fill
                        className="absolute inset-0 rounded-bl-lg rounded-tl-lg object-fill"
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 z-10 w-full rounded-bl-lg bg-slate-800 bg-opacity-80">
                        <CardContent className="p-2 pb-0 text-sm font-semibold leading-tight tracking-tighter text-slate-300">
                            <p>{props.title}</p>
                        </CardContent>
                        <CardContent className="p-2 text-xs font-semibold tracking-tight text-slate-200">
                            <p>{props.studio_name}</p>
                        </CardContent>
                    </div>
                </Link>
            </div>
            <div className="text-md relative h-full w-7/12">
                <CardContent
                    ref={contentRef}
                    onMouseEnter={handleHoverEnter}
                    onMouseLeave={handleHoverLeave}
                    className="group absolute top-0 h-[85%] overflow-hidden px-3 pb-0 pt-3 text-xs text-slate-400 hover:overflow-auto"
                    style={{
                        scrollbarGutter: "stable",
                    }}
                >
                    <div className="">
                        <div className="h-20 pb-2">
                            <p>{props.title}</p>
                        </div>
                        <p
                            className={`text-left text-slate-400 transition-all duration-300 ease-in-out ${
                                isExpanded ? "line-clamp-none" : "line-clamp-3"
                            }`}
                        >
                            {props.synopsis}
                        </p>
                    </div>
                </CardContent>
                <CardContent className="absolute bottom-0 flex h-[15%] w-full space-x-2 rounded-br-lg bg-slate-700 p-2">
                    {props.genres.slice(0, 3).map((genre, index) => (
                        <Badge
                            key={index} // Unique key for React to efficiently update and re-render components
                            variant="outline" // Badge variant, possibly specifying an outline style
                            className="border-sky-500 bg-sky-500 px-2 py-0 font-semibold lowercase text-slate-200" // CSS classes for styling
                        >
                            {genre.name}
                        </Badge>
                    ))}
                </CardContent>
            </div>
        </Card>
    );
}
