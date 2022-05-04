import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import universitiesReducer from "./universitiesReducer"

const reducers = combineReducers({
    universities: universitiesReducer,
    countries: countriesReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>