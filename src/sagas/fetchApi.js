import md5 from "md5";

const PRIVATE_API_KEY = "ffcd2b1d9ac49164c339dfdc36c1182409870d62";
const PUBLIC_API_KEY = "9d9c21438275446a33bbafced69fbcd9";

async function fetchApi(query) {
    const baseUrl = "https://gateway.marvel.com/v1/public/series";
    const timestamp = new Date().getTime();
    const hash = md5(timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY);
    const auth = `?ts=${timestamp}&apikey=${PUBLIC_API_KEY}&hash=${hash}`;
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
