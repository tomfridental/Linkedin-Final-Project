import React, { Component } from 'react';
import styled from 'styled-components';
import LogoImg from '../../imgs/login_topbar_logo.png'
import { withRouter } from "react-router";

class LoginTopBar extends Component {

    state = {
        email: '',
        password: ''
    }

    updateInfo(event) {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target });
    }

    login() {
        if (this.state.email.length > 0 && this.state.password.length > 0) {
            const userData = this.state;
            this.props.loginUser(userData)
        }
    }


    render() {


        return (
            <Main>
                <Logo>
                    <Img src={LogoImg} onClick={() => this.props.history.push('/')} />
                </Logo>
                <Login>
                    <Form>
                        <Email name="email" placeholder="Email" onChange={this.updateInfo.bind(this)} />
                        <Password name="password" type="password" placeholder="Password" onChange={this.updateInfo.bind(this)} />
                        <SignIn type="button" onClick={this.login.bind(this)}>Sign in</SignIn>
                    </Form>

                    <ForgotPass>Forgot password?</ForgotPass>
                </Login>

            </Main>
        )
    }
}

export default withRouter(LoginTopBar);

//CSS//
const Main = styled.div`
display: flex;
width: 100%;
height: 100%;
`
const Logo = styled.div`
height: 100%;
width: 30%;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 580px) {
width: 15%;
}

`

const Login = styled.div`
height: 100%;
width: 70%;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 580px) {
width: 85%;
}
`

const Img = styled.img`
width: 11.1rem;
height: 2.8rem;
cursor: pointer;

@media only screen and (max-width: 580px) {
width: 5rem;
height: 1.5rem;
}
`
const Form = styled.form`
display: flex;
align-items: center;
`
const Email = styled.input`
width: 20rem;
height: 3rem;
margin-right: 1rem;
display: flex;
align-items: center;
padding-left: 1rem;
font-size: 1.4rem;

@media only screen and (max-width: 580px) {
width: 16rem;
height: 2.4rem;
}

@media only screen and (max-width: 480px) {
width: 11rem;
height: 1.98rem;
}
`

const Password = styled(Email)`

`

const SignIn = styled.button`
width: 8rem;
height: 3.5rem;
border: 1px solid white;
color: white;
background-color: transparent;
font-size: 1.6rem;
cursor: pointer;

&:hover {
    background-color: white;
    color: #283e4a;
}

@media only screen and (max-width: 480px) {
width: 7rem;
font-size: 1.2rem;
}
`
const ForgotPass = styled.div`
margin-left: 2rem;
display: flex;
justify-content: center;
align-items: center;
color: #cdcfd2;
padding: 1rem 2rem;
font-size: 1.2rem;
cursor: pointer;

&:hover{
    color: white;
    text-decoration: underline;
    font-size: 1.4rem;
}

@media only screen and (max-width: 580px) {
    margin-left: 1rem;
}
`