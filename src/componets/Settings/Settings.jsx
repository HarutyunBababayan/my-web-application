import  React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import PersonAddDisabledTwoToneIcon from '@material-ui/icons/PersonAddDisabledTwoTone';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles(() => {
    return ({
        mySettingsBlock: {
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            backgroundColor: "#b8b8b8",
            textDecoration: "none",
            color: "#0f3031"
        },
        settingsContainer: {
            paddingLeft: 50
        },
    });
});

const Settings = () => {
    const classes = useStyles();
    return (
        <div className={classes.settingsContainer}>
            <h2>Общее</h2>
            <div>
                <NavLink className={classes.mySettingsBlock} to={'/UserSettings/'}>
                    <AccountCircleIcon/><ListItemText primary="Настройки Пользователя"/>
                </NavLink>
            </div>
            <div>
                <NavLink className={classes.mySettingsBlock} to={'/User_Security/'}>
                <TuneOutlinedIcon/> <ListItemText primary="Безопасгость"/>
                </NavLink>
            </div>
            <div>
                <NavLink  className={classes.mySettingsBlock} to={'/Blacklist/'} >
                <PersonAddDisabledTwoToneIcon/> <ListItemText primary="Чёрный список"/>
                </NavLink>
            </div>
        </div>
    );
}

export default  Settings;