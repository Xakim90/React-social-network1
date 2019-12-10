// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//     _state: {
//
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Salom ishlar qalay?', likesCount: 12},
//                 {id: 2, message: 'Bu mening birinchi postim', likesCount: 11}
//             ],
//             newPostText: "",
//         },
//
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimich'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Viktor'},
//                 {id: 6, name: 'Valera'},
//             ],
//             newSmsText: "",
//             messages: [
//                 {id: 1, message: 'Salom', likesCount: 12},
//                 {id: 2, message: 'Ishla qale', likesCount: 12},
//                 {id: 3, message: 'Zormi', likesCount: 12},
//             ],
//
//         },
//         sidebar: {
//             friends: [
//                 {
//                     id: 1, name: 'Dilmurod',
//                 },
//                 {
//                     id: 2, name: 'Ibrohim',
//                 },
//                 {
//                     id: 3, name: 'Asror',
//                 },
//             ]
//
//         }
//     },
//
//     _callSubscriber() {
//         console.log('state changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     //    addPost() {
//     //     let newPost = {
//     //         id: 5,
//     //         message: this._state.profilePage.newPostText,
//     //         likesCount: 0
//     //     };
//     //     this._state.profilePage.posts.push(newPost);
//     //     this._callSubscriber(this._state);
//     // },
//
//     // updateNewPostText(newText) {
//     //     this._state.profilePage.newPostText = newText;
//     //     this._callSubscriber(this._state);
//     // },
// // removePost(postMessage) {
//     //     this._state.profilePage.posts.pop();
//     //     this._callSubscriber(this._state)
//     // },
//
//     // addMessage() {
//     //     let newMessage = {
//     //         id: "",
//     //         message: this._state.dialogsPage.newSmsText,
//     //         likesCount: ""
//     //     };
//     //     this._state.dialogsPage.messages.push(newMessage);
//     //     this._callSubscriber(this._state);
//     // },
//     // deleteMessage() {
//     //     this._state.dialogsPage.messages.pop()
//     //     this._callSubscriber(this._state);
//     // },
//
//     // updateNewSMS(newSMS) {
//     //     this._state.dialogsPage.newSmsText = newSMS;
//     //     this._callSubscriber(this._state);
//     // },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// };
//
// window.store = store;
//
// export default store;