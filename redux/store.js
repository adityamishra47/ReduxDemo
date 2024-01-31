
import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from 'redux-thunk'
import countReducer from "./countReducer"
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
    countReducer: countReducer,
    productsReducer: productsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
