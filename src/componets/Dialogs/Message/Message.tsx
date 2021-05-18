import React from 'react';
import classes from "./Message.module.css";

type PropsType = {
    key: number
    message: string
}


const Message: React.FC<PropsType> = ({key, message}) => {
    return (
        <div key={key} className={classes.message}>
            {message}
        </div>

    );
}

export default Message;