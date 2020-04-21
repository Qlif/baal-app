import * as types from "./types";

const initialState = {
    data: [],
    current: 'btc',
};

export default function cryptoReducer(state = initialState,action) {
    switch (action.type) {
        case types.SET_CRYPTO_DATA:{
            return {
                ...state,
                data: action.payload
            };
        }
        case types.SET_CURRENT_CRYPTO:{
            return {
                ...state,
                current: action.payload
            };
        }
        default: {
            return state;
        }

    }
}