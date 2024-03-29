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
        <Card className="h-flex-row border-3 relative flex h-[250px] w-[450px] items-center bg-slate-800">
            <div className="h-flex-row border-3 absolute inset-0 flex h-[250px] w-[450px] animate-pulse rounded-lg ring-1 ring-slate-700"></div>
            <CardContent className="relative h-full w-5/12 animate-pulse overflow-hidden">
                <div className="absolute inset-0 rounded-bl-lg rounded-tl-lg bg-slate-700 object-cover"></div>
            </CardContent>
            <CardContent className="h-full w-7/12 space-y-1.5 px-3 pt-3">
                <div className="h-20 w-full animate-pulse rounded bg-slate-700"></div>
                <div className="h-4 w-4/5 animate-pulse rounded bg-slate-700"></div>
                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-700"></div>
                <div className="h-4 w-2/5 animate-pulse rounded bg-slate-700"></div>
            </CardContent>
        </Card>
    );
}
