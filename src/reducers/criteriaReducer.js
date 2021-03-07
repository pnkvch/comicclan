import { CHANGE_CRITERIA } from "../actions";

let initialState = {
  criteria: "title"
};

export let criteriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CRITERIA:
      return {
        criteria: action.payload
      };
    default:
      return state;
  }
};
