type JikanSeasonData = {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
        images: {
            image_url: string;
            small_image_url: string;
            medium_image_url: string;
            large_image_url: string;
            maximum_image_url: string;
        };
    };
    titles: [
        {
            type: string;
            title: string;
        },
    ];
    synopsis: string;
    themes: [
        {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        },
    ];
    studios: [
        {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        },
    ];
};

type Pagination = {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
        count: number;
        total: number;
        per_page: number;
    };
};

async function getSeasonNowAllData(): Promise<JikanSeasonData[]> {
    const allData: JikanSeasonData[] = [];
    let page = 1;

    while (true) {
        const response = await fetch(
            `https://api.jikan.moe/v4/seasons/now?page=${page}`
        );

        const data = (await response.json()) as {
            pagination: Pagination;
            data: JikanSeasonData[];
        };

        await new Promise((resolve) => setTimeout(resolve, 400));

        if (
            !data.pagination ||
            (data.pagination.has_next_page === false &&
                data.pagination.current_page !==
                    data.pagination.last_visible_page)
        ) {
            break;
        }

        allData.push(...data.data);
        page++;
    }

    return allData;
}

export { getSeasonNowAllData };
