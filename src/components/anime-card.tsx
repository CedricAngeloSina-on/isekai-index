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
type AnimeCardProps = {
    mal_id: number;
    cover_image: string;
    cover_image_alt: string;
    title: string;
    studio_name: string;
    synopsis: string;
};

export default function AnimeCard(props: AnimeCardProps) {
    const hoverRef = useRef(false);
    const contentRef = useRef<HTMLParagraphElement | null>(null);

    const handleHover = (hovered: boolean): void => {
        hoverRef.current = hovered;
        if (!hovered) {
            // Reset the scroll position
            const element = contentRef.current;
            if (element) {
                element.scrollTo({
                    top: 0,
                    behavior: "smooth", // Add smooth scroll behavior
                });
            }
        }
    };

    return (
        <Card className="h-flex-row flex h-[250px] w-[450px] items-center border-primary bg-gray-800">
            <div className="relative h-full w-5/12 overflow-hidden">
                <Link href={"/anime/" + props.mal_id}>
                    {" "}
                    <Image
                        src={props.cover_image}
                        alt={props.cover_image_alt + " Cover Image"}
                        sizes="500px"
                        fill
                        className="absolute inset-0 rounded-bl rounded-tl object-fill"
                        loading="lazy"
                    />
                </Link>
                <div className="absolute bottom-0 left-0 z-10 w-full bg-gray-800 bg-opacity-80">
                    <CardContent className="p-2 text-sm font-semibold leading-tight tracking-tighter text-slate-300">
                        <p>{props.title}</p>
                    </CardContent>
                    <CardContent className="p-2 text-xs font-semibold tracking-tight text-slate-200">
                        <p>{props.studio_name}</p>
                    </CardContent>
                </div>
            </div>
            <div className="text-md h-full w-7/12 ">
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
            </div>
        </Card>
    );
}
