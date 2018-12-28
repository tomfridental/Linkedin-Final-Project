import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from "react-redux";
import ReduxThunk from 'redux-thunk'
import rootReducer from './components/Root.reducer'
import {verifyToken} from './components/Login/LoginReducer/Login.action'

const showStore = store => next => action => {
    console.log('dispatching', action)
    next(action)
    console.log('New Store: ', store.getState())
    return
}


const saveState = store => next => action => {
next(action)
const currentState = store.getState()
localStorage.setItem("state", JSON.stringify(currentState.loginData))
}

let initState = {
    userDoneTutorial: false,
    userLocationUpdated: false,
    userJobUpdated: false,
    auth: false,
    token: '',
    errorMsg: null,
    loginErrMsg: null,
    user: {
        first_name: '',
        last_name: '',
        job_title: '',
        registrationWizard: 'not done'
    }
}
const localState = localStorage.getItem('state')

if(localState){
    initState = JSON.parse(localState);
    console.log('State loaded from LocalStorage')
}


const middleware = applyMiddleware(showStore, saveState, ReduxThunk);
const store = createStore(rootReducer, {loginData: initState}, middleware)
store.dispatch(verifyToken(initState.token))



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

