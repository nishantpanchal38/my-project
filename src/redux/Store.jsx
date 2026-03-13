import employeeReducer from "./employeeReducer";
import {createStore} from "redux";
const store=createStore(employeeReducer)
export default store