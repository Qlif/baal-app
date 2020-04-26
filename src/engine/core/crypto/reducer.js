import * as types from "./types";

const initialState = {
  data: {},
  current: 'btc',
  volume: 5,
  valute: 'uah',
};

export default function cryptoReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CRYPTO_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    case types.SET_CURRENT_CRYPTO: {
      return {
        ...state,
        current: action.payload
      };
    }
    case types.SET_VOLUME_CRYPTO: {
      return {
        ...state,
        volume: action.payload
      };
    }
    case types.SET_CURRENT_VALUTE: {
      return {
        ...state,
        valute: action.payload
      };
    }
    default: {
      return state;
    }

  }
}