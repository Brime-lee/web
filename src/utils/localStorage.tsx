import { GraphqlApi, TokenStorage, windowExists } from 'storejars-react-toolkit';

import config from '../config';

export const tokenStorage = new TokenStorage(config.TOKEN_STORAGE);

export const api = new GraphqlApi(config.BASE_URL, tokenStorage);

export function getItem(key: string, defaultValue = {}) {
  const res = windowExists.localStorage.getItem(key);

  return res ? JSON.parse(res) : defaultValue;
}

export function setItem(key: string, value) {
  return windowExists.localStorage.setItem(key, JSON.stringify(value));
}
