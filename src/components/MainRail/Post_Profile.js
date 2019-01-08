import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Profile extends Component {

    render() {

        return (
            <Link style={{textDecoration: 'none'}} to={`/user/${this.props._id}`}>
            <ProfileDiv>
                <Avatar><AvatarImg src={this.props.avatar}/></Avatar>
                <Info>
                    <InfoName>{`${this.props.first_name} ${this.props.last_name}`}</InfoName>
                    <InfoTitle>{this.props.job_title} at {this.props.company_name}</InfoTitle>
                    <InfoTime>{this.props.timeOfPost}</InfoTime>
                </Info>
                <PostOptions><i class="fas fa-ellipsis-h"></i></PostOptions>
            </ProfileDiv>
            </Link>
        )
    }
}

export default Profile;

//CSS//
const ProfileDiv = styled.div`
width: 52.8rem;
height: 6rem;
display: flex;
padding: 1rem 1rem;

@media only screen and (max-width: 580px) {
width: 100%;
}
`

const Avatar = styled.div`
background-color: #ffffff;
width: 6rem;
height: 6rem;
cursor: pointer;
`

const AvatarImg = styled.img`
width: 5.9rem;
height: 5.9rem;
border-radius: 50%;
`

const Info = styled.div`
width: 41rem;
height: 6rem;
margin-left: 1rem;
display: flex;
flex-direction: column;
cursor: pointer;

@media only screen and (max-width: 580px) {
width: 100%;
}
`

const InfoName = styled.div`
height: 2rem;
color: rgba(0,0,0,.9);
font-weight: 600;
font-size: 1.4rem;
cursor: pointer;

&:hover{
    color: #0073b1;
    text-decoration: underline;
}
`

const InfoTitle = styled.div`
height: 2rem;
font-weight: 600;
font-size: 1.2rem;
color: rgba(0,0,0,.6);
`

const InfoTime = styled(InfoTitle)`
font-size: 1.2rem;
color: rgba(0,0,0,.6);
`

const PostOptions = styled.div`
height: 3rem;
width: 4.8rem;
display: flex;
justify-content: flex-end;
font-size: 2rem;
color: rgba(0,0,0,.6); 

@media only screen and (max-width: 580px) {
margin-right: 3rem;
}
`