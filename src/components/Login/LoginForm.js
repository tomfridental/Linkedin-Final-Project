import React, { Component } from 'react';
import styled from 'styled-components';
import BgImg from '../../imgs/login_wallpaper.jpg';
import { withRouter } from 'react-router'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errorMsg: null,
            registrationWizard: 'not done'
        }

        this.updateInfo = this.updateInfo.bind(this);
        this.signUp = this.signUp.bind(this);
        this.ValidateForm = this.ValidateForm.bind(this)
    }

    updateInfo(event) {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target })
    }

    async signUp() {
        this.setState({errorMsg: null})
        this.props.clearLoginFormErrMsg()
        let checkForm = this.ValidateForm(this.state)
        if (checkForm[0]) {
            try {
                const newUser = this.state
                delete newUser.errorMsg;
                await this.props.createNewUser(newUser)
            }
            catch (err) {
                console.log(err)
            }
        }

        else {
            this.setState({ errorMsg: checkForm[1] })
        }
    }

    ValidateForm(form) {
        var emailTest = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (form.first_name.length < 1) { return [false, 'Please Enter First Name', 'first_name'] }
        if (form.last_name.length < 1) return [false, 'Please Enter Last Name', 'last_name']
        if (!emailTest.test(String(form.email).toLowerCase())) { return [false, 'invalid Email Adress', 'email'] };
        if (form.password.length <= 5) { return [false, 'Passowrd is to short!', 'password']; }
        else { return [true, 'Form is ok!'] }
    }


    componentWillUnmount(){
        this.props.clearLoginFormErrMsg()
    }


    render() {

        return (
            <Wrapper>
                <Box>
                    <Header>
                        <BigText>Be great at what you do</BigText>
                        <SmallText>Get started - it's free.</SmallText>
                    </Header>
                    {this.props.errorMsg && <ErrorBox error={this.props.errorMsg}>{this.props.errorMsg}</ErrorBox>}
                    {!this.props.errorMsg && <ErrorBox error={this.state.errorMsg}>{this.state.errorMsg}</ErrorBox>}
                    <Form>
                        <FormText>First Name</FormText>
                        <Input name="first_name" onChange={this.updateInfo} />
                        <FormText>Last Name</FormText>
                        <Input name="last_name" onChange={this.updateInfo} />
                        <FormText>Email</FormText>
                        <Input name="email" onChange={this.updateInfo} />
                        <FormText type="password">Password (6 or more characters)</FormText>
                        <Input name="password" type="password" onChange={this.updateInfo} />
                        <Term>By clicking Join now, you agree to the LinkedIn User Agreement, Privacy Policy, and <span>Cookie Policy.</span></Term>
                        <Submit type="button" onClick={this.signUp}>Join Now</Submit>
                    </Form>
                </Box>
            </Wrapper>
        )
    }
}

export default withRouter(LoginForm);

//CSS//
const Wrapper = styled.div`
width: 100%;
height: 58rem;
background-color: lightcyan;
background-image: url('${BgImg}');
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width: 40rem;
/* height: 47rem; */
background-color: #f5f5f5;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 0;
`

const Header = styled.div`
width: 100%;
height: 10rem;
background-color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const BigText = styled.div`
font-size: 2.6rem;
padding: .5rem 1rem;
`
const SmallText = styled(BigText)`
font-size: 1.6rem;
`

const Form = styled.form`
width: 35rem;
height: 35rem;
display: flex;
flex-direction: column;
color: black;
padding-top: 1rem;
`
const FormText = styled.div`
font-size: 1.4rem;
margin: 0.5rem 0;
`

const Input = styled.input`
width: 100%;
height: 2.7rem;
`

const Term = styled.span`
width: 100%;
text-align: center;
margin-top: 1rem;
margin-bottom: 1.5rem;
font-size: 1.2rem;

& span{
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #0073b1;
    }
}
`

const Submit = styled.button`
width: 100%;
height: 3.5rem;
border: none;
color: white;
background-color: #0073b1;
font-size: 1.4rem;
cursor: pointer;

&:hover{
    background-color: #006097;
}
`

const ErrorBox = styled.div`
width: 100%;
height: 4rem;
background-color: red;
color: white;
display: ${props => props.error === null ? 'none' : 'flex'};
justify-content: center;
align-items: center;
font-size: 1.6rem;
`