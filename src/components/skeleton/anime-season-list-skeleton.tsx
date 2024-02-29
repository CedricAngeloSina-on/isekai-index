import AnimeCardSkeleton from "./anime-card-skeleton";

export default function AnimeSeasonListSkeleton() {
    const numberOfCards = 18;

    return (
        <div className="-mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[...Array(numberOfCards)].map((_, index) => (
                <AnimeCardSkeleton key={index}></AnimeCardSkeleton>
            ))}
        </div>
    );
}
