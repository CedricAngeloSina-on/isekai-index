import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default async function Home() {
    let data = await fetch(
        "https://api.jikan.moe/v4/anime?genres=24&page=1&limit=1"
    );
    let json = await data.json();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Card>
                <CardHeader>
                    <CardTitle>Isekai Index</CardTitle>
                    <CardDescription>
                        The Database for Isekai Degens
                    </CardDescription>
                </CardHeader>
            </Card>
            <p>{JSON.stringify(json)}</p>
        </main>
    );
}
