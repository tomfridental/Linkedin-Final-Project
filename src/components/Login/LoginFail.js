import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {loginUser, clearLoginError} from '../Login/LoginReducer/Login.action';

class LoginFail extends Component {

    state = {
        email: '',
        password: ''
    }

    updateInfo(event) {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target });
    }

    login(){
        if(this.state.email.length > 0 && this.state.password.length > 0){
        const userData = this.state;
        this.props.loginUser(userData)
        }
    }

    ValidateForm(form) {
        var emailTest = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (form.email.length < 1) { return [false, 'Please Enter Email'] }
        if (form.password.length < 1) {return [false, 'Please Enter Password']}
        if (!emailTest.test(String(form.email).toLowerCase())) { return [false, 'invalid Email Adress', 'email'] };
        if (form.password.length <= 5) { return [false, 'Passowrd is to short!', 'password']; }
        else { return [true, 'Form is ok!'] }
    }

    render() {

        const {loginErrMsg} = this.props.loginData
        const {clearLoginError} =this.props

        return (
  
                <Wrapper>
                    {loginErrMsg === '269' && this.props.history.push('/feed')}
                    {loginErrMsg === null && this.props.history.push('/')}
                    <Main>
                        <Title>Welcome Back</Title>
                        <Text> Don't miss your next opportunity. Sign in to stay updated on your professional world. </Text>
                        
                        <Input name="email" placeholder="Email" onChange={this.updateInfo.bind(this)}/>
                        
                        <Input name="password" placeholder="Password" type="password" onChange={this.updateInfo.bind(this)}/>
                        <Button onClick={this.login.bind(this)}>Sign in</Button>
                        <ForgotPassword>Forgot password?</ForgotPassword>
                        <Register>New to Linkedin? <Link onClick={clearLoginError}>Join Now</Link></Register>
                    </Main>
                </Wrapper> 
            
        )
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
        clearLoginError: () => dispatch(clearLoginError())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(LoginFail)

//CSS//
const Wrapper = styled.div`
width: 100%;
height: 62.4rem;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
`

const Main = styled.div`
width: 74rem;
/* height: 40rem; */
display: flex;
flex-direction: column;
align-items: center;
color: rgba(0,0,0, .6);
`

const Title = styled.div`
font-size: 2.6rem;
margin-bottom: 1rem;
font-weight: 600;
color: black;
`
const Text = styled.div`
font-size: 1.8rem;
text-align: center;
margin-bottom: 3rem;
`

const Input = styled.input`
width: 39rem;
height: 5rem;
border: 1px solid black;
padding-left: 1rem;
margin-bottom: 2rem;
display: flex;
align-items: flex-end;
justify-content: center;
`

const Button = styled.button`
border: none;
width: 40rem;
height: 5.6rem;
color: white;
background-color: #0073b1;
font-size: 1.8rem;
margin-top: 1rem;
cursor: pointer;

&:hover{
    background-color: #006097;
}
`

const ForgotPassword = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
color: #0073b1;
margin-top: 4rem;
font-size: 1.6rem;
font-weight: 600;


&:hover {
background-color: rgba(152,216,244,.25);
color: #006097;
}
`

const Register = styled.div`
display: flex;
margin-top: 3rem;
font-size: 1.6rem;
color: rgba(0,0,0, .6);
font-weight: 400;
`

const Link = styled.div`
cursor: pointer;
margin-left: 0.4rem;
color: #0073b1;
font-weight: 700;

&:hover{
    color: #665ed0;
}
`