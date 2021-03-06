import * as types from "./types";

export const setCryptoData = data => ({
  type: types.SET_CRYPTO_DATA,
  payload: data
});

export const setCurrentCrypto = data => ({
  type: types.SET_CURRENT_CRYPTO,
  payload: data
});

export const setVolumeCrypto = data => ({
  type: types.SET_VOLUME_CRYPTO,
  payload: data
});

export const setCurrentValute = data => ({
  type: types.SET_CURRENT_VALUTE,
  payload: data
});

export const setLoader = data => ({
  type: types.SET_LOADER,
  payload: data
});
