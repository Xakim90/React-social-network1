import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_PROGRESS = 'TOGGLE_IS_FOLLOW_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: [2,3,4,5]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })*/
                // bu yerda 6 qatorli kod metod ko'rinishiga keltirilib (updateObjectInArray) 1 qatorga refaktoring qilinmoqda
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})


            };
        case UN_FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })*/
            };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOW_PROGRESS: {
            return {...state,
                followInProgress: action.isFetching
                ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }

};
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOW_PROGRESS, isFetching});

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch( toggleIsFetching(true));
        dispatch( setCurrentPage(currentPage));
      let data = await usersAPI.getUsers(currentPage, pageSize)
                dispatch ( toggleIsFetching(false));
                dispatch ( setUsers(data.items));
                dispatch (setTotalUsersCount(data.totalCount));
    };

};

const followUnfollowFlow = async (dispatch, userId, apiMethod,actionCreator) => {
    dispatch (toggleFollowProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode ===0) {
        dispatch(actionCreator(userId))
    }
    dispatch (toggleFollowProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)

        // dispatch (toggleFollowProgress(true, userId));
        // let response = await apiMethod(userId)
        //         if (response.data.resultCode === 0) {
        //           dispatch (actionCreator(userId))
        //         }
        //        dispatch (toggleFollowProgress(false, userId))

    };
};

export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)
      //   dispatch (toggleFollowProgress(true, userId));
      // let response = await apiMethod (userId)
      //           if (response.data.resultCode === 0) {
      //               dispatch (actionCreator(userId))
      //           }
      //           dispatch (toggleFollowProgress(false, userId))
    };
};


export default usersReducer;