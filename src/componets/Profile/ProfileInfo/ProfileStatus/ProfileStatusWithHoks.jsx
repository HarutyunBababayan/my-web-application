import React, {useEffect, useState} from "react";
import {changeStatusThank} from "../../../../Redux/ProfileInfo-reducer";
import {useDispatch, useSelector} from "react-redux";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    const userinfo = useSelector(state => state.profileInfo.user)
    const dispatch = useDispatch();
    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMod = () => {
        setEditMode(true);
    }

    const deactivatedEditMod = () => {
        setEditMode(false);
    }

    const changeStatus = (e) => {
        let text = e.currentTarget.value;
        setStatus(text);
        dispatch(changeStatusThank(props.id, userinfo, text));
    }

    return (
        <div>
            {editMode && props.admin ?
                <input onChange={changeStatus} onBlur={deactivatedEditMod} value={status} autoFocus={true}/>
                : <span onDoubleClick={activateEditMod}>Статус: {status}</span>}
        </div>
    );
}


export default ProfileStatusWithHooks;