import { combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer, } from "../Reducer/counter_Reducer";
export const container_Store = legacy_createStore(
    combineReducers({counterReducer,}),
    composeWithDevTools()
)