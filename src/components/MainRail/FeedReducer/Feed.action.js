import fetch from 'isomorphic-fetch';

export const UPLOADING_NEW_POST = 'UPLOADING_NEW_POST';
export const NEW_POST_UPLOADED = 'NEW_POST_UPLOADED';
export const NEW_POST_ERROR = 'NEW_POST_ERROR';

export const REMOVE_POST_MSG = 'REMOVE_POST_MSG';

export const FETCHING_POSTS = 'FETCHING_POSTS';
export const POSTS_FETCHED_OK = 'POSTS_FETCHED_OK';
export const POSTS_FETCHED_ERROR = 'POSTS_FETCHED_ERROR';

export const FETCHING_COMMENTS = 'FETCHING_COMMENTS';
export const COMMENTS_FETCHED_OK = 'COMMENTS_FETCHED_OK';
export const COMMENTS_FETCHED_ERROR = 'COMMENTS_FETCHED_ERROR';

export const UPLOAD_NEW_LIKE = 'UPLOAD_NEW_LIKE';
export const LIKE_UPLOADED_OK = 'LIKE_UPLOADED_OK';
export const LIKE_UPLOADED_ERROR = 'LIKE_UPLOADED_ERROR';

export const REMOVE_POST_ARR = 'REMOVE_POST_ARR';

export const UPLOAD_NEW_COMMENT = 'UPLOAD_NEW_COMMENT';
export const COMMENT_UPLOADED_OK = 'COMMENT_UPLOADED_OK';
export const COMMENT_UPLOADED_ERROR = 'COMMENT_UPLOADED_ERROR';

const API_URL = process.env.REACT_APP_API_URL


// Create a like//

export const updateLike = (likeData) => {

    return function (dispatch) {

        dispatch({ type: UPLOAD_NEW_LIKE })

        return fetch(`${API_URL}/api/user/create/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: likeData
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: LIKE_UPLOADED_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: LIKE_UPLOADED_ERROR,
                payload: err
            }))
    }
}

// Upload a Post//

export const uploadPost = (postData) => {

    return function (dispatch) {

        dispatch({ type: UPLOADING_NEW_POST })

        return fetch(`${API_URL}/api/user/create/post`, {
            method: 'POST',
            body: postData
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: NEW_POST_UPLOADED,
                payload: res
            }))
            .catch(err => dispatch({
                type: NEW_POST_ERROR,
                payload: err
            }))
    }
}

//Fetch Posts
export const fetchPosts = (userID, offSet) => {

    return function (dispatch) {

        dispatch({ type: FETCHING_POSTS })

        return fetch(`${API_URL}/api/user/posts/${userID}?offset=${offSet}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: POSTS_FETCHED_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: POSTS_FETCHED_ERROR,
                payload: err
            }))
    }
}

//Fetch Comments
export const fetchComments = (postID) => {

    return function (dispatch) {

        dispatch({ type: FETCHING_COMMENTS })

        return fetch(`${API_URL}/api/user/comment/${postID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: COMMENTS_FETCHED_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: COMMENTS_FETCHED_ERROR,
                payload: err
            }))
    }
}

// Upload a Comment
export const uploadComment = (commentData) => {

    return function (dispatch) {

        dispatch({ type: UPLOAD_NEW_COMMENT })

        return fetch(`${API_URL}/api/user/create/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: commentData
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: COMMENT_UPLOADED_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: COMMENT_UPLOADED_ERROR,
                payload: err
            }))
    }
}

// Upload Sub Comment

export const UPLOAD_NEW_SUBCOMMENT = 'UPLOAD_NEW_SUBCOMMENT';
export const SUBCOMMENT_UPLOADED_OK = 'SUBCOMMENT_UPLOADED_OK';
export const SUBCOMMENT_UPLOADED_ERROR = 'SUBCOMMENT_UPLOADED_ERROR';

export const uploadSubComment = (subCommentData) => {

    return function (dispatch) {

        dispatch({ type: UPLOAD_NEW_SUBCOMMENT })

        return fetch(`${API_URL}/api/user/create/subcomment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: subCommentData
        })
            .then((res) => res.json())
            .then(res => dispatch({
                type: SUBCOMMENT_UPLOADED_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: SUBCOMMENT_UPLOADED_ERROR,
                payload: err
            }))
    }
}


export const FETCHING_SEARCH_RESULTS = 'FETCHING_SEARCH_RESULTS';
export const SEARCH_RESULTS_OK = 'SEARCH_RESULTS_OK';
export const SEARCH_RESULTS_ERROR = 'SEARCH_RESULTS_ERROR';

export const fetchSearchResults = (userID, searchStr) => {

    return function (dispatch) {

        dispatch({ type: FETCHING_SEARCH_RESULTS })

        return fetch(`${API_URL}/api/user/search/${userID}?search=${searchStr}`)
            .then((res) => res.json())
            .then(res => dispatch({
                type: SEARCH_RESULTS_OK,
                payload: res
            }))
            .catch(err => dispatch({
                type: SEARCH_RESULTS_ERROR,
                payload: err
            }))
    }
}


export const removePostMsg = () => ({ type: REMOVE_POST_MSG });

export const removePosts = () => ({ type: REMOVE_POST_ARR })