import fetch from 'isomorphic-fetch';

export const FETCHING_USER_DATA = 'FETCHING_USER_DATA';
export const USER_FETCHED_OK = 'USER_FETCHED_OK';
export const USER_FETCHED_ERROR = 'USER_FETCHED_ERROR';

export const REMOVE_USERPAGE_DATA = 'REMOVE_USERPAGE_DATA';


export const getSelectedUserInfo = (userID) => {

    return function (dispatch) {

        dispatch({ type: FETCHING_USER_DATA })

        return fetch(`/api/user/profile/${userID}?limit=10`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: USER_FETCHED_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: USER_FETCHED_ERROR,
                payload: err
            }))
    }
}

export const removeUserPageData = () => ({ type: REMOVE_USERPAGE_DATA }) 