// Modules
import Axios from "axios";
import {put, delay} from "redux-saga/effects";
// Action
import {setCryptoData} from "../../crypto/actions";

export function* callCryptoDataAsyncWorker() {
  const CURRENCY_FOR_CHECK = ['btc', 'eth', 'xrp'];

  while (true) { // Send request for update information
    try {
      const response = yield Axios.get("https://api.kuna.io/v3/exchange-rates");
      const data = response.data.reduce((acc, item) => {
        const {currency} = item;
        if (CURRENCY_FOR_CHECK.includes(currency)) {
          acc[currency] = item;
        }
        return acc;
      }, {})
      const action = setCryptoData(data);
      yield put(action);
      yield delay(300000);// 5 min wait
    } catch (e) {
      console.log(e);
    }
  }
}

