import { combineReducers } from "redux";
import examplereducer from './example/reducer'

export default combineReducers({
    example: examplereducer,
})