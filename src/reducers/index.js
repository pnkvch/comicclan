import {
  RECEIVED_API_DATA,
  REQUEST_API_DATA,
  REQUEST_BOOK_DATA,
  RECEIVED_BOOK_DATA
} from "../actions";

let initialState = {
  comics: [],
  book: {},
  loading: true
};

let flag;

export let comicsReducer = (state = initialState, action) => {
  if (typeof action.payload == "boolean") {
    flag = true;
  }
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        loading: true
      };

    case RECEIVED_API_DATA:
      if (flag) {
        return {
          ...state,
          comics: action.payload,
          loading: true
        };
      }
      return {
        ...state,
        comics: action.payload,
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
