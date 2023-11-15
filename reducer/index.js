import { combineReducers } from "redux";
import { fileReducer } from "./fileReducer";
import { projectReducer } from "./projectReducer";

const rootReducer = combineReducers({
    files: fileReducer,
    project: projectReducer
});

export default rootReducer