import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Character } from "@/types/jikanCharacter.types";
import Image from "next/image";
import { checkIfExist } from "@/utils/checkIfExists";

export default function CharacterCard(props: Character) {
    return (
        <Card className="flex h-28 w-full justify-between overflow-hidden rounded bg-slate-800 text-sm text-slate-400">
            <CardContent className="flex w-1/2 justify-start p-0">
                <div className="relative h-full w-20">
                    <Image
                        src={props.character.images.webp.image_url}
                        alt={props.character.name + " Image"}
                        sizes="20vw"
                        fill
                        className="absolute inset-0 object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="flex w-[calc(100%-5rem)] flex-col break-words pl-2 pt-2 text-left">
                    <p className="text-sky-500">
                        {checkIfExist(props.character.name)}
                    </p>
                    <p>{checkIfExist(props.role)}</p>
                </div>
            </CardContent>
            <CardContent className="flex w-1/2 justify-end p-0">
                {props.voice_actors.length > 0 && (
                    <>
                        <div className="flex w-[calc(100%-5rem)] flex-col break-words pr-2 pt-2 text-right">
                            <p className="text-sky-500">
                                {checkIfExist(
                                    props.voice_actors[0].person.name
                                )}
                            </p>
                        </div>
                        <div className="relative h-full w-20">
                            <Image
                                src={
                                    props.voice_actors[0].person.images.jpg
                                        .image_url
                                }
                                alt={
                                    props.voice_actors[0].person.name + " Image"
                                }
                                sizes="20vw"
                                fill
                                className="absolute inset-0 object-cover"
                                loading="lazy"
                            />
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
