import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {createStore,applyMiddleware} from "redux";
import App from "./Components/app.js";
import combine from "./Reducers/combineReducer.js"

const store=createStore(combine,applyMiddleware(thunkMiddleware));

render(<Provider store={store}>
  <App />
  </Provider>,document.getElementById('root'));
