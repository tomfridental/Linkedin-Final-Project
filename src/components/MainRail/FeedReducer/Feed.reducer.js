import { NEW_POST_UPLOADED, NEW_POST_ERROR, UPLOADING_NEW_POST } from './Feed.action'
import { REMOVE_POST_MSG } from './Feed.action'
import { FETCHING_POSTS, POSTS_FETCHED_OK, POSTS_FETCHED_ERROR } from './Feed.action'
import { LIKE_UPLOADED_OK, LIKE_UPLOADED_ERROR } from './Feed.action'
import { REMOVE_POST_ARR } from './Feed.action'
import { UPLOAD_NEW_COMMENT, COMMENT_UPLOADED_OK, COMMENT_UPLOADED_ERROR } from './Feed.action'
import {UPLOAD_NEW_SUBCOMMENT,SUBCOMMENT_UPLOADED_OK,SUBCOMMENT_UPLOADED_ERROR} from './Feed.action'
import {FETCHING_COMMENTS, COMMENTS_FETCHED_OK, COMMENTS_FETCHED_ERROR} from './Feed.action'

let originalState = {
    msgSaved: null,
    posts: [],
    likeInfo: {},
    uploadedComment: {},
    uploadedSubComment: {},
    fetchingPosts: false,
    postOffSet: 0
}

export default (state = originalState, action) => {
    switch (action.type) {

        case REMOVE_POST_ARR:
            return {
                ...state,
                posts: [],
                postOffSet: 0
            }

        case LIKE_UPLOADED_OK:
            return {
                ...state
            }

        case LIKE_UPLOADED_ERROR:
            return {
                ...state,
                err: action.payload.err
            }

        case UPLOADING_NEW_POST:
            return { ...state }

        case NEW_POST_UPLOADED:
            return {
                ...state,
                postSaved: action.payload.postSaved,
                posts: [action.payload.post, ...state.posts]
            }

        case NEW_POST_ERROR:
            return {
                ...state,
                postSaved: false,
                msg: action.payload.msg
            }

        case REMOVE_POST_MSG:
            return {
                ...state,
                postSaved: null
            }

        case FETCHING_POSTS:
            return {
                ...state,
                fetchingPosts: true
            }

        case POSTS_FETCHED_OK:
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                fetchingPosts: false,
                postOffSet: state.postOffSet+10
            }

        case POSTS_FETCHED_ERROR:
            return {
                ...state,
                msg: action.payload.err
            }

        case UPLOAD_NEW_COMMENT:
            return {
                ...state,
                uploadedComment: {}
            }

        case COMMENT_UPLOADED_OK:
            const newPostState = state.posts.map(post => post._id === action.payload.comment.targetID ?
            post = {...post, comments: [...post.comments, action.payload.comment]} : post)

            return {
                ...state,
                uploadedComment: action.payload.comment, 
                posts: newPostState
            }

        case COMMENT_UPLOADED_ERROR:
            return {
                ...state,
                err: action.payload
            }

        case UPLOAD_NEW_SUBCOMMENT:
        return{...state,
            uploadedSubComment: {}
        }

        case SUBCOMMENT_UPLOADED_OK:

        const newPostStateSub = state.posts.map(post => post._id === action.payload.subcomment.parentID ?
        post = {...post, comments: post.comments.map(comment => comment._id === action.payload.subcomment.targetID ?
            comment = {...comment, subComments: [...comment.subComments, action.payload.subcomment]}
        : comment)} :post)

        return{
            ...state,
            uploadedSubComment: action.payload.subcomment,
            posts: newPostStateSub
        }

        case SUBCOMMENT_UPLOADED_ERROR:
        return{...state,
        err: action.payload.err}

        case FETCHING_COMMENTS:
        return {...state}

        case COMMENTS_FETCHED_OK:
        const newStateWithComments = state.posts.map(post => post._id === action.payload.postID ?
            post = {...post, comments: action.payload.commentsArr} : post)
            
        return {...state,
        posts: newStateWithComments}

        case COMMENTS_FETCHED_ERROR:
        return{...state,
        err: action.payload.err}

        default:
            return state
    }
}