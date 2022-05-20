export const ENV = 'dev';
export const GENERIC_URL = {
  local: {
    api: 'http://localhost:8000/',
  },
  dev: {
    api: 'http://localhost:8000/',
  },
  uat: {
    api: '',
  },
  prod: {
    api: '',
  },
};

export const BASE_URL = GENERIC_URL[ENV].api;
export const PRODUCT = 'products'
export const MONEY = 'moneys'