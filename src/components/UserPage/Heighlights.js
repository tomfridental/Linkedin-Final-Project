import React, { Component } from 'react';
import styled from 'styled-components';
import MessageImg from '../../imgs/userpage_message_img.svg'
import ImgToBeDeleted from '../../imgs/ToBeDeletedProfilePic.jpg'

class Highlights extends Component {

    state = {
        showMore: false
    }

    displayMore = () => {
        this.setState(prevState => ({ showMore: !prevState.showMore }))
    }

    render() {

        const {selectedUser} = this.props

        return (
            <Wrapper>
                <Title>Highlights</Title>
                <UL showMore={this.state.showMore}>

                    <LI>
                        <LiImgDiv> 
                            <LiConImg1 src={ImgToBeDeleted} />
                            <LiConImg2 src={ImgToBeDeleted} />
                        </LiImgDiv>
                        <LiText>
                            <TextTitle>0 Mutual Connections</TextTitle>
                            <TextText> You and {selectedUser.first_name} both know #### #### and 0 others</TextText>
                        </LiText>
                    </LI>

                    <LI>
                        <LiImgDiv>
                            <LiImg src={MessageImg} />
                        </LiImgDiv>
                        <LiText>
                            <TextTitle>Reach out to {selectedUser.first_name} for...</TextTitle>
                            <TextText> Hiring.</TextText>
                            <MessageButton>Message {selectedUser.first_name} </MessageButton>
                        </LiText>
                    </LI>

                    <LI>
                        <LiImgDiv>
                            <LiImgWithout>
                                <i class="fas fa-users"></i>
                            </LiImgWithout>
                        </LiImgDiv>
                        <LiText>
                            <TextTitle>0 Mutual Group</TextTitle>
                            <TextText>Group Name Goes here: ####</TextText>
                           
                        </LiText>
                    </LI>

                </UL>
                <ShowMore onClick={this.displayMore} showMore={this.state.showMore}>
                    {!this.state.showMore && 'Show More'}
                    {this.state.showMore && 'Show Less'}
                    <i class="fas fa-angle-down"></i>
                </ShowMore>
            </Wrapper>
        )
    }
}

export default Highlights;

//CSS//
const Wrapper = styled.div`
background-color: white;
margin-bottom: 2rem;
box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
transition: box-shadow 83ms;
padding: 0 2rem;
padding-top: 2rem;
display: flex;
flex-direction: column;
`

const Title = styled.h2`
font-size: 2rem;
font-weight: 400;
color: rgba(0,0,0,.9);
`

const UL = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
max-height: ${props => props.showMore ? 'max-content' : '10.2rem'};
overflow: hidden;
`

const LI = styled.div`
width: calc(50% - 2rem);
padding: 0 1rem;
height: 10.2rem;
display: flex;
`

const LiImgDiv = styled.div`
height: 5.6rem;
width: 5.6rem;
position: relative;
`

const LiImg = styled.img`

`

const LiConImg1 = styled.img`
width: 2.8rem;
height: 2.8rem;
border-radius: 50%;
position: absolute;
border: .1rem solid white;
top: 5%;
right: 40%;
`

const LiConImg2 = styled(LiConImg1)`
position: absolute;
top: 30%;
right: 10%;
`

const LiImgWithout = styled.div`
height: 5.6rem;
width: 5.6rem;
background-color: #b3b6b9;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
color: #dadcdd;
`

const LiText = styled.div`
width: 29.6rem;
`

const TextTitle = styled.div`
font-size: 1.6rem;
font-weight: 600;
color: rgba(0,0,0,.9);
padding: 0 1rem;
`

const TextText = styled.div`
font-size: 1.4rem;
font-weight: 400;
padding: 0 1rem;
`

const MessageButton = styled.button`
border: none;
width: 15.1rem;
height: 3.2rem;
margin-left: 1rem;
margin-top: .5rem;
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
border-top: .1rem solid rgba(0, 0, 0, 0.15);

& i{
    font-size: 2rem;
    margin-left: 1rem;
    transform: ${props => props.showMore ? 'rotate(180deg)' : 'none'};
}
`