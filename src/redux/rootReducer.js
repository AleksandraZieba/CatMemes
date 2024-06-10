// reducers/rootReducer.js
import { combineReducers } from "redux";
import memeReducer from "./reducer";

const rootReducer = combineReducers({
  memes: memeReducer,
});

export default rootReducer;
