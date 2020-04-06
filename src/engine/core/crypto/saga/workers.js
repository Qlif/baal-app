// Modules
import Axios from "axios";
import {put} from "redux-saga/effects";
// Action
import {setCryptoData} from "../../crypto/actions";

export function* callCryptoDataAsyncWorker() {
    try {
        const response = yield Axios.get("https://api.kuna.io/v3/exchange-rates");
        function filterCyrentCryppto(value) {
            const cryptoValute = ["usd", "uah", "rub", "btc", "eth", "xrp"];
            if(cryptoValute.includes(value.currency))
                return value
        }
        const data = (response.data).filter(filterCyrentCryppto);
        const action = setCryptoData(data);
        yield put(action)
    }catch (e) {
        console.log(e);
    }
}

