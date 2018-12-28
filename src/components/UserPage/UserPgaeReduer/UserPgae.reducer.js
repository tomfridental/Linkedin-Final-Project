import { FETCHING_USER_DATA, USER_FETCHED_OK, USER_FETCHED_ERROR } from './UserPage.action'
import {REMOVE_USERPAGE_DATA} from './UserPage.action'

let originalState = {
    selectedUser: {},
    fetchDone: false,
    usersToFallow: {},
    error: '',

}

export default (state = originalState, action) => {
    switch (action.type) {

        case FETCHING_USER_DATA:
            return {
                ...state,
                selectedUser: {},
                usersToFallow: [],
                userLastComments: [],
                fetchDone: false
            }

        case USER_FETCHED_OK:
            return {
                ...state,
                selectedUser: action.payload.user,
                usersToFallow: action.payload.usersToFallow,
                userLastComments: action.payload.userLastComments,
                fetchDone: true
            }

        case USER_FETCHED_ERROR:
            return {
                ...state,
                error: action.payload.err
            }

            case REMOVE_USERPAGE_DATA:
            return{...state,
            selectedUser: {},
            usersToFallow: [],
            userLastComments: []
        }

        default:
            return state
    }
}