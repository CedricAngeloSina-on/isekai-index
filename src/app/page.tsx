import { Suspense } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import AnimeSeasonList from "@/components/anime-season-list";
import AnimeSeasonListSkeleton from "@/components/skeleton/anime-season-list-skeleton";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>Isekai&apos;Dex</CardTitle>
                </CardHeader>
            </Card>
            <Suspense fallback={<AnimeSeasonListSkeleton />}>
                <AnimeSeasonList />
            </Suspense>
        </main>
    );
}
