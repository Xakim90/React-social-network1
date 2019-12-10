import React from 'react';
import {
    addPostActionCreator,
    deletePostActionCreator,
    removePostCreator,
    updateNewPostActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        // myPostsPage: state.myPostsPage,
        // posts: state.profilePage.posts,
       // newPostBody: state.profilePage.newPostBody,
        profilePage: state.profilePage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        },
        // removePost: (postId) => {
        //     dispatch(deletePostActionCreator(postId))
        // }
    }
};

compose(
    //withAuthRedirect
)(MyPosts);

// let AuthRedirectComponent = withAuthRedirect(MyPosts);

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
