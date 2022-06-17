import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import usersReducer from "./users-reduser";
import profileReducer from "./profile-reduser";

let reducers = combineReducers({
    form: formReducer,
    usersPage: usersReducer,
    profilePage: profileReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store






