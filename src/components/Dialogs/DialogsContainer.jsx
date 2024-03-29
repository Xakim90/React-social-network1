import React from 'react';
import {addMessageCreator, deleteMessageCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageCreator(newMessageBody))
        },
    }
};

compose (
    withAuthRedirect
)(Dialogs);

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent);


export default DialogsContainer;