
import React from 'react';
import classes from './Settings.module.css'

const Settings = (props) => {

    return(
        <div>
        <div className={classes.item}>
            <a href="">Settings</a>
        </div>
            <div className={classes.setImg}>
                <img src={require("../../assets/images/settings.png")} alt="settings"/>
            </div>

        </div>
    )
};

export default Settings;