import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength = maxLengthCreator(10);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const MyPostForm = (props) => {
    const classes = useStyles();

    const changeValue = (e) => {
        if (e.target.form[0].keyCode === 13) {
            props.addNewMessage(e.target.value)
        }
    }

    return (
        <form name={'PostForm'} className={classes.root} noValidate autoComplete="off">
            <TextField onChange={changeValue} ref={} name="newPostBody" validate={[required, maxLength]} id="standard-basic"
                       label="Enter your Post"/>
        </form>
    );
}
export default MyPostForm;

