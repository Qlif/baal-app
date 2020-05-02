//TODO: Selector with Reselect
import {createSelector} from "reselect";

export const cryptowidgetSelector = state => state.crypto.data;
export const currentCryptoSelector = state => state.crypto.current;
export const volumeCryptoSelector = state => state.crypto.volume;
export const currentValuteSelector = state =>state.crypto.valute;
export const loaderSelector = state =>state.crypto.loader;

export const calcCryptoSelector = createSelector(
  cryptowidgetSelector,
  currentCryptoSelector,
  volumeCryptoSelector,
  currentValuteSelector,
  (data, current, volume, valute )=> {
    if(data[current]&&data[current][valute])
       return `${volume} ${current.toUpperCase()} will be ${data[current][valute] * volume} ${valute.toUpperCase()}`
  }
);
