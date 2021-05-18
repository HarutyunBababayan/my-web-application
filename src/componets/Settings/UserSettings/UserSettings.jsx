import React from "react";
import classes from './UserSettings.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {UserUpdateInfoThank} from "../../../Redux/ProfileInfo-reducer";


const UserSettings = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, } = useForm();

    const userinfo = useSelector(state => state.profileInfo.user)
    const isMen = userinfo.gender === "men";

    const onSubmit = data => {
        Object.keys(data).forEach((elem) => {
            if (userinfo[elem] || userinfo[elem] === '') {
                userinfo[elem] = data[elem];
            }
        })
        userinfo.location.city = data.city;
        userinfo.location.country = data.country;

        dispatch(UserUpdateInfoThank(userinfo.id, userinfo))

    }

    return (
        <div>
            <div className={classes.mainBlock}>
                <h2>Осноыное</h2>
            </div>
            <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Имя: <input name="name" defaultValue={userinfo.name} className={classes.inputsStyle}
                                       ref={register}
                                       placeholder="Name"
                                       type="text"/></label>
                </div>
                <div>
                    <label>Фамилие: <input defaultValue={userinfo.lastName} className={classes.inputsStyle}
                                           name="lastName"
                                           placeholder="LastName"
                                           ref={register} type="text"/></label>
                </div>
                <div>
                    <label>Пол: <select className={classes.inputsStyle} name="gender" ref={register}>

                        <option value="men" selected={isMen}>Мужской</option>
                        <option value="woman" selected={!isMen}>Женский</option>


                    </select>
                    </label>
                </div>
                <div className={classes.locationBlock}>
                    <label>Страна: <input name="country" defaultValue={userinfo.location.country}
                                          className={classes.inputsStyle} placeholder="Country"
                                          ref={register} type="text"/></label>
                    <label>Город: <input name="city" defaultValue={userinfo.location.city}
                                         className={classes.inputsStyle} placeholder="City" ref={register}
                                         type="text"/></label>
                </div>
                <div>
                    <input name="birtDay" defaultValue={userinfo.birtDay} type="date" ref={register}/>
                </div>
                <div className={classes.alignButton}>
                    <button className={classes.SaveFormButton}>Save</button>
                </div>
            </form>

        </div>
    );
}

export default UserSettings;