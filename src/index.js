import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rooReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let storage = createStore(rooReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storage}>
    <App />
  </Provider>,
  document.getElementById("root")
);
