import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import authReducer from "./authReducer";
import usersPageReducer from "./usersPageReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";


const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer
})


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store