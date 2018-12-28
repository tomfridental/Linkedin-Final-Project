import React, { Component } from 'react';
import styled from 'styled-components';
import Search from './Search';
import Links from './Links';
import Work from './Work'
import LoginTopBar from './LoginTopBar'
import TutorialTopBar from './TutorialTopBar';
import { connect } from 'react-redux';
import { loginUser, logUserOut } from '../Login/LoginReducer/Login.action'
import {withRouter} from 'react-router-dom'

class TopBar extends Component {

    render() {
        
        const { auth, user, loginErrMsg } = this.props.loginData
        const { loginUser, logUserOut } = this.props

        if (auth) {
            if (user.registrationWizard === 'done') {
                return (
                    <Wrapper loged={auth}>
                        <Search />
                        <Links user={user} logUserOut={logUserOut} activePage={this.props.location.pathname}/>
                        <Work />
                    </Wrapper>
                )
            }
            else {
                return (
                    <Wrapper loged={auth}>
                        <TutorialTopBar />
                    </Wrapper>
                )
            }
        }
        else {
            if (!loginErrMsg) {
                return (
                    <Wrapper loged={auth}>
                        <LoginTopBar loginUser={loginUser}/>
                    </Wrapper>
                )
            }
            else {
                return(
                <Wrapper loged={auth}>
                    <TutorialTopBar />
                </Wrapper>
                )
            }
        }
    }
}

function mapStateToProps(state, ownProps) {

    const { loginData } = state;

    return {
        loginData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loginUser: (userData) => dispatch(loginUser(userData)),
        logUserOut: () => dispatch(logUserOut())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar))



//CSS//
const Wrapper = styled.div`
position: ${props => props.loged ? 'fixed' : 'absolute'};
background-color: #283e4a;
top: 0;
height: 5.2rem;
display: flex;
width: 100%;
z-index: 2;
`

