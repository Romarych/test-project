import {profileAPI, usersAPI} from "../api/api";

const SET_USER_PROFILE = "profile/SET_USER_PROFILE";

let initialState = {
    profile: {}
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data.data))
    
}

export const saveProfile = (profile, userId) => async (dispatch) => {
    await profileAPI.saveProfile(profile, userId)
}

export default profileReducer;

