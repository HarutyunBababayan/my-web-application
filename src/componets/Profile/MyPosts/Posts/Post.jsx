import React from 'react'
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div key={props.key}>
            <div className={classes.personImagesPerson}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsZ6_MMUco1GgOGkwNkP2ZL9YnfC40e9iVA&usqp=CAU"
                    alt="Person"/>
            </div>
            <div className={classes.item}>
                {props.message}
                <div>
                    <span>Like</span> {props.likesCount}
                </div>
            </div>
        </div>

    );
}

export default Post;