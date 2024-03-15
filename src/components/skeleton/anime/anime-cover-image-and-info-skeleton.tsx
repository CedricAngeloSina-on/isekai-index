import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function AnimeCoverImageAndInfoSkeleton() {
    return (
        <div className="relative flex h-auto flex-col">
            <div className="relative -mt-14 flex h-[360px] w-[270px] justify-start rounded-lg bg-slate-800">
                <div className="h-full w-full rounded-lg bg-slate-800"></div>
            </div>
            <div className="relative flex w-[270px] flex-col justify-start">
                <Card className="mt-4 bg-slate-800 pt-4">
                    {[...Array(10)].map((_, index) => (
                        <CardContent key={index} className="space-y-1">
                            <div className="h-4 w-20 animate-pulse rounded bg-slate-700"></div>
                            <div className="h-4 w-48 animate-pulse rounded bg-slate-700"></div>
                        </CardContent>
                    ))}
                </Card>
            </div>
        </div>
    );
}
