import { dataReducer } from "./dataReducer";
import { criteriaReducer } from "./criteriaReducer";
import { combineReducers } from "redux";

export default combineReducers({
  dataReducer,
  criteriaReducer
});
