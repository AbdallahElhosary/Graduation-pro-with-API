import { combineReducers } from "redux";
import matrialReducer from "./matrialReducer";
import departmantsReducer from "./departmentsReducer";
import courseReducer from "./courseReducer";

export default combineReducers({
    allMatrail : matrialReducer,
    departments: departmantsReducer,
    courses: courseReducer

})