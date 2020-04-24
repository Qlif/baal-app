// Modules
import {combineReducers} from "redux";

// Reducers
import cryptoReducer from "../../core/crypto/reducer";

export default combineReducers({
  crypto: cryptoReducer
});