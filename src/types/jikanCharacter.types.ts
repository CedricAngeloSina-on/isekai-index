export type Character = {
    character: {
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url: string;
                small_image_url: string;
            };
            webp: {
                image_url: string;
                small_image_url: string;
            };
        };
        name: string;
    };
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
    role: string;
    voice_actors: {
        person: {
            mal_id: number;
            url: string;
            images: {
                jpg: {
                    image_url: string;
                };
            };
            name: string;
        };
        language: string;
    }[];
};
