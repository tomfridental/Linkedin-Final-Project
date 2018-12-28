import React, { Component } from 'react';
import styled from 'styled-components';
import CameraBG from '../../imgs/login_stage3_camera_icon.png'
import { connect } from 'react-redux';
import { finishTutorial, finishTutorialNoAvatar } from './LoginReducer/Login.action'
import Loader from '../../imgs/Loader'

class LoginStage3 extends Component {
    file_data = null;
    state = {
        showLoader: false,
        imgBG: null
    }

    componentWillMount() {
        this.setState({ imgBG: CameraBG })
    }

    updateInfo(event) {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target })
    }


    finishStage = () => {
        this.setState({showLoader: true})
        const userID = this.props.loginData.user._id
        this.props.finishTutorial(this.file_data, userID)
        

    }

    finishNoAvatar = () => {
        const userID = this.props.loginData.user._id
        this.props.finishTutorialNoAvatar(userID)
    }

    uploadAvatar = (event) => {
        const file = event.target.files[0]        
        if (!file) {
            return
        }

        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = e =>  this.setState({ imgBG: reader.result})

        let data = new FormData()
        data.append('avatar', file)
        this.file_data = data;
    }


    render() {
        const { user } = this.props.loginData
        return (
            <Wrapper>
                {user.registrationWizard === 'done' && this.props.history.push('/feed')}
                <ProgressDiv>
                    <ProgressPoint>
                        <ProgressPointCircle status={'done'}></ProgressPointCircle>
                        <ProgressText status={"done"}>Location</ProgressText>
                        </ProgressPoint>
                    <ProgressPoint>
                        <ProgressPointCircle status={"done"}></ProgressPointCircle>
                        <ProgressText status={"done"}>Job Info</ProgressText>
                        <ProgressLine status={"done"}></ProgressLine>
                        </ProgressPoint>
                    <ProgressPoint>
                        <ProgressPointCircle status={"progress"}></ProgressPointCircle>
                        <ProgressText status={"progress"}>Avatar</ProgressText>
                        <ProgressLine status={"done"}></ProgressLine>
                        </ProgressPoint>
                </ProgressDiv>
                <Header> Adding a photo helps people recognize you</Header>

                <Main>
                    <Photo bg={this.state.imgBG}>
                        <UploadPhoto type="file" onChange={this.uploadAvatar} accept="image/png, image/jpeg" name="avatar"/>
                    </Photo>
                    <User>{`${user.first_name} ${user.last_name}`}</User>
                    <Title>{user.job_title}</Title>
                    <Button onClick={this.finishStage}>
                        Add a photo
                       {this.state.showLoader && <Loader />}
                    </Button>
                    <Skip onClick={this.finishNoAvatar}>Skip</Skip>
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
        finishTutorial: (file, userID) => dispatch(finishTutorial(file, userID)),
        finishTutorialNoAvatar: (userID) => dispatch(finishTutorialNoAvatar(userID))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginStage3)


//CSS//
const Wrapper = styled.div`
width: 100%;
height: 62.4rem;
background-color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Main = styled.div`
margin-top: 7rem;
width: 40rem;
height: 29rem;
border: 1px solid black;
display: flex;
flex-direction: column;
align-items: center;
color: rgba(0,0,0, .6);
position: relative;
`

const Header = styled.div`
color: black;
font-size: 3rem;
text-align: center;
margin-top: 3rem;
margin-bottom: 4rem;
`

const Photo = styled.label`
display: flex;
width: 15rem;
height: 15rem;
border-radius: 50%;
border: 0.3rem solid #f5f5f5;
background-color: #e1ebf4;
position: absolute;
top: -8rem;
cursor: pointer;
background-image: url('${props => props.bg}');
background-size: cover;
`

const User = styled.div`
margin-top: 10rem;
font-size: 2.4rem;
`
const Title = styled.div`
margin-top: 1rem;
font-size: 1.8rem;
`

const Skip = styled.div`
color: #0073b1;
margin-top: 2rem;
font-size: 1.8rem;
cursor: pointer;
font-weight: 400;

&:hover {
    text-decoration: underline;
}
`





const Button = styled.button`
border: none;
width: 36rem;
height: 4.2rem;
color: white;
background-color: #0073b1;
font-size: 2rem;
margin-top: 2rem;
cursor: pointer;
position: relative;

&:hover{
    background-color: #006097;
}
`

const UploadPhoto = styled.input`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-25%, -25%);
pointer-events: none;
width: 1px;
height: 1px;
opacity: 0;
`

////
const ProgressDiv = styled.div`
display: flex;
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