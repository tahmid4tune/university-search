import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composerEnhancer = typeof window != 'undefined' ? (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__ || compose : compose

export const store = createStore(reducers, {}, composerEnhancer(applyMiddleware(thunk)))