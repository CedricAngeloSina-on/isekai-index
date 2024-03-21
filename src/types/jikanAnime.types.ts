export type AnimeFull = Anime & ExtraDetails;

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
    type:
        | "TV"
        | "OVA"
        | "Movie"
        | "Special"
        | "ONA"
        | "Music"
        | "CM"
        | "PV"
        | "TV Special";
    source: string;
    episodes: number;
    status: "Finished Airing" | "Currently Airing" | "Not yet aired";
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
    rating:
        | "G - All Ages"
        | "PG - Children"
        | "PG-13 - Teens 13 or older"
        | "R - 17+ (violence & profanity)"
        | "R+ - Mild Nudity"
        | "Rx - Hentai";
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: "winter" | "spring" | "summer" | "fall";
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
    licensors: {
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
    explicit_genres: {
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
    demographics: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }[];
};

export type ExtraDetails = {
    relations: {
        relation: string;
        entry: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[];
    };
    theme: { openings: string[]; endings: string[] };
    external: { name: string; url: string }[];
    streaming: { name: string; url: string }[];
};
