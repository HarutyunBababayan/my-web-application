import React from "react";

import {compose} from "redux";
import {WithAuthRedirect} from "../../../../Hok/WithAuthRedirect";
import {connect} from "react-redux";
import {changeStatusThank} from "../../../../Redux/ProfileInfo-reducer";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }
    newPostElement = React.createRef();


    changeStatus() {
        let text = this.newPostElement.current.value;
        this.props.changeStatusThank(this.props.id, this.props.userinfo, text);
    }

    toggleChangeStatus(type) {
        this.setState({
            editMode: type
        })
    }

    render() {
        return (
            <div>

                {this.state.editMode && this.props.admin ?
                    <input ref={this.newPostElement} autoFocus={true} onChange={this.changeStatus.bind(this)}
                           onBlur={this.toggleChangeStatus.bind(this, false)}
                           value={this.props.status}/>
                    :
                    <span onDoubleClick={this.toggleChangeStatus.bind(this, true)}>Статус: {this.props.status}</span>
                }
            </div>
        );
    }

}


let mapStateToProps = (state) => {
    return {
        userinfo: state.profileInfo.user,
    }
};

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {changeStatusThank}),
)(ProfileStatus)
