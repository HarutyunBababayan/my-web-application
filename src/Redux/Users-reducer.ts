import {userAPI} from "../api/UserApi";
import {UserType} from "../types/all";
import { ProfileInfoAction} from "./ProfileInfo-reducer";
import {AppStateType, InferActionsTypes} from "./stor-redax";
import {ThunkAction} from "redux-thunk";

let initialState = {
    users: [
        {
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
        }
    ] as Array<UserType>,
    pageSize: 3,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true
}

type initialStateType = typeof initialState

const UsersReducer = (state = initialState, action: ActionsTypeUser): initialStateType => {
    switch (action.type) {
        case "SET_USER_ALL": {
            return {...state, users: [...action.users]}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
};

export type ActionsTypeUser = InferActionsTypes<typeof UserActions | typeof ProfileInfoAction>;
export type ThunkTypeDescription = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypeUser>;

export const getUsersThank = (pageNumber: number): ThunkTypeDescription  => {

    return async (dispatch) => {
        dispatch(UserActions.toggleIsFetcher(true));
        dispatch(UserActions.setCurrentPage(pageNumber));
        userAPI.getUsers(pageNumber).then(response => {
            dispatch(UserActions.setUsers(response.data));
            dispatch(UserActions.toggleIsFetcher(false));
        });
    }
}

export const toggleFollowANDUnFollowThank = (userid: number, user: UserType, type: boolean): ThunkTypeDescription  => {
    return async (dispatch) => {
        if (type) {
            user.followed.push(userid)
        } else {
            user.followed = user.followed.filter((id: number) => id !== userid);
        }
        if (user) {
            dispatch(ProfileInfoAction.setUser(user));
            localStorage.setItem('user', JSON.stringify(user))
            userAPI.toggleFollow(user.id, user).then(r => console.log(r));
        }
    };
};

export const UserActions = {
    setUsers: (users: UserType[]) => ({type: "SET_USER_ALL", users} as const),
    setCurrentPage: (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const),
    toggleIsFetcher: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const),
};

export default UsersReducer;