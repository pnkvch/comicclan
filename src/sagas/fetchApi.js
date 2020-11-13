import md5 from "md5";

const { REACT_APP_PRIVATE_API_KEY, REACT_APP_PUBLIC_API_KEY } = process.env;

async function fetchApi(query) {
    const baseUrl = "https://gateway.marvel.com/v1/public/series";
    const timestamp = new Date().getTime();
    const hash = md5(
        timestamp + REACT_APP_PRIVATE_API_KEY + REACT_APP_PUBLIC_API_KEY
    );
    const auth = `?ts=${timestamp}&apikey=${REACT_APP_PUBLIC_API_KEY}&hash=${hash}`;
    const url = query ? `${baseUrl}?${query}${auth}` : `${baseUrl}${auth}`;

    try {
        const response = await fetch(url).then(x => x.json());
        const results = response.data.results;

        console.log(results);

        return results;
    } catch (e) {
        console.log(e);
    }
}

export default fetchApi;
