import React from 'react';
import classes from './Friends.module.css'
import DialogItem from "../../Dialogs/Dialogs";

const Friends = (props) => {
let friendsElements = props.state.friends.map;

    return (
        <div className={classes.friendscss}>

            {friendsElements}
        </div>


    )

};


export default Friends;