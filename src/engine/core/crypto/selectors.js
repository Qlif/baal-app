//TODO: Selector with Reselect
import {createSelector} from "reselect";
export const cryptowidgetSelector = state => state.crypto.data;
export const currentCryptoSelector = state => state.crypto.current;
export const volumeCryptoSelector = state => state.crypto.volume;

// const cryptoBthSelector = createSelector(cryptowidgetSelector,
//     items=items.currency
//     );