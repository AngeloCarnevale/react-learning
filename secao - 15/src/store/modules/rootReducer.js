import { combineReducers } from "redux";
import examplereducer from './example/reducer'
import auth from './auth/reducer'

export default combineReducers({
    auth
})