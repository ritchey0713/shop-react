import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// set as array to add addtional middlewares later
//logger added for debugging purposes
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// allows us to save redux store to local/session storage
export const persistor = persistStore(store);

// export default store;
export default { store, persistor };
