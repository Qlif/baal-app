import * as types from "./types";

const initialState = {
    data: [],
};

export default function cryptoReducer(state = initialState,action) {
    switch (action.type) {
        case types.SET_CRYPTO_DATA:{
            return {
                ...state,
                data: action.payload
            };
        }
        default: {
            return state;
        }

    }
}