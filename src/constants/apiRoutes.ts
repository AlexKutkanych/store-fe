const BASE_URL = `${import.meta.env.VITE_APP_API_PATH}/api/v1`;
const AUTH_BASE_URL = `${BASE_URL}/auth`;
const PRODUCT_BASE_URL = `${BASE_URL}/products`;
const USER_BASE_URL = `${BASE_URL}/user`;

const AUTH_API_ROUTES = {
  SIGN_UP: `${AUTH_BASE_URL}/signup`,
  LOGIN: `${AUTH_BASE_URL}/login`,
  LOGOUT: `${AUTH_BASE_URL}/logout`,
};

const PRODUCT_API_ROUTES = {
  GET_NEW: `${PRODUCT_BASE_URL}/new`,
  SEARCH: `${PRODUCT_BASE_URL}/search`,
};

const USER_API_ROUTES = {
  GET_USER_TOKEN: `${USER_BASE_URL}/token`,
  GET_USER_PROFILE: `${USER_BASE_URL}/profile`,
};

export { AUTH_API_ROUTES, PRODUCT_API_ROUTES, USER_API_ROUTES };
