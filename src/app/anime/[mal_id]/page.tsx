import Overview from "./(casts)/overview/page";

export default async function DefaultOverview({
    params: { mal_id },
}: {
    params: { mal_id: number };
}) {
    return <Overview params={{ mal_id }} />;
}
