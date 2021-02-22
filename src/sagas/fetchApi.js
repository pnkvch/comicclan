export async function fetchData(query) {
    const url = query
        ? `https://api.itbook.store/1.0/search/${query}`
        : "https://api.itbook.store/1.0/new";

    try {
        const response = await fetch(url).then(x => x.json());
        const results = response.books;

        console.log(results);

        return results;
    } catch (e) {
        console.log(e);
    }
}

export async function fetchBookData(query) {
    const url = `https://api.itbook.store/1.0/books/${query}`;

    try {
        const response = await fetch(url).then(x => x.json());
        const results = response;
        console.log(results);

        return results;
    } catch (e) {
        console.log(e);
    }
}
