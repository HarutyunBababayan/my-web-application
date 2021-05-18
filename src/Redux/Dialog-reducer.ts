import {DialogsType, MessagesType} from "../types/all";
import {AppStateType, InferActionsTypes} from "./stor-redax";
import {ThunkAction} from "redux-thunk";

let initialState = {
    messages: [
        {id: 0, message: 'Привет как дела?'},
        {id: 1, message: 'Привет мы хатим вас предупредить, а новой сфере по зароботку.'},
        {id: 2, message: 'Что нового?'},
        {id: 3, message: 'Вы получили повышениею'},
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Harutyun'},
        {id: 2, name: 'Matevos'},
        {id: 3, name: 'Artur'},
        {id: 4, name: 'Angelina'},
    ] as Array<DialogsType>,
}

export type ActionsTypeDialog = InferActionsTypes<typeof DialogAction>;
export type ThunkTypeDescription = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypeDialog>;

export const DialogReducer = (state = initialState, action: ActionsTypeDialog) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            let newMessage = {
                id: state.messages.length,
                message: action.newMessageBody,
            };
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
};

export const addMessageThunk = (id: number,  data: any): ThunkTypeDescription => {
    return async (dispatch) => {
            // DialogApI.addMessage(data, id).then(response => {
            //     console.log(response)
            // });
        dispatch(DialogAction.actionAdduserMessage(data.message))
        }

};

export const DialogAction = {
    actionAdduserMessage: (newMessageBody: string) => ({type: "ADD_MESSAGE", newMessageBody} as const)
}

export default DialogReducer;