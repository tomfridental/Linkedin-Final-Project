import React, { Component } from 'react';
import styled from 'styled-components';
import BgImg from '../../imgs/leftrail_profile_bg.png';

class ProfileTop extends Component {

    state = {
        discriptionShowMore: false
    }

    displayDiscription = () => {
        this.setState(prevState => ({discriptionShowMore: !prevState.discriptionShowMore}))
    }

    render() {
        const { selectedUser, user } = this.props
        return (
            <Wrapper>
            <Profile>
                <ProfileImg>
                    <Img src={selectedUser.avatar} />
                </ProfileImg>
                <ProfileLeft>
                    <UserName>{selectedUser.first_name} {selectedUser.last_name}</UserName>
                    <Title>{selectedUser.job_title}</Title>
                    <Location>{selectedUser.country}</Location>
                    {user && selectedUser._id !== user._id &&
                    <Buttons>
                        <ConnectButton>Connect</ConnectButton>
                        <MessageButton>Message</MessageButton>
                        <MoreButton>More...</MoreButton>
                    </Buttons>
                    }
                    {user && selectedUser._id === user._id &&
                    <Buttons>
                    <AddSectionButton>Add profile section <i class="fas fa-sort-down"></i></AddSectionButton>
                    <MoreButton>More...</MoreButton>
                    </Buttons>
                    }
                
                </ProfileLeft>
                <ProfileRight>
                    <InfoButton>
                        <InfoIcon><i class="fas fa-building"></i></InfoIcon>
                        <InfoText>{selectedUser.company_name}</InfoText>
                    </InfoButton>

                    <InfoButton>
                        <InfoIcon><i class="fas fa-university"></i></InfoIcon>
                        <InfoText>Macquarie Graduate School of Management (MGSM)</InfoText>
                    </InfoButton>

                    <InfoButton>
                        <InfoIconNoBG><i class="far fa-address-book"></i></InfoIconNoBG>
                        <InfoText>See Contact Info</InfoText>
                    </InfoButton>

                    <InfoButton>
                        <InfoIconNoBG><i class="fas fa-user-friends"></i></InfoIconNoBG>
                        <InfoText>0 Conections</InfoText>
                    </InfoButton>

                </ProfileRight>
            </Profile>
            <Discription showMore={this.state.discriptionShowMore}>
                <p>
            Mali Alcobi, CEO and Owner, Dynamix and the author of the Book - Heroes & Hormones From Screen Slave to SuperHero

            Mali has a bachelor’s degree in business administration from Macquarie University in Sydney, Australia, having specialized 
            in organizational psychology and human resources. In the course of her studies, Mali acquired knowledge exclusively available  
            in Australia about flexibility and Work Life Balance.
            As a graduate of the Coaching Academy, she serves as a business coach and has experience in both personal and group coaching of 
            senior managers from various organizations towards the attainment of a balance between work and individuals’ private lives. 
            She is a guest lecturer at the Ruppin Academic Center in the center’s undergraduate Manager’s Program. Formerly, she taught 
            human resources management at the College of Management. 
            Mali has extensive knowledge and experience in company management, human resources management and organizational counselling, 
            specializing in facilitating processes of change and human resources recruitment. She is a member of the High-Tech Managers 
            Forum and serves as an expert adviser on WLB. In this capacity, she has facilitated the enactment of the forum’s compact among 
            the co-signed organizations. Mali was certified by WorldatWork (a non-profit organization that promotes work-life balance 
            solutions in the United States) as a co-instructor of the W1: Introduction to Work-Life Effectiveness course in Israel
            

            Specialties: Generation Y, Gen Y, Gen Z, Work Life Balance, Effectivness
            </p>
        </Discription>
        <ShowMore onClick={this.displayDiscription} showMore={this.state.discriptionShowMore}>
       {!this.state.discriptionShowMore && 'Show More'}
       {this.state.discriptionShowMore && 'Show Less'}
       <i class="fas fa-angle-down"></i>
        </ShowMore>
        </Wrapper>
        )
    }
}

export default ProfileTop;

//CSS//
const Wrapper = styled.div`
background-color: white;
margin-bottom: 2rem;
box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
transition: box-shadow 83ms;
`

const Profile = styled.div`
width: 100%;
height: 42.5rem;
background-image: url("${BgImg}");
background-size: 79.2rem 19.8rem;
background-repeat: no-repeat;
display: flex;
align-items: flex-end;
justify-content: space-between;
padding-bottom: 2rem;
position: relative;
`

const ProfileImg = styled.div`
position: absolute;
top: 12rem;
left: 4rem;
width: 14rem;
height: 14rem;
border-radius: 50%;
border: .1rem solid black;
background-color: white;
`

const Img = styled.img`
width: 13.8rem;
height: 13.8rem;
border-radius: 50%;
`

const ProfileLeft = styled.div`
width: 48.8rem;
margin-left: 2.5rem;
height: 15.2rem;
background-color: white;  
display: flex;
flex-direction: column;
`

const UserName = styled.div`
font-size: 2.2rem;
color: rgba(0,0,0, .9);
padding: .5rem 0;
`

const Title = styled.div`
padding: .5rem 0;
font-size: 1.8rem;
color: rgba(0,0,0, .9);
`
const Location = styled.div`
padding: .5rem 0;
`

const Buttons = styled.div`
padding: .5rem 0;
`

const ConnectButton = styled.button`
border: none;
width: 11rem;
height: 4rem;
font-weight: 600;
background-color: #0073b1;
color: white;
font-size: 1.6rem;
cursor: pointer;
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Fira Sans",Ubuntu,Oxygen,"Oxygen Sans",Cantarell,"Droid Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Emoji","Segoe UI Symbol","Lucida Grande",Helvetica,Arial,sans-serif;

&:hover{
    background-color: #006097;
}
`

const MessageButton = styled.button`
border: none;
width: 14.2rem;
height: 4rem;
margin-left: 1rem;
font-size: 1.6rem;
font-weight: 600;
box-shadow: inset 0 0 0 1px #0073b1,inset 0 0 0 2px transparent,inset 0 0 0 1px transparent;
color: #0073b1;
background-color: transparent;
cursor: pointer;
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Fira Sans",Ubuntu,Oxygen,"Oxygen Sans",Cantarell,"Droid Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Emoji","Segoe UI Symbol","Lucida Grande",Helvetica,Arial,sans-serif;

&:hover {
    background-color: rgba(152,216,244,.25);
    box-shadow: inset 0 0 0 1px #0073b1, inset 0 0 0 2px #006097, inset 0 0 0 1px transparent;
}
`

const MoreButton = styled.button`
border:none;
width: 7.5rem;
height: 4rem;
margin-left: 1rem;
cursor: pointer;
font-weight: 600;
box-shadow: inset 0 0 0 .1rem rgba(0,0,0,.6);
background-color: transparent;
color: rgba(0,0,0,.6);
font-size: 1.6rem;
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Fira Sans",Ubuntu,Oxygen,"Oxygen Sans",Cantarell,"Droid Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Emoji","Segoe UI Symbol","Lucida Grande",Helvetica,Arial,sans-serif;

&:hover {
    background-color: rgba(207,207,207,.25);
    color: rgba(0,0,0,.75);
    box-shadow: inset 0 0 0 .1rem rgba(0,0,0,.6), inset 0 0 0 .2rem rgba(0,0,0,.75), inset 0 0 0 .1rem transparent;
}
`

const ProfileRight = styled.div`
height: 20.2rem;
width: 23.2rem;
margin-right: 2.5rem;
display: flex;
flex-direction: column;
justify-content: flex-end;
`

const AddSectionButton = styled(ConnectButton)`
width: 19.5rem;
height: 4rem;

& i{
margin-left: 0.5rem;
vertical-align: top;
}
`

const InfoButton = styled.button`
display: flex;
align-items: center;
margin-top: .5rem;
width: 23.2rem;
/* height: 3.2rem; */
border: none;
background-color: transparent;
cursor: pointer;
text-align: left;
`

const InfoIcon = styled.div`
background-color: #b3b6b9;
height: 3rem;
width: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: .2rem;
font-size: 1.4rem;
`

const InfoIconNoBG = styled(InfoIcon)`
background-color: transparent;
font-size: 2rem;
`

const InfoText = styled.div`
width: 20rem;
margin-left: 1rem;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
font-size: 1.4rem;
color: rgba(0,0,0, .9);
font-weight: 600;
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Fira Sans",Ubuntu,Oxygen,"Oxygen Sans",Cantarell,"Droid Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Emoji","Segoe UI Symbol","Lucida Grande",Helvetica,Arial,sans-serif;
`

const Discription = styled.div`
margin: 0 2rem;
color: rgba(0,0,0, .9);
border-top: .1rem solid rgba(0, 0, 0, 0.15);
border-bottom: .1rem solid rgba(0, 0, 0, 0.15);
padding: 1rem 0;
width: 74.2rem;
max-height:${props=> props.showMore ? 'max-content' : '15.5rem'};
overflow: hidden;
`

const ShowMore = styled.div`
width: 100%;
height: 4.9rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: #0073b1;
font-size: 1.6rem;
font-weight: 600;

& i{
    font-size: 2rem;
    margin-left: 1rem;
    transform: ${props => props.showMore ? 'rotate(180deg)' : 'none'};
}
`