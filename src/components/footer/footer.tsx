import {
    GitHubLogoIcon,
    DiscordLogoIcon,
    GlobeIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-between bg-slate-900 px-0">
            <div className="container mx-0 flex justify-between gap-4 px-3 pb-12 pt-10">
                <div className="flex flex-row items-center space-x-4">
                    <a
                        href="https://github.com/CedricAngeloSina-on/isekai-index"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Goes to Isekai'Dex Github Repository."
                    >
                        <GitHubLogoIcon className="h-6 w-6 text-slate-400 hover:text-slate-200" />
                    </a>
                    <a
                        href="https://cedricsina-on.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Goes to Isekai'Dex creator's portfolio website. (https://cedricsina-on.vercel.app Cedric Angelo Sina-on - Portfolio)"
                    >
                        <GlobeIcon className="h-6 w-6 text-slate-400 hover:text-slate-200" />
                    </a>
                    <a
                        href="https://discordapp.com/users/439861611780505620"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Goes to Isekai'Dex creator's Discord Account."
                    >
                        <DiscordLogoIcon className="h-6 w-6 text-slate-400 hover:text-slate-200" />
                    </a>
                </div>
                <div className="max-w-md text-justify text-sm text-slate-400">
                    <p>
                        Coded in{" "}
                        <a
                            href="https://code.visualstudio.com"
                            className="font-medium text-slate-400 hover:text-sky-500 focus-visible:text-sky-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visual Studio Code
                        </a>
                        , built with{" "}
                        <a
                            href="https://nextjs.org"
                            className="font-medium text-slate-400 hover:text-sky-500 focus-visible:text-sky-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Next.js
                        </a>
                        ,{" "}
                        <a
                            href="https://tailwindcss.com"
                            className="font-medium text-slate-400 hover:text-sky-500 focus-visible:text-sky-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Tailwind CSS
                        </a>
                        , and{" "}
                        <a
                            href="https://ui.shadcn.com"
                            className="font-medium text-slate-400 hover:text-sky-500 focus-visible:text-sky-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            shadcn/ui
                        </a>
                        , and deployed with{" "}
                        <a
                            href="https://vercel.com"
                            className="font-medium text-slate-400 hover:text-sky-500 focus-visible:text-sky-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Vercel
                        </a>
                        . All text is set in the{" "}
                        <a
                            href="https://vercel.com/font"
                            className="font-medium text-slate-400 hover:text-sky-500 focus-visible:text-sky-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Geist Font
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
