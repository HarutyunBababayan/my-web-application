import React from "react";
import classes from './Loading.module.css'
import loaderSpinner from "../../../assets/images/Loader.svg";

export const Loading = () => {

    return (
        <div className={classes.loaderSpinner}><img src={loaderSpinner}/></div>

    )
}