import { takeEvery, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";
import {
  fetchCollectionFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    // call 1st arg is a func, other args are the args to the the invoked funcs args ie: convertCollectionsSnapShotToMap(snapshot)
    //we want to use call to yield this func in case it takes long to return
    const collectionsMap = yield call(
      convertCollectionsSnapShotToMap,
      snapshot
    );
    // put is what saga uses in place of dispatch
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    put(fetchCollectionFailure(error.message));
  }

  // dispatch(fetchCollectionsStart());

  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch((error) => dispatch(fetchCollectionFailure(error.message)));
}

export function* fetchCollectionsStart() {
  //takeEvery is non-blocking, allows app to keep moving while this code is running
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
