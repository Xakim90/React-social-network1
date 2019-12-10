//
// const ADD_POST = 'ADD_POST';
//
// let initialState = {
//     posts: [
//         {id: 1, message: 'Salom ishlar qalay?', likesCount: 12},
//     ],
// };
//
// const myPostsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_POST: {
//             let newPost = action.newPostBody
//
//             // let postBody = action.newPostBody;
//             return {
//                 ...state,
//                 newPostBody: '',
//                 posts: [...state.posts, newPost],
//             };
//         }
//         default:
//             return state;
//     }
//
// };
//
// export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
//
// export default myPostsReducer;