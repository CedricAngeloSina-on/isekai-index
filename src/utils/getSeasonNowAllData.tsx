async function getSeasonNowAllData() {
    const allData = [];
    let page = 1;

    while (true) {
        const response = await fetch(
            `https://api.jikan.moe/v4/seasons/now?page=${page}`
        );
        const json = await response.json();

        if (
            !json.pagination.has_next_page &&
            json.pagination.current_page != json.pagination.last_visible_page
        ) {
            break;
        }

        allData.push(json);
        page++;
        await new Promise((resolve) => setTimeout(resolve, 500));
    }
    return allData;
}

export { getSeasonNowAllData };
