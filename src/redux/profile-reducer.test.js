import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, messagePost: 'Salom ishlar qalay?', likesCount: 12},
    ]
};

it('length of posts should be incremented', () => {
    // 1.test data
    let action = addPostActionCreator("build-master.uz");
    //2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect (newState.posts.length).toBe(2);
});

it('message of posts should be correct', () => {
    // 1.test data
    let action = addPostActionCreator("build-master.uz");
    //2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect (newState.posts[1].messagePost).toBe("build-master.uz");
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePostActionCreator([1]);
    let newState = profileReducer(state,action);

    expect (newState.posts.length).toBe(1);
});

