import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import './assets/css/index.css';
import App from "./containers/App";
import store from "./store";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// Would register for a progressive app for live release
serviceWorker.unregister();
