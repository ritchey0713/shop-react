//run all sagas at app start up
import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";
import { shopSagas } from "./shop/shop.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  // all takes array of sagas to listen for, each ele should call the saga to initialize
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
