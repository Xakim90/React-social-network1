import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src={require('../../../../assets/images/img16.jpg')} alt="img16"/>

                <div>{props.messagePost}
                    {props.btn}</div>
                <div>
                    <span>like:</span> {props.likesCount}
                </div>


            </div>
        </div>
    )
};
export default Post;
