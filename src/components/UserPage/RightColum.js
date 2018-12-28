import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

class RightColum extends Component {

    render() {

        const { usersToFallow } = this.props

        return (
            <Wrapper>
                <Title>
                    People Also Viewed
            </Title>
                {usersToFallow.map(user =>
                    <Link to={`/user/${user._id}`} key={user._id}>
                    <UserBox>
                        <AvatarDiv>
                            <AvatarImg src={user.avatar} />
                        </AvatarDiv>
                        <TextDiv>
                            <UserName>{user.first_name} {user.last_name}</UserName>
                            <UserTitle>{user.job_title} at {user.company_name}</UserTitle>
                        </TextDiv>
                    </UserBox>
                    </Link>
                )}
            </Wrapper>
        )
    }
}

export default RightColum;

//CSS//
const Wrapper = styled.div`
width: 31.2rem;
margin-left: 2.5rem;

& a{
    text-decoration: none;
}
`

const Title = styled.h2`
font-size: 1.6rem;
color: rgba(0,0,0.9);
font-weight: 400;
`

const UserBox = styled.div`
width: 100%;
display: flex;
cursor: pointer;
margin-bottom: 2rem;
`

const AvatarDiv = styled.div`
height: 5.6rem;
width: 5.6rem;
`
const AvatarImg = styled.img`
height: 5.6rem;
width: 5.6rem;
border-radius: 50%;
`

const TextDiv = styled.div`
width: 29.6rem;
`

const UserName = styled.div`
font-size: 1.6rem;
font-weight: 600;
color: rgba(0,0,0,.9);
padding: 0 1rem;
margin-bottom: .7rem;

&:hover{
    text-decoration: underline;
    color: #0073b1;
}
`

const UserTitle = styled.div`
font-size: 1.4rem;
font-weight: 400;
padding: 0 1rem;
color: rgba(0,0,0,.9);
`