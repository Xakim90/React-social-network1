import React from 'react';
import classes from './../Dialogs.module.css'

const Message = (props) => {

    return (
        <div>
            <div className={classes.dialog}>
                {props.message}
            </div>
            <div>

            </div>

        </div>
    )
};


export default Message;