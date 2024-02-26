import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import AnimeSeasonList from "@/components/anime-season-list";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>Isekai&apos;Dex</CardTitle>
                </CardHeader>
            </Card>
            <AnimeSeasonList />
        </main>
    );
}
