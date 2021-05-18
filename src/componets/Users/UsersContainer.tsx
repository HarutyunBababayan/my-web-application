import React from 'react'
import {connect} from "react-redux";
import {
    getUsersThank,
    toggleFollowANDUnFollowThank,
} from "../../Redux/Users-reducer";
import Users from "./Users";
import loaderSpinner from '../../assets/images/Loader.svg'
import {WithAuthRedirect} from "../../Hok/WithAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getIsFetching, getPageSiz, getTotalUsersCount, getUsers} from "../../Redux/Users-selectors";
import {UserType} from "../../types/all";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    userinfo: UserType
    isFetching: any
    toggleFollowANDUnFollowThank: (id: number | undefined, user: any, type: boolean) => void
    getUsersThank: any
    unFollow: any
}


class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersThank(1);
    }

    onPageChanged = (event: any, pageNumber: any) => {
        this.props.getUsersThank(pageNumber)
    }


    render() {
        return <>
            {this.props.isFetching ? <img src={loaderSpinner} alt={"spinner"}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   userinfo={this.props.userinfo}
                   getUsersThank={this.props.getUsersThank}
                   onPageChanged={this.onPageChanged}
                   toggleFollowANDUnFollow={this.props.toggleFollowANDUnFollowThank}
            />
        </>;
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: getUsers(state),
        userinfo: state.profileInfo.user,
        pageSize: getPageSiz(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
};

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        toggleFollowANDUnFollowThank,
        getUsersThank
    }),
)(UsersContainer)