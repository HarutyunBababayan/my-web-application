import React from "react";
import classes from './RightNewsPanel.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/stor-redax";
import {NavLink} from "react-router-dom";
import photoMan from "../../assets/images/UserMan.png";
import photoWoMan from "../../assets/images/UserWoMan.png";
import {UserType} from "../../types/all";

const RightNewsPanel = () => {
    const users = useSelector<AppStateType, UserType[]>(state => state.usersPage.users)
    debugger;
    console.log('users', users);
    return (
        <nav className={classes.newsBlock}>
            <div>
                <h3>Friends</h3>
                {users.map(u => <div className={classes.usersPageContainer} key={u.id}>
                        <div className={classes.usersImageFollowBlock}>
                            <div className={classes.photoBlock}>
                                <NavLink to={'/profile/' + u.id}>
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img src={u.gender === "men" ? photoMan : photoWoMan} alt={'photo'}/>
                                </NavLink>
                            </div>
                            <div className={classes.buttonFollowedAndUnfollowed}>
                                <div>{`${u.name}  ${u.lastName}`}</div>
                            </div>
                        </div>
                        <div className={classes.userStatusBlock}>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    </div>
                )}
                <div className={classes.friendsContainer}>
                </div>
            </div>
        </nav>
    );
}

export default RightNewsPanel;