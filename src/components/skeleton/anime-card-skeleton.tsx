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
        <Card className="h-flex-row flex h-[250px] w-[450px] animate-pulse items-center border-primary bg-gray-800">
            <CardContent className="relative h-full w-5/12 overflow-hidden">
                <div className="absolute inset-0 rounded-bl rounded-tl bg-gray-700 object-fill"></div>
            </CardContent>
            <CardContent className="h-full w-7/12 space-y-1.5 px-3 pt-3">
                <div className="h-12 w-full rounded bg-gray-700"></div>
                <div className="h-3 w-4/5 rounded bg-gray-700"></div>
                <div className="h-3 w-2/3 rounded bg-gray-700"></div>
                <div className="h-3 w-2/5 rounded bg-gray-700 "></div>
            </CardContent>

            {/* <div className="my-2 h-4 w-7/12 rounded bg-gray-700 p-0"></div>
                        <div className="flex w-full">
                            <div className="my-2 h-4 w-7/12 rounded bg-gray-700 p-0"></div>
                            <div className="my-2 h-10 w-7/12 rounded bg-gray-700 p-0"></div>
                        </div> */}
        </Card>
    );
}
