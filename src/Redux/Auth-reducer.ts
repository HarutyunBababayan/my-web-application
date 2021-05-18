import {LoginApi} from "../api/login-api";
import {ProfileInfoAction} from "./ProfileInfo-reducer";
import {PersonUserStateType} from "../types/all";
import {AppStateType, InferActionsTypes} from "./stor-redax";
import {ThunkAction} from "redux-thunk";

let initialState: PersonUserStateType = {
    userId: null,
    email: null,
    password: null,
    errorText: '',
    isFetching: true,
    isAuth: false,
    initialized: false
}

export type ActionsTypeAuth = InferActionsTypes<typeof AuthAction | typeof ProfileInfoAction>;
export type ThunkTypeDescription = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypeAuth>;

const authReducer = (state = initialState, action: ActionsTypeAuth): PersonUserStateType => {
    switch (action.type) {
        case "SET_IS_LOGIN":
            return {...state, isAuth: action.isAuth}
        case "ERROR_TEXT":
            return {...state, errorText: action.errorText}
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: action.initialized,
            };
        default:
            return state;
    }
};

export const checkAutUser = (type: boolean): ThunkTypeDescription => {
    return async (dispatch) => {
        if (localStorage.getItem('user')) {
            dispatch(AuthAction.setIsAuth(type))
            dispatch(ProfileInfoAction.setUser(JSON.parse(localStorage.getItem('user') as string)))
        }
        dispatch(AuthAction.initializedSuccess(type))
    }
}

export const getSigInUserThank = (email: string, password: string): ThunkTypeDescription => {
    return async (dispatch) => {
        LoginApi.sigIn(email, password).then((data) => {
            if (data !== 'Пврол не сотвесту') {
                localStorage.setItem('user', JSON.stringify(data[0]));
                dispatch(ProfileInfoAction.setUser(data[0]))
                dispatch(AuthAction.setIsAuth(true))
            } else {
                dispatch(AuthAction.setErrorText(data))
            }
        });
    }
}

export const AuthAction = {
    setIsAuth: (isAuth: boolean) => ({type: "SET_IS_LOGIN", isAuth} as const),
    setErrorText: (errorText: '') => ({type: "ERROR_TEXT", errorText} as const),
    initializedSuccess: (initialized: boolean) => ({type: "INITIALIZED_SUCCESS", initialized} as const)
}

export default authReducer;