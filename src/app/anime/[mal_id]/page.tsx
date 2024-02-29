import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function AnimeDetails({
    params,
}: {
    params: { mal_id: number };
}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>Isekai&apos;Dex</CardTitle>
                </CardHeader>
            </Card>
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>MAL ID: {params.mal_id}</CardTitle>
                </CardHeader>
            </Card>
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>MAL ID: {params.mal_id}</CardTitle>
                </CardHeader>
            </Card>
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>MAL ID: {params.mal_id}</CardTitle>
                </CardHeader>
            </Card>
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>MAL ID: {params.mal_id}</CardTitle>
                </CardHeader>
            </Card>
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>MAL ID: {params.mal_id}</CardTitle>
                </CardHeader>
            </Card>
        </main>
    );
}
