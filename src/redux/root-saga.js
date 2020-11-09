//run all sagas at app start up
import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  // all takes array of sagas to listen for, each ele should call the saga to initialize
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
