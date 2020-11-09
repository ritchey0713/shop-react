import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
//import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
// import { fetchCollectionStart } from "./shop/shop.saga";
import rootSaga from "./root-saga";

// set as array to add addtional middlewares later
//logger added for debugging purposes
// replace thunk with sagas
//const middlewares = [thunk];

// create sagas
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// allows us to save redux store to local/session storage
export const persistor = persistStore(store);

// export default store;
export default { store, persistor };
