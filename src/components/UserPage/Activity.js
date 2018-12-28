import React, { Component } from 'react';
import styled from 'styled-components';

class Activity extends Component {

    state = {
        test: [1, 2, 3, 4]
    }

    render() {

        const { selectedUser, userLastComments } = this.props
        if (userLastComments.length > 0) {
            return (
                <Wrapper>
                    <Title>Activity</Title>
                    <Fallowers>0 followers</Fallowers>

                    <ActivityDiv>
                        {userLastComments.map(item =>
                            <SingleActivity key={item._id}>
                                <ImgDiv>
                                    <AvatarImg src={selectedUser.avatar} />
                                </ImgDiv>
                                <ActivityText>
                                    <ActTitle>{item.text}</ActTitle>
                                    <ActText>{selectedUser.first_name} commented</ActText>
                                </ActivityText>
                            </SingleActivity>
                        )}
                    </ActivityDiv>

                    <ShowMore>See All</ShowMore>

                </Wrapper>
            )
        }
        else {
            return (
                null
            )
        }
    }
}

export default Activity;

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
font-size: 1.6rem;
font-weight: 600;
`

const Title = styled.div`
font-size: 2rem;
font-weight: 400;
color: rgba(0,0,0.9);
`

const Fallowers = styled.div`
font-size: 1.4rem;
font-weight: 400;
color: rgba(0,0,0 .6);
`

const ActivityDiv = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 2rem;
`
const SingleActivity = styled.div`
width: calc(50% - 2rem);
padding: 0 1rem;
height: 10.2rem;
display: flex;
cursor: pointer;
`

const ImgDiv = styled.div`
height: 5.6rem;
width: 5.6rem;
`
const AvatarImg = styled.img`
height: 5.6rem;
width: 5.6rem;
border-radius: 50%;
`

const ActivityText = styled.div`
width: 29.6rem;
`

const ActTitle = styled.div`
font-size: 1.6rem;
font-weight: 600;
color: rgba(0,0,0,.9);
padding: 0 1rem;
`

const ActText = styled.div`
font-size: 1.4rem;
font-weight: 400;
padding: 0 1rem;
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
`

