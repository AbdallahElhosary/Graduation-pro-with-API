import { combineReducers } from "redux";
import matrialReducer from "./matrialReducer";

export default combineReducers({
    allMatrail : matrialReducer
})