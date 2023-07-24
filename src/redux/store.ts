import { createStore } from "redux";
import rootReducer from "./reducers"; // You need to create this file (explained in step 3)

const store = createStore(rootReducer);

export default store;
