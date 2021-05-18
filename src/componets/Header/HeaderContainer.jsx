import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AuthAction} from "../../Redux/Auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Header {...this.props} signOut={this.signOut}/>
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.profileInfo.user,
        setSelectedUser:state.profileInfo.setSelectedUser,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {AuthAction})(HeaderContainer)
