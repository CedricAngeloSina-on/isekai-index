"use client";
import React, { useRef } from "react";
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
    const hoverRef = useRef(false);
    const contentRef = useRef<HTMLParagraphElement>(null);

    const handleHover = (hovered: boolean): void => {
        hoverRef.current = hovered;

        // Reset scroll position if not hovered
        if (!hovered && contentRef.current) {
            contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
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
                <CardContent className="overflow-hidden px-3 pt-3 text-xs">
                    <p
                        ref={contentRef}
                        className={`line-clamp-6 h-32 text-slate-400 transition duration-300 ease-in-out hover:overflow-auto hover:text-slate-300 ${
                            hoverRef.current ? "line-clamp-none" : ""
                        }`}
                        onMouseEnter={() => handleHover(true)}
                        onMouseLeave={() => handleHover(false)}
                    >
                        {props.synopsis}
                    </p>
                </CardContent>
                <CardContent className="absolute bottom-0 flex w-full space-x-2 rounded-br-lg bg-slate-700 p-1 pl-2">
                    {props.genres.slice(0, 3).map((genre, index) => (
                        <Badge
                            key={index} // Unique key for React to efficiently update and re-render components
                            variant="outline" // Badge variant, possibly specifying an outline style
                            className="border-sky-500 bg-sky-500 py-0 font-medium text-slate-200" // CSS classes for styling
                        >
                            {genre.name}
                        </Badge>
                    ))}
                </CardContent>
            </div>
        </Card>
    );
}
