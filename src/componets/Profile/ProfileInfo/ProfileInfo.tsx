import React from 'react'
import classes from './ProfileInfo.module.css';
import {Loading} from "../../common/LoadingComponent/Loading";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHoks";

type PropsType = {
    isFetching: any
    userinfo: any
    setSelectedUser: any
}

// @ts-ignore
const ProfileInfo: React.FC<PropsType> = ({setSelectedUser, userinfo, isFetching}) => {
    const userInfo = setSelectedUser.length > 0 ? setSelectedUser : userinfo;

    if (!userInfo?.id) return '';

    let imageSrc = userInfo.photoUrl;

    const admin = userinfo.id === userInfo.id;

    try {
        if (imageSrc && imageSrc.indexOf('http') === -1) {
            imageSrc = require('../../../assets/images/' + imageSrc).default;
        }
    } catch (e) {
        imageSrc = require('../../../assets/images/UserMan.png').default;
        console.log('Not found image');
    }
    return (
        <>
            {isFetching && <Loading/>}
            <div>
                <div className={classes.imagesBackground}>
                    <img
                        src="https://md-innovationtech.com/wp-content/uploads/2016/07/ONE-mac-1600x300.jpg"
                        alt="fon"/>
                </div>
                <div className={classes.personContainer}>
                    <div className={classes.imagePerson}>
                        <img alt={"Users"} src={imageSrc}/>

                        {/*<ImageUploader*/}
                        {/*    withIcon={true}*/}
                        {/*    buttonText='Choose images'*/}
                        {/*    onChange={onSelectPhoto}*/}
                        {/*    imgExtension={['.jpg', '.gif', '.png', '.gif']}*/}
                        {/*    maxFileSize={5242880}*/}
                        {/*/>*/}
                    </div>
                    <div className={classes.personBlock}>
                        <h4>{`${userInfo.name}   ${userInfo.lastName}`} </h4>
                        <ProfileStatusWithHooks status={userInfo.status} id={userInfo.id} admin={admin}/>
                        <span>День рождения: {userInfo.birtDay}</span>
                        <p>City: {userInfo.location.country},{userInfo.location.city}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;