import React from "react";
import classes from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            {hasError && <span>"{meta.error}"</span>}
            <div>
                <textarea {...input} {...props} />
            </div>
        </div>
    )
}