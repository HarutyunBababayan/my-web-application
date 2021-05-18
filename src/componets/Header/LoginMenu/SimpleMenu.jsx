import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AuthAction} from "../../../Redux/Auth-reducer";
import classess from './SimpleMenu.module.css'


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const useStyles = makeStyles(() => {
    return ({
        myButton: {
            padding: 5,
        },
        imagePerson: {
            width: 50,
            borderRadius: '50%'
        },
    });
});

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function SimpleMenu() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);
    const userinfo = useSelector(state => state.profileInfo.user);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOut = () => {
        localStorage.clear();
        dispatch(AuthAction.setIsAuth(false));
    }


    return (
        <div>
            <Button className={classes.myButton}
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="small"
                    color="action"
                    padding="0"
                    onClick={handleClick}>
                <div>
                    <img alt={'User'} className={classes.imagePerson}
                         src={userinfo.photoUrl}/>
                </div>
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classess.burgerMenuContainer}
            >
                <StyledMenuItem>
                    <NavLink to={'/profile/:id'}>
                        <ListItemIcon>
                            <AccountCircleRoundedIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </NavLink>
                </StyledMenuItem>
                <StyledMenuItem>

                    <ListItemIcon>
                        <NavLink to={'/settings/'}> <SettingsRoundedIcon fontSize="small"/> </NavLink>
                    </ListItemIcon>
                    <NavLink to={'/settings/'}> <ListItemText primary="Settings"/> </NavLink>

                </StyledMenuItem>

                <StyledMenuItem>
                    <NavLink to={'/login'} onClick={signOut}>
                        <ListItemIcon>
                            <MeetingRoomTwoToneIcon fontSize="small"/>
                        </ListItemIcon>
                        {isAuth ? 'Выход' : 'Вход'}
                    </NavLink>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}