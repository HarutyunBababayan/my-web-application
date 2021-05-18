import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {updatePhoto} from "../../../Redux/Profile-reducer";

let mapStateToProps = (state: any) => {
    return {
        userinfo: state.profileInfo.user,
        setSelectedUser:state.profileInfo.setSelectedUser,
        isFetching:state.profileInfo.isFetching
    }
}

const ProfileInfoContainer = connect(mapStateToProps,{updatePhoto})(ProfileInfo);

export default ProfileInfoContainer;