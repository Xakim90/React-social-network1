
import React from 'react';
import classes from './Music.module.css'

const Music = (props) => {
    return(
        <div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
            <div className={classes.musicImg}>
                <img src={require("../../assets/images/music2.png")} alt="music"/>
            </div>

        </div>
    )
};

export default Music