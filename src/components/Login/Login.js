import React, { Component } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm'
import LoginBottom from './LoginBottom';

//Actions//
import { connect } from 'react-redux';
import { createNewUser, clearLoginFormErrMsg } from './LoginReducer/Login.action'

class Login extends Component {

    render() {

        const { createNewUser, clearLoginFormErrMsg } = this.props
        const { auth, user, errorMsg, loginErrMsg } = this.props.loginData
        if (auth && user.registrationWizard === 'done') {
            this.props.history.push('/feed')
            console.log('Ridirected from Login to Feed')
        }
        if (auth && user.registrationWizard !== 'done') {
            this.props.history.push('/start/location')
        }
        if (loginErrMsg === '201' || loginErrMsg === '202') {
            this.props.history.push('/login')
        }
        return (
            <Wrapper>
                <LoginForm
                    createNewUser={createNewUser}
                    errorMsg={errorMsg}
                    clearLoginFormErrMsg={clearLoginFormErrMsg}
                />
                <LoginBottom />
            </Wrapper>
        )
    }
}

//Redux//
function mapStateToProps(state, ownProps) {

    const { loginData } = state;

    return {
        loginData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createNewUser: (userData) => dispatch(createNewUser(userData)),
        clearLoginFormErrMsg: () => dispatch(clearLoginFormErrMsg())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)


//CSS//
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 5.2rem;
`