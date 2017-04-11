import {combineReducers} from "redux";
import {gameData} from "./gameReducer.js";
import {filter} from "./gameReducer.js";

export default combineReducers({
  data:gameData,
  filters:filter
});
