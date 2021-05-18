import { addMessageThunk} from "../../Redux/Dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../Hok/WithAuthRedirect";
import {compose} from "redux";
import {getDialogs, getIsAuth, getMessages, getNewMessagesText} from "../../Redux/Dialogs-selectors";

let mapStateToProps = (state: any) => {
    return {
        user: state.profileInfo.user,
        dialogs: getDialogs(state),
        messages: getMessages(state),
        newMessage: getNewMessagesText(state),
        isAuth: getIsAuth(state)
    }
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        userMessage: ( id:number,newMessageBody: any) => {


            dispatch(addMessageThunk(id, newMessageBody))
        },
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);


