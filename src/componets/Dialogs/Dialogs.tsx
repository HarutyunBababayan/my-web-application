import React, {useCallback, useRef} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DIalogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType, UserType} from "../../types/all";
import MicNoneIcon from '@material-ui/icons/MicNone';

type  PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    userMessage: (id: number, data: any) => void
    user: UserType
}

const Dialogs: React.FC<PropsType> = ({dialogs, messages, userMessage, user}) => {


    const dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                              id={dialog.id}/>);
    const messagesElements = messages.map(message => <Message key={message.id} message={message.message}/>)

    const inputEl = useRef<any>(null);

    let addNewMessage = useCallback(
        () => {
            const text = inputEl.current.value
            const data = {
                "id": user.id,
                "name": user.name,
                "message": text,
                "src": "https://coderthemes.com/simple/bs3/dark/assets/images/users/avatar-1.jp"
            };

            userMessage(user.id, data);
            inputEl.current.value = '';
        },
        [user, userMessage]
    );

    const changeInput = (e: any) => {
        if (e.code === "Enter") {
            addNewMessage();
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <div className={classes.inputBlockStyle}>
                <input className={classes.inputStyle} placeholder="Enter your message" type='textarea' onKeyUp={changeInput} ref={inputEl}/>
                <button className={classes.audioButtonStyl}><MicNoneIcon/></button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;