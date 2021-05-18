import React from 'react'
import Profile from "./Profile";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {getProfileUser} from "../../Redux/ProfileInfo-reducer"
import {WithAuthRedirect} from "../../Hok/WithAuthRedirect";
import {compose} from "redux";
import {getPostThank} from "../../Redux/Profile-reducer";

type PropsType = {
    getProfileUser: any
    getPostThank: any
    match: any
}


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getProfileUser(this.props?.match?.params?.id)
        this.props.getPostThank()
    }


    render() {
        return <Profile/>
    }
}

const mapStateToProps = (state: any) => ({
    profilePageData: state.profilePage,
});

export default compose(
    connect(mapStateToProps, {
        getProfileUser,
        getPostThank,
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)