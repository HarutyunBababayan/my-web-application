import {ProfileApi} from "../api/profile-api";
import {AppStateType, InferActionsTypes} from "./stor-redax";
import {PostType} from "../types/all";
import {ThunkAction} from "redux-thunk";

const ADD_POST = 'profile/ADD-POST';
const SET_POSTS = 'profile/SET_POSTS';

type InitialStateType = {
    posts: PostType[]
}

let initialState: InitialStateType = {
    posts: [],
}

const ProfileReducer = (state = initialState, action: ActionsTypeProfile): InitialStateType => {
    switch (action.type) {
        case  ADD_POST: {
            // @ts-ignore
            return {...state, posts: [...state.posts, action.newPost]}
        }
        case SET_POSTS: {
            return {...state, posts: [...action.posts]}
        }
        default:
            return state;
    }
};

export type ActionsTypeProfile = InferActionsTypes<typeof ProfileActions>;
export type ThunkTypeDescription = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypeProfile>;

export const addPostThank = (id: number, newPostBody: string): ThunkTypeDescription => {
    return async (dispatch) => {
        let newPost = {
            id: id,
            message: newPostBody,
            likesCount: 0,
        };
        dispatch(ProfileActions.actionAddPost(newPost));
        ProfileApi.addPost(newPost).then(response => {
            console.log(response)
        });
    }
}

export const getPostThank = (): ThunkTypeDescription => {
    return async (dispatch) => {
       const data = await ProfileApi.getUsers()
            dispatch(ProfileActions.actionSetPost(data));
    }
}

export const updatePhoto = (photo: any | string, userData: any | string) => async () => {
    let updateImageUser = await ProfileApi.savePhoto(photo);
    userData['src'] = photo['name'];
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(userData));

};

export const ProfileActions = {
    actionAddPost: (newPost: string | any) => ({type: ADD_POST, newPost} as const),
    actionSetPost: (posts: PostType[]) => ({type: SET_POSTS, posts} as const)
}

export default ProfileReducer;