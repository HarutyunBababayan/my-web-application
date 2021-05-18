import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogReducer from "./Dialog-reducer";
import NavBarReducer from "./NavBar-reducer";
import ProfileInfoReducer from "./ProfileInfo-reducer";
import UsersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    profileInfo: ProfileInfoReducer,
    dialogPage: DialogReducer,
    navBarPage: NavBarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesTypes<T>>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;