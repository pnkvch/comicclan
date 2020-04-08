async function fetchApi(query) {
    const url = query
        ? `https://comicclan.vett.io/comics?q=${query}`
        : `https://comicclan.vett.io/comics`;
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: "Bearer ComicClanVettIO2019"
            }
        }).then(x => x.json());

        return response;
    } catch (e) {
        console.log(e);
    }
}

export default fetchApi;
