import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import Status from "./Status";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <h1>Salomlaaaarrrrr</h1>
            <div className={classes.rasm}>
            </div>
            <div className={classes.DescriptionBlock}>
                <img src={profile.photos.large} alt="foto"/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <Status/>
            </div>
        </div>
    )

};
export default ProfileInfo;
