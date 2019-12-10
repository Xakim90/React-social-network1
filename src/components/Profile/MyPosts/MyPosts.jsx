import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
//const minLength0 = minLengthCreator(0)

// var buttonDisabled = {
//     if
// }



const MyPosts = React.memo(props => {
    // React.memo (class componentda ShouldComponentUpdate yoki extends PureComponent) --
    // -- bu props va state o'zgarmagan taqdirda bekorga Render ishlashini oldini oladi
    let state = props.profilePage;
    let postsElements = state.posts.map(p =>
        <Post messagePost={p.messagePost} likesCount={p.likesCount}/>);
    // let newPostBody = React.createRef();
    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    };
    // let removePost = (postId) => {
    //     props.removePost(postId)
    // };
    return (
        <div className={classes.postsBlock}>
            <h2>My post</h2>
            {/*<Post/>*/}

            <div className={classes.postsCss}>
                {postsElements}
            </div>
            <div>
                <button > removePost</button>
            </div>
            <AddPostFormRedux onSubmit={addNewPost}/>

        </div>
    )
});

const AddPostForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div><Field name="newPostBody" component={Textarea}  placeholder={"post message"}
                    validate={[required, maxLength10]}

        /></div>
        <div>
            <button>ADD Post</button>
        </div>
    </form>

};

const AddPostFormRedux = reduxForm({form: "PostAddForm"})(AddPostForm)

export default MyPosts;
