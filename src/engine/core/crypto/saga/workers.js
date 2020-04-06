// Modules
import Axios from "axios";
import {put} from "redux-saga/effects";
// Action
import {setCryptoData} from "../../crypto/actions";

export function* callCryptoDataAsyncWorker() {
    try {
        const response = yield Axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11")
        const action = setCryptoData(response);
        yield put(action)
    }catch (e) {
        console.log(e);
    }
}

