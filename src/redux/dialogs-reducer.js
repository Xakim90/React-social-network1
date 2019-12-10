const ADD_MESSAGE = 'ADD-MESSAGE';
const DELETE_MESSAGE = 'DELETE-MESSAGE';
let initialState = {
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Salom', likesCount: 12},
        {id: 2, message: "React", likesCount: 12},
        {id: 3, message: "Judayam-zo'r", likesCount: 12},
    ],

};

const dialogsReducer = (state = initialState, action) => {
    // let stateCopy = {
    //     ...state,
    //    // messages: [...state.messages]
    // };
    // switch (action.type) {
    //     case ADD_MESSAGE: {
    //         let newMessage = {
    //             id: 5,
    //             message: state.newSmsText,
    //         };
    //         let SMS = state.newSmsText;
    //         let stateCopy = {
    //             ...state,
    //             messages:[...state.messages, newMessage],
    //             newSmsText: ''
    //         };
    //         // stateCopy.messages.push({ message: SMS});
    //         // stateCopy.newSmsText = 'it-incubator.com';
    //         // stateCopy.newSmsText = '';
    //         return stateCopy;
    //     }
    //     case UPDATE_NEW_SMS:
    //         stateCopy.newSmsText = action.SMS;
    //         return stateCopy;
    //     case    DELETE_MESSAGE:
    //         stateCopy.messages.pop();
    //         return stateCopy;
    //     default:
    //         return state;
    // }
    switch (action.type) {
        case ADD_MESSAGE :
            let body = action.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state
    }
};
export const addMessageCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});
export const deleteMessageCreator = () => ({type: DELETE_MESSAGE});

export default dialogsReducer;