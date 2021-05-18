import React, {useCallback, useRef} from 'react'
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";
import {PostType, UserType} from "../../../types/all";
import London from "../../../assets/London.jpg"
import WowMest from "../../../assets/WowMest.jpg"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {NavLink} from "react-router-dom";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

type PropsType = {
    posts: PostType[]
    addPost: any
    length: any
    user: UserType
}

const MyPosts: React.FC<PropsType> = ({posts, addPost, user}) => {
    let postsElements = posts.map(post => <Post key={post.id} message={post.message}
                                                likesCount={post.likesCount}/>)
    const inputEl = useRef(null) as any

    const addNewMessage = useCallback(
        () => {
            const text = inputEl.current.value
            addPost(posts.length, text);
            inputEl.current.value = '';
        },
        [addPost, posts.length],
    );

    const changeInput = (e: any) => {
        if (e.code === "Enter") {
            addNewMessage();
        }
    }

    let imageSrc = user.photoUrl;

    try {
        if (imageSrc && imageSrc.indexOf('http') === -1) {
            imageSrc = require('../../../assets/images/' + imageSrc).default;
        }
    } catch (e) {
        imageSrc = require('../../../assets/images/UserMan.png').default;
        console.log('Not found image');
    }

    return (
        <div className={classes.postBlock}>
            <div className={classes.FriendsFeedContainer}>
                <div>
                    <div className={classes.nameImageStyle}>
                        <img className={classes.imageStyle} src={imageSrc} alt=""/>
                        <span>{`${user.name} ${user.lastName}`} </span>
                    </div>
                    <img className={classes.contentImageStyle} src={London} alt=""/>
                    <div className={classes.iconBox}>
                        <ThumbUpAltOutlinedIcon/>
                        <ChatBubbleOutlineOutlinedIcon/>
                        <ReplyOutlinedIcon/>
                    </div>
                </div>
                <div className={classes.postContendsBlock}>
                    {postsElements}
                </div>
                <div>
                    <input className={classes.myPostInputBlock} placeholder="Enter your message" type='textarea'
                           onKeyUp={changeInput} ref={inputEl}/>
                </div>
                <button className={classes.addPostButtonStyle} onClick={() => addNewMessage()}>Add post</button>
            </div>
        </div>
    );
}


export default React.memo(MyPosts);