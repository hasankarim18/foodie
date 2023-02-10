import {legacy_createStore, applyMiddleware} from 'redux'
import Reducer from "./reducer";
import logger from 'redux-logger';



const store = legacy_createStore(Reducer, applyMiddleware(logger))


export default store;