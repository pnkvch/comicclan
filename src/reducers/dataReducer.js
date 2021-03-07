import {
  RECEIVED_API_DATA,
  REQUEST_API_DATA,
  REQUEST_BOOK_DATA,
  RECEIVED_BOOK_DATA
} from "../actions";

let initialState = {
  books: [],
  book: {},
  loading: true
};

export let dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        loading: true
      };

    case RECEIVED_API_DATA:
      return {
        ...state,
        books: action.payload,
        loading: false
      };

    case REQUEST_BOOK_DATA:
      return {
        ...state,
        loading: true
      };

    case RECEIVED_BOOK_DATA:
      return {
        ...state,
        book: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
