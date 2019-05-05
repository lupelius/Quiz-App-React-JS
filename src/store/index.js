import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import apiMiddleware from "../middleware/api";
import { logger } from 'redux-logger'
const middleware = [apiMiddleware,logger]
const store = createStore(rootReducer, applyMiddleware(...middleware));
window.store = store;
export default store;
