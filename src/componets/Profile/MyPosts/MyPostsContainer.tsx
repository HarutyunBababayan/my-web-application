import { addPostThank} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/stor-redax";
import ProfileInfoReducer from "../../../Redux/ProfileInfo-reducer";




let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        user: state.profileInfo.user
    }
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (id: number, newPostBody: any) => {
            dispatch(addPostThank(id, newPostBody))
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
