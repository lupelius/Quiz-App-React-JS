import { API_START, API_END, ACCESS_DENIED, API_ERROR } from './constants';
// This is actually calling the axios http request to the api
export const apiStart = label => ({
  type: API_START,
  payload: label
});
// This is to be called on finally callback of http axios req
export const apiEnd = label => ({
  type: API_END,
  payload: label
});
// This is to be used in case server responds with 403
export const accessDenied = url => ({
  type: ACCESS_DENIED,
  payload: {
    url
  }
});
// This is to be used on general errors
export const apiError = error => ({
  type: API_ERROR,
  error
});
