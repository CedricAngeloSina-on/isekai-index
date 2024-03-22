import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Staff } from "@/types/jikanStaff.types";
import Image from "next/image";
import { checkIfExist } from "@/utils/checkIfExists";

export default function StaffCard(props: Staff) {
    return (
        <Card className="flex h-28 w-full justify-between overflow-hidden rounded bg-slate-800 text-sm text-slate-400">
            <CardContent className="flex justify-start p-0">
                <div className="relative h-full w-20">
                    <Image
                        src={props.person.images.jpg.image_url}
                        alt={props.person.name + " Image"}
                        sizes="20vw"
                        fill
                        className="absolute inset-0 object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="flex w-[calc(100%-5rem)] flex-col break-words pl-2 pt-2 text-left">
                    <p className="text-sky-500">
                        {checkIfExist(props.person.name)}
                    </p>
                    {props.positions.length > 0 && (
                        <p>{props.positions.join(", ")}</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
