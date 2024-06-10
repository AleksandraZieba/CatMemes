import { createStore, combineReducers } from "redux";
import memeReducer from "./reducer";

const rootReducer = combineReducers({
  memes: memeReducer,
});

const store = createStore(rootReducer);

export default store;
