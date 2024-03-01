import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function AnimeCardSkeleton() {
    return (
        <Card className="h-flex-row border-3 flex h-[250px] w-[450px] items-center bg-slate-800">
            <CardContent className="relative h-full w-5/12 animate-pulse overflow-hidden">
                <div className="absolute inset-0 rounded-bl-lg rounded-tl-lg bg-slate-700 object-fill"></div>
            </CardContent>
            <CardContent className="h-full w-7/12 space-y-1.5 px-3 pt-3">
                <div className="h-12 w-full animate-pulse rounded bg-slate-700"></div>
                <div className="h-3 w-4/5 animate-pulse rounded bg-slate-700"></div>
                <div className="h-3 w-2/3 animate-pulse rounded bg-slate-700"></div>
                <div className="h-3 w-2/5 animate-pulse rounded bg-slate-700"></div>
            </CardContent>
        </Card>
    );
}
