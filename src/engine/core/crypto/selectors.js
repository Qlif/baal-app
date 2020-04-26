//TODO: Selector with Reselect
import {createSelector} from "reselect";

export const cryptowidgetSelector = state => state.crypto.data;
export const currentCryptoSelector = state => state.crypto.current;
export const volumeCryptoSelector = state => state.crypto.volume;
export const currentValuteSelector = state =>state.crypto.valute;


export const dataCurrentSelector = createSelector(
  cryptowidgetSelector,
  currentCryptoSelector,
  (data, current)=> data[current] || {}
)

export const calcCryptoSelector = createSelector(
  dataCurrentSelector,
  currentCryptoSelector,
  volumeCryptoSelector,
  currentValuteSelector,
  (data, current, volume, valute )=> `${volume} ${current.toUpperCase()} will be ${data[valute] * volume} ${valute.toUpperCase()}`|| {}
)