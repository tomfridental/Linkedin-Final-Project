import React, { Component } from 'react';
import styled from 'styled-components';

class FriendList extends Component {

    state ={
        dummyUsers: ['one', 'two', 'three', 'four', 'five','one', 'two', 'three', 'four', 'five']
    }
    render() {

        const {user} = this.props

        return (
            <Wrapper>
                <Main>
                <Search>
                    <Input placeholder="Search"/>
                </Search>
                {this.state.dummyUsers.map((item, i) =>
                <SingleChat key={`${item}${i}`}>
                   <Avatar><Img src={user.avatar}/></Avatar>
                   <Text>
                       <UserName>{user.first_name} {user.last_name}</UserName>
                       <Chat>{user.first_name}: chat</Chat>
                   </Text>
                </SingleChat>
                )}
                </Main>
            </Wrapper> 
        )
    }
}

export default FriendList;

//CSS//
const Wrapper = styled.div`
box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 4px 6px rgba(0,0,0,.2);
width: 100%;
display: flex;
flex-direction: column;
height: 32rem;
background-color: white;
overflow-y: scroll;
overflow-x: hidden;
position: relative;
`

const Main = styled.div`
position: absolute;
`

const Search = styled.div`
height: 4.2rem;
width: 100%;
display: flex;
margin-left: 1rem;
align-items: center;
background-color: #f5f5f5;
`

const Input = styled.input`
width: 20rem;
height: 2.5rem;
padding-left: 1.5rem;

&:focus {
    /* border: .2rem solid red; */
}
`

const SingleChat = styled.div`
height: 5rem;
width: 25.3rem;
display: flex;
align-items: center;
cursor: pointer;

&:hover{
    background-color: #f3f6f8;
}
`
const Avatar = styled.div`
height: 3.5rem;
width: 3.5rem;
border-radius: 50%;
margin: 0 1rem;
display: flex;
justify-content: center;
align-items: center;
`

const Img = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
`

const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 18rem;
padding: .75rem 0;
border-bottom: .1rem solid #e6e9ec;
` 

const UserName = styled.div`
width: 100%;
font-size: 1.4rem;
color: black;
font-weight: normal;
height: 1.75rem;
display: flex;
align-items: center;
`

const Chat = styled(UserName)`
font-size: 1.2rem;
`