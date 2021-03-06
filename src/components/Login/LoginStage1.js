import React, { Component } from 'react';
import styled from 'styled-components';
import {CountryDropdown} from 'react-country-region-selector';

//Actions//
import { connect } from 'react-redux';
import { updateUserLocation } from './LoginReducer/Login.action'

class LoginStage1 extends Component {

    state = {
        country: '',
        postal_code: ''
    }

    updateInfo(event) {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target })
    }

    selectCountry(val) {
        this.setState({ country: val });
      }

    finishStage(){
        const userData = this.state;
        userData.id = this.props.loginData.user._id
        this.props.updateUserLocation(userData)
    }

    render() {

        const {auth, user, userLocationUpdated} = this.props.loginData

        return (
            <Wrapper>
                {userLocationUpdated && this.props.history.push('/start/profile')}

                <ProgressDiv>
                    <ProgressPoint>
                        <ProgressPointCircle status={'progress'}></ProgressPointCircle>
                        <ProgressText status={"progress"}>Location</ProgressText>
                        </ProgressPoint>
                    <ProgressPoint>
                        <ProgressPointCircle status={"no"}></ProgressPointCircle>
                        <ProgressText status={"no"}>Job Info</ProgressText>
                        <ProgressLine status={"no"}></ProgressLine>
                        </ProgressPoint>
                    <ProgressPoint>
                        <ProgressPointCircle status={"no"}></ProgressPointCircle>
                        <ProgressText status={"no"}>Avatar</ProgressText>
                        <ProgressLine status={"no"}></ProgressLine>
                        </ProgressPoint>
                </ProgressDiv>

                <Main>
                    <Title>Welcome, {auth && user.first_name}!</Title>
                    <Text> Let’s start your profile, connect to people you know, and engage with them on topics you care about. </Text>
                    <InfoDiscription>Country/Region</InfoDiscription>
                    <CountryDropdown 
                    value={this.state.country} 
                    onChange={(val) => this.selectCountry(val)}
                    style={CountryInput}
                    priorityOptions={["IL"]}
                    />
                    <InfoDiscription>Postal code</InfoDiscription>
                    <Input name="postal_code" placeholder="58358" onChange={this.updateInfo.bind(this)}/>
                    <Button onClick={this.finishStage.bind(this)}>Next</Button>
                </Main>
            </Wrapper> 
        )
    }
}

// Redux // 
function mapStateToProps(state, ownProps) {

    const { loginData } = state;
  
    return {
      loginData
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      updateUserLocation: (userData) => dispatch(updateUserLocation(userData))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(LoginStage1)

//CSS//
const CountryInput = {
    width: '40.1rem',
    height: '3.5rem',
    border: '1px solid black',
    paddingLeft: '1rem',
    fontWeight: '400'
}

const Wrapper = styled.div`
width: 100%;
height: 62.4rem;
background-color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media only screen and (max-width: 580px) {
height: 100vh;
}
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
font-size: 4rem;
margin-bottom: 2rem;
color: black;
`
const Text = styled.div`
font-size: 1.8rem;
text-align: center;
margin-bottom: 5rem;
`

const InfoDiscription = styled.div`
display: flex;
font-size: 1.6rem;
width: 40rem;
height: 1.6rem;
margin: 1rem 0;
`

const Input = styled.input`
width: 39rem;
height: 3.5rem;
border: 1px solid black;
padding-left: 1rem;
`

const Button = styled.button`
border: none;
width: 40rem;
height: 4.2rem;
color: white;
background-color: #0073b1;
font-size: 2rem;
margin-top: 2rem;
cursor: pointer;

&:hover{
    background-color: #006097;
}
`

const ProgressDiv = styled.div`
display: flex;
margin-bottom: 5rem;
`

const ProgressPoint = styled.div`
padding: .3rem;
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.4rem;
color: rgba(0,0,0, .6);
font-weight: normal;
position: relative;
`

const ProgressText = styled.span`
width: 6.5rem;
text-align: center;
color: ${props => props.status === 'done' ? 'black' : props.status==='progress' ? 'black' : 'rgba(0,0,0, .6)'};
`

const ProgressPointCircle = styled.div`
width: .8rem;
height: .8rem;
border-radius: 50%;
background-color: ${props => props.status === 'done' ? '#0073b1' : props.status==='progress' ? 'transparent' : 'transparent'};
border: .1rem solid ${props => props.status === 'done' ? '#0073b1' : props.status==='progress' ? '#0073b1' : 'rgba(0,0,0, .6)'};
/* border: .1rem solid rgba(0,0,0, .6); */
`

const ProgressLine = styled.div`
height: .2rem;
width: 5rem;
background-color: ${props => props.status === 'done' ? 'black' : props.status==='rgba(0,0,0, .2)' ? 'transparent' : 'rgba(0,0,0, .2)'};
border-radius: .2rem;
position: absolute;
top: .5rem;
left: -2.6rem;
`