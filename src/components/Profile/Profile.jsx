import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {reduxForm} from "redux-form";

class Profile extends React.Component {
    render() {
        return (
            <div>
                <MyPostsContainer/>
                <ProfileInfo profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}


export default Profile;
