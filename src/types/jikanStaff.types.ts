export type Staff = {
    person: {
        mal_id: number;
        url: string;
        images: { jpg: { image_url: string } };
        name: string;
    };
    positions: string[];
};
