import { createStore, combineReducers, applyMiddleware } from "redux";
import { getUsersReducer } from "./reducers/getUsersReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    users: getUsersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))