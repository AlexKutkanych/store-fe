const BASE_URL = `${import.meta.env.VITE_APP_API_PATH}/api/v1`;
const AUTH_BASE_URL = `${BASE_URL}/auth`;
const PRODUCT_BASE_URL = `${BASE_URL}/products`;
const CART_BASE_URL = `${BASE_URL}/cart`;

const AUTH_API_ROUTES = {
  SIGN_UP: `${AUTH_BASE_URL}/signup`,
  LOGIN: `${AUTH_BASE_URL}/login`,
  LOGOUT: `${AUTH_BASE_URL}/logout`,
};

const PRODUCT_API_ROUTES = {
  GET_NEW: `${PRODUCT_BASE_URL}/new`,
  SEARCH: `${PRODUCT_BASE_URL}/search`,
};

const CART_API_ROUTES = {
  GET_CART: `${CART_BASE_URL}/new`,
  ADD_TO_CART: `${CART_BASE_URL}/add`,
};

export {
  AUTH_API_ROUTES,
  PRODUCT_API_ROUTES,
  CART_API_ROUTES,
};
