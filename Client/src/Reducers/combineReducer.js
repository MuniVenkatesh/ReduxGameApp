import {combineReducers} from "redux";
import {gameData} from "./gameReducer.js";

export default combineReducers({
  data:gameData
});
