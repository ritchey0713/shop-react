import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// set as array to add addtional middlewares later
//logger added for debugging purposes
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
