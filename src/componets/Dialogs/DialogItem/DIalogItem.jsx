import React from 'react';
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let patch = `/dialogs/${props.id}`
    return (
        <div key={'id_' + props.id} className={`${classes.dialog}`}>
            <NavLink to={patch} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;