import fetch from 'isomorphic-fetch'

export const CREATING_NEW_USER = 'CREATING_NEW_USER'
export const NEW_USER_CREATED = 'NEW_USER_CREATED'
export const CREATING_USER_ERROR = 'CREATING_USER_ERROR'

export const UPDATING_USER_LOCATION = 'UPDATING_USER_LOCATION'
export const USER_LOCATION_UPDATED = 'USER_LOCATION_UPDATED'
export const USER_LOCATION_UPDATE_ERROR = 'USER_LOCATION_UPDATE_ERROR'

export const UPDATING_USER_JOB = 'UPDATING_USER_JOB'
export const USER_JOB_UPDATED = 'USER_JOB_UPDATED'
export const USER_JOB_UPDATE_ERROR = 'USER_JOB_UPDATE_ERROR'

export const FINISH_TUTORIAL = 'FINISH_TUTORIAL';
export const FINISH_TUTORIAL_OK = 'FINISH_TUTORIAL_OK';
export const FINISH_TUTORIAL_ERROR = 'FINISH_TUTORIAL_ERROR'

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGING_IN_SUCCESSFULLY = 'LOGGING_IN_SUCCESSFULLY';
export const LOGGING_IN_ERROR = 'LOGGING_IN_ERROR';

export const VERIFY_TOKEN = 'VERIFY_TOKEN';
export const TOKEN_VERIFIED_OK = 'TOKEN_VERIFIED_OK';
export const TOKEN_VERIFIED_ERROR = 'TOKEN_VERIFIED_ERROR'

export const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';
export const LOG_USER_OUT = 'LOG_USER_OUT'

export const CLEAR_LOGIN_FORM_ERROR_MSG = 'CLEAR_LOGIN_FORM_ERROR_MSG'

export const FINISH_TUTORIAL_NO_AVATAR = 'FINISH_TUTORIAL_NO_AVATAR';
export const FINISH_TUTORIAL_NO_AVATAR_OK = 'FINISH_TUTORIAL_NO_AVATAR_OK';
export const FINISH_TUTORIAL_NO_AVATAR_ERROR = 'FINISH_TUTORIAL_NO_AVATAR_ERROR';

require('dotenv').config()

const API_URL = process.env.REACT_APP_API_URL

export const createNewUser = (userData) => {

    return function (dispatch) {

        dispatch({ type: CREATING_NEW_USER })

        return fetch(`${API_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...userData
            })
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: NEW_USER_CREATED,
                payload: res
            }))
            .catch(err => dispatch({
                type: CREATING_USER_ERROR,
                payload: err
            }))
    }
}

export const updateUserLocation = (userData) => {

    return function (dispatch) {

        dispatch({ type: UPDATING_USER_LOCATION })

        return fetch(`${API_URL}/api/auth/update/${userData.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...userData
            })
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: USER_LOCATION_UPDATED,
                payload: res
            }))
            .catch(err => dispatch({
                type: USER_LOCATION_UPDATE_ERROR,
                payload: err
            }))
    }
}


export const updateUserJob = (userData) => {

    return function (dispatch) {

        dispatch({ type: UPDATING_USER_JOB })

        return fetch(`${API_URL}/api/auth/update/${userData.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...userData
            })
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: USER_JOB_UPDATED,
                payload: res
            }))
            .catch(err => dispatch({
                type: USER_JOB_UPDATE_ERROR,
                payload: err
            }))
    }
}

//Finish Stage 3 + Finish Turotial//
export const finishTutorial = (fileData,userID) => {

    return function (dispatch) {

        dispatch({ type: FINISH_TUTORIAL })

        return fetch(`${API_URL}/api/user/finish/${userID}`, {
            method: 'POST',
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // },
            body: fileData
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: FINISH_TUTORIAL_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: FINISH_TUTORIAL_ERROR,
                payload: err
            }))
    }
}

//Login//
export const loginUser = (userData) => {

    return function (dispatch) {

        dispatch({ type: LOGGING_IN })

        return fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...userData
            })
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: LOGGING_IN_SUCCESSFULLY,
                payload: res
            }))
            .catch(err => dispatch({
                type: LOGGING_IN_ERROR,
                payload: err
            }))
    }
}

export const verifyToken = (token) => {

    return function (dispatch) {

        dispatch({ type: VERIFY_TOKEN })
 
        return fetch(`${API_URL}/api/auth/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: TOKEN_VERIFIED_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: TOKEN_VERIFIED_ERROR,
                payload: err
            }))
    }
}

export const finishTutorialNoAvatar = (userID) => {

    return function (dispatch) {

        dispatch({ type: FINISH_TUTORIAL_NO_AVATAR })

        return fetch(`${API_URL}/api/user/finish/noavatar/${userID}`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: FINISH_TUTORIAL_NO_AVATAR_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: FINISH_TUTORIAL_NO_AVATAR_ERROR,
                payload: err
            }))
    }
}

export const clearLoginError = ()=> ({ type: CLEAR_LOGIN_ERROR }) 

export const logUserOut = () => ({type: LOG_USER_OUT})

export const clearLoginFormErrMsg = ()=> ({ type: CLEAR_LOGIN_FORM_ERROR_MSG }) 