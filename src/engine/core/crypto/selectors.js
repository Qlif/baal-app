//TODO: Selector with Reselect
import {createSelector} from "reselect";
export const cryptowidgetSelector = state => state.crypto.data;

// const cryptoBthSelector = createSelector(cryptowidgetSelector,
//     items=items.currency
//     );