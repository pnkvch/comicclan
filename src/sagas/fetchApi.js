async function fetchApi(query) {
    const url = "https://api.shortboxed.com/comics/v1/new";
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: "Bearer ComicClanVettIO2019"
            }
        }).then(x => x.json());

        console.log(response.comics);

        return response.comics;
    } catch (e) {
        console.log(e);
    }
}

export default fetchApi;
