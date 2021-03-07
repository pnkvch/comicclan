export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVED_API_DATA = "RECEIVED_API_DATA";
export const REQUEST_BOOK_DATA = "REQUEST_BOOK_DATA";
export const RECEIVED_BOOK_DATA = "RECEIVED_BOOK_DATA";
export const CHANGE_CRITERIA = "CHANGE_CRITERIA";

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

export const requestBookData = query => {
  return {
    type: REQUEST_BOOK_DATA,
    payload: query
  };
};

export const receivedBookData = payload => {
  return {
    type: RECEIVED_BOOK_DATA,
    payload
  };
};

export const changeCriteria = payload => {
  return {
    type: CHANGE_CRITERIA,
    payload
  };
};
