import { combineReducers } from 'redux';
import LoginReducer from './Login/LoginReducer/Login.reducer';
import FeedReducer from './MainRail/FeedReducer/Feed.reducer';
import UserPageReducer from './UserPage/UserPgaeReduer/UserPgae.reducer'



const rootReducer = combineReducers({
    loginData: LoginReducer,
    feedData: FeedReducer,
    UserPageData: UserPageReducer
   
  })
  
  export default rootReducer