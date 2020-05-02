// Core
import {takeEvery, all, call} from "redux-saga/effects";
// Type
import * as asyncTypes from "./asyncTypes";
// Worker
import {callCryptoDataAsyncWorker} from "./workers";

function* watchGetCryptoData() {
  yield takeEvery(asyncTypes.GET_CRYPTO_DATA_ASYNC, callCryptoDataAsyncWorker)
}

export function* cryptoWatcher() {
  yield all([
    call(watchGetCryptoData)
  ]);
}
