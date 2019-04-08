import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(null, composeWithDevTools());

export default store;
