export type JikanResponse<AnimeData> = {
    pagination: Pagination;
    data: AnimeData;
};

export type Pagination = {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
        count: number;
        total: number;
        per_page: number;
    };
};
