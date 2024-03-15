import { Separator } from "@/components/ui/separator";

export default async function AnimeStatisticsAndSynopsisSkeleton() {
    return (
        <>
            <div className="flex h-auto w-full flex-col space-y-4 p-8">
                <div className="h-10 w-2/3 animate-pulse rounded bg-slate-700"></div>
                <div className="flex h-32 justify-between space-x-3">
                    <div className="flex h-full w-4/5 flex-row items-center rounded bg-slate-800">
                        <div className="flex h-full w-1/5 animate-pulse flex-col items-center justify-center space-y-1">
                            <div className="h-8 w-20 rounded bg-slate-700"></div>
                            <div className="h-10 w-20 rounded bg-slate-700"></div>
                        </div>
                        <Separator
                            orientation="vertical"
                            className="h-4/5 bg-slate-700"
                        />
                        <div className="flex h-full w-4/5 flex-col">
                            <div className="flex h-1/2 animate-pulse flex-row items-center space-x-6 pl-6 pt-4">
                                <div className="h-6 w-44 rounded bg-slate-700"></div>
                                <div className="h-6 w-44 rounded bg-slate-700"></div>
                                <div className="h-6 w-44 rounded bg-slate-700"></div>
                            </div>
                            <div className="flex h-1/2 animate-pulse flex-row items-center space-x-2.5 pl-6">
                                <div className="h-6 w-24 rounded bg-slate-700"></div>
                                <Separator
                                    orientation="vertical"
                                    className="h-2/5 bg-slate-700"
                                />
                                <div className="h-6 w-10 rounded bg-slate-700"></div>
                                <Separator
                                    orientation="vertical"
                                    className="h-2/5 bg-slate-700"
                                />
                                <div className="h-6 w-28 rounded bg-slate-700"></div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-full w-1/5 items-center justify-center overflow-hidden rounded bg-slate-800"></div>
                </div>
                <div className="h-6 w-20 animate-pulse rounded bg-slate-700"></div>
                <div className="animate-pulse space-y-2">
                    <div className="h-4 w-96 rounded bg-slate-700"></div>
                    <div className="h-4 w-64 rounded bg-slate-700"></div>
                    <div className="h-4 w-72 rounded bg-slate-700"></div>
                    <div className="h-4 w-24 rounded bg-slate-700"></div>
                    <div className="h-4 w-40 rounded bg-slate-700"></div>
                    <div className="h-4 w-8 rounded bg-slate-700"></div>
                </div>
            </div>
        </>
    );
}
