import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getSeasonNowAllData } from "../utils/getSeasonNowAllData";

export default async function Home() {
    let data = await getSeasonNowAllData();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Card>
                <CardHeader>
                    <CardTitle>Isekai'D</CardTitle>
                    <CardDescription>
                        The Database for Isekai Degens
                    </CardDescription>
                </CardHeader>
            </Card>
            <div className="container text-balance">
                <p>{JSON.stringify(data)}</p>
            </div>
        </main>
    );
}
