export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVED_API_DATA = "RECEIVED_API_DATA";
export const FILTER_DATA = "FILTER_DATA";

export const requestApiData = query => {
    return {
        type: REQUEST_API_DATA,
        payload: query
    };
};

export const receivedApiData = payload => {
    return {
        type: RECEIVED_API_DATA,
        payload
    };
};
