//TODO: Selector with Reselect
import {createSelector} from "reselect";
export const cryptowidgetSelector = state => state.crypto.data;
export const currentCryptoSelector = state => state.crypto.current;

// const cryptoBthSelector = createSelector(cryptowidgetSelector,
//     items=items.currency
//     );