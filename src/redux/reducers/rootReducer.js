import { combineReducers } from "redux";
import { imageReducer } from './imageReducer'

//root-reducer - combine multiple reducer
export const rootReducer = combineReducers({
    imageReducer
})