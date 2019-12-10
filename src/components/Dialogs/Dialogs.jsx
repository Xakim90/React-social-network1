import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)
const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m =>
        <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    };
    // if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <h3>Welcome to Dialogs Page</h3>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>

    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name="newMessageBody" placeholder='Enter your message'
                        validate={[required, maxLength10]}/></div>
            <div><button>ADD MESSAGE</button></div>
            {/*<div><textarea placeholder='Enter your message' onChange={onNewMessChange} value={newMessageBody}/></div>*/}
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;