import {ProfileApi} from "../api/profile-api";
import {AppStateType, InferActionsTypes} from "./stor-redax";
import { UserType} from "../types/all";
import {ThunkAction} from "redux-thunk";

export type PersonUserStateType = {
    user: UserType
    setSelectedUser: UserType[],
    isFetching: boolean,
}


let initioneState: PersonUserStateType = {
    user: {
        id: 0,
        photoUrl: '',
        login: '',
        password: '',
        gender: '',
        followed: [],
        age: 0,
        fullName: '',
        name: '',
        birtDay: '',
        lastName: '',
        status: '',
        location: {
            city: '',
            country: ''
        }
    },
    setSelectedUser: [],
    isFetching: true
}

const ProfileInfoReducer = (state = initioneState, action: ActionsTypeProfileInfo): PersonUserStateType => {
    switch (action.type) {
        case "SET_SELECT_USERS":
            return {...state, setSelectedUser: action.setSelectedUser}
        case "SET_USER":
            return {...state, user: action.user}
        case "CHANGE_STATUS":
            // @ts-ignore
            return {...state, user: {...state.user, status: action.status}};
        default:
            return state;
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
    }
};

export type ActionsTypeProfileInfo = InferActionsTypes<typeof ProfileInfoAction>;
export type ThunkTypeProfileInfo = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypeProfileInfo>;

export const changeStatusThank = (id: number, user: UserType, status: string): ThunkTypeProfileInfo => {
    return async (dispatch) => {
        dispatch(ProfileInfoAction.changeStatus(status));
        if (user) {
            user.status = status;
            localStorage.setItem('user', JSON.stringify(user));
            ProfileApi.updateStatus(id, user).then(response => {
                console.log(response)
            });
        }
    };
};

export const UserUpdateInfoThank = (id: number, user: UserType): ThunkTypeProfileInfo => {
    return async (dispatch) => {
        dispatch(ProfileInfoAction.setUser(user));
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            ProfileApi.updateUser(id, user).then(response => {
                console.log(response)
            });
        }
    };
};

export const getProfileUser = (id = 0): ThunkTypeProfileInfo => {
    return async (dispatch) => {
        dispatch(ProfileInfoAction.toggleIsFetcher(true))
        const data = await ProfileApi.getUser(id) as UserType
        dispatch(ProfileInfoAction.setSelectUserAC(data))
        dispatch(ProfileInfoAction.toggleIsFetcher(false))
    }
}

export const ProfileInfoAction = {
    changeStatus: (status: string) => ({type: "CHANGE_STATUS", status} as const),
    setSelectUserAC: (setSelectedUser: any) => ({
        type: "SET_SELECT_USERS",
        setSelectedUser
    } as const),
    setUser: (user: UserType) => ({type: "SET_USER", user} as const),
    toggleIsFetcher: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)
}


export default ProfileInfoReducer;