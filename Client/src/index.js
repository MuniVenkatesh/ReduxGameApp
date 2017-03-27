import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./Components/app.js";
import combine from "./Reducers/combineReducer.js"

const store=createStore(combine);

render(<Provider store={store}>
  <App />
  </Provider>,document.getElementById('root'));
