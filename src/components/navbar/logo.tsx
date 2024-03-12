import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex h-fit w-full justify-start">
            <div className="flex flex-col items-center p-0 text-slate-200">
                <Link href="/">
                    <p className="text-4xl font-bold">Isekai&apos;Dex</p>
                </Link>
            </div>
        </div>
    );
}
