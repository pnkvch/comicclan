import { RECEIVED_API_DATA, REQUEST_API_DATA } from "../actions";

let initialState = {
    comics: [],
    loading: true
};

export let comicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_API_DATA:
            return {
                ...state,
                loading: true
            };

        case RECEIVED_API_DATA:
            return {
                comics: action.payload,
                loading: false
            };

        default:
            return state;
    }
};
