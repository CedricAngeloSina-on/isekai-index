export type Anime = {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
        webp: {
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
    approved: boolean;
    titles: {
        type: string;
        title: string;
    }[];
    title: string; //deprecated
    title_english: string; //deprecated
    title_japanese: string; //deprecated
    title_synonyms: string[]; //deprecated
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: {
        from: string;
        to: string;
        prop: {
            form: {
                day: number;
                month: number;
                year: number;
            };
            to: {
                day: number;
                month: number;
                year: number;
            };
            string: string;
        };
    };
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    season: string;
    year: number;
    broadcast: {
        day: string;
        time: string;
        timezone: string;
        string: string;
    };
    producers: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
    themes: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
    studios: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
    genres: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
};
