import React, {useState} from 'react'
import classes from './Users.module.css'
import photoMan from "../../assets/images/UserMan.png";
import photoWoMan from "../../assets/images/UserWoMan.png";
import Pagination from '@material-ui/lab/Pagination';
import {NavLink} from 'react-router-dom';
import {UserType} from "../../types/all";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    userinfo: UserType
    getUsersThank: any
    users: UserType[]
    currentPage: number
    onPageChanged: any
    toggleFollowANDUnFollow: (id: number | undefined, user: any, type: boolean) => void
}

const Users: React.FC<PropsType> = ({
                                        totalUsersCount,
                                        pageSize,
                                        users,
                                        currentPage,
                                        onPageChanged,
                                        userinfo,
                                        toggleFollowANDUnFollow,
                                    }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    //const userinfo = useSelector<AppStateType,UserType >(state => state.profileInfo.user)

    const [followed, setFollowed] = useState(userinfo.followed)
    let pages = [];

    if (!followed) return <></>

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div className={classes.pagesContainer}>
                <Pagination color="primary" count={pagesCount} page={currentPage} onChange={onPageChanged}/>
            </div>
            {users.map(u => {
                if (userinfo.id === u.id) {
                    return <></>
                }

                return (
                    <div className={classes.usersPageContainer} key={u.id}>
                        <div className={classes.usersImageFollowBlock}>
                            <div className={classes.photoBlock}>
                                <NavLink to={'/profile/' + u.id}>
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img src={u.gender === "men" ? photoMan : photoWoMan} alt={'photo'}/>
                                </NavLink>
                            </div>
                            <div className={classes.buttonFollowedAndUnfollowed}>
                                <div>{`${u.name}  ${u.lastName}`}</div>
                                {followed.indexOf(u.id) !== -1 ?
                                    <button onClick={() => {

                                        setFollowed((follow: any) => follow.filter((id: number) => id !== u.id));

                                        toggleFollowANDUnFollow(u.id, userinfo, false)
                                    }}>UnFollow</button>
                                    :
                                    <button onClick={() => {
                                        setFollowed((follow: any) => [...follow, u.id]);

                                        toggleFollowANDUnFollow(u.id, userinfo, true)
                                    }}>Follow</button>}
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
                )
            })
            }
        </div>
    );
}

export default Users;