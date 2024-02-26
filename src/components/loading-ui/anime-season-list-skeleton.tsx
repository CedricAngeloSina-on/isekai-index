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
import AnimeCardSkeleton from "./anime-card-skeleton";

export default function AnimeSeasonListSkeleton() {
    const numberOfCards = 18;

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[...Array(numberOfCards)].map((index) => (
                <AnimeCardSkeleton key={index}></AnimeCardSkeleton>
            ))}
        </div>
    );
}
