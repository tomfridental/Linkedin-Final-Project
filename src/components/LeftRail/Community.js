import React, { Component } from 'react';
import styled from 'styled-components';

class Community extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: ['מפתחי Front-End', 'מפתחי Back-End'],
            groupWindowOpen: true,
        }
        this.displayGroups = this.displayGroups.bind(this)
    }


    displayGroups() {
        this.setState(prevState => ({
            groupWindowOpen: !prevState.groupWindowOpen
        }))
        console.log(this.state.groupWindowOpen)
    }



    render() {
        return (
            <Main>
                <TopBox>
                    <TopBoxText>Your communities</TopBoxText>
                    <TopBoxLink href=""><i class="fas fa-pencil-alt"></i>
                    </TopBoxLink>
                </TopBox>

                <MiddleBox showWindow={this.state.groupWindowOpen}>
                    <MiddleBoxText>Groups</MiddleBoxText>
                    <MiddleBoxLink showWindow={this.state.groupWindowOpen} onClick={this.displayGroups}> <i class="fas fa-angle-down"></i> </MiddleBoxLink>
                </MiddleBox>

                <Groups showWindow={this.state.groupWindowOpen}>
                    {this.state.groups.map((group, i) => <GroupsList href="" key={i}>{group}</GroupsList>)}
                    <GroupsLink href="">See all</GroupsLink>
                </Groups>

                <BottomBox href="">
                    <BottomBoxText>Discover More</BottomBoxText>
                </BottomBox>
            </Main>
        )
    }
}

export default Community;

//CSS//
const Main = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #929292;
align-items: center; 
width: 21.6rem;
background-color: white;
margin-top: 0.9rem;
position: sticky;
top: 6rem;
`

const TopBox = styled.div`
width: 21.6rem;
height: 4rem;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #cfcfcf;
`

const TopBoxText = styled.div`
    padding-left: 1.2rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
`

const TopBoxLink = styled.a`
    padding-right: 1.3rem;   
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
`

const MiddleBox = styled.div`
width: 21.6rem;
height: 4rem;
border-bottom: ${(props) => !props.showWindow ? '1px solid #cfcfcf' : 'none'};
display: flex;
justify-content: space-between;
align-items: center;
background-color: #f3f6f8;
`

const MiddleBoxText = styled.div`
    padding-left: 1.2rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
`

const MiddleBoxLink = styled.a`
    padding-right: 1.3rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 2rem;
    padding-bottom: 0.7rem;
    color: #8b8d8e;
    padding-top: 0.5rem;
    cursor: pointer;

    & i {
    transform: ${(props) => !props.showWindow ? 'rotate(0deg)' : 'rotate(180deg)'};  
    }
`

const Groups = styled.div`
width: 21.6rem;
display: ${(props) => !props.showWindow ? 'none' : 'flex'};
flex-direction: column;
border-bottom: 1px solid #cfcfcf;
`

const GroupsList = styled.a`
height: 4.2rem;
width: 21.6rem;
padding-left: 3rem;
text-decoration: none;
color: rgba(0,0,0,.6);
font-size: 1.4rem;
font-weight: 600;
display: flex;
align-items: center;

    &:hover{
    color: #0073b1;
    }
`

const GroupsLink = styled.a`
display: flex;
align-items: center;
height: 2.7rem;
width: 21.6rem;
padding-left: 3rem;
text-decoration: none;
color: rgba(0,0,0,.6);
font-size: 1.4rem;
font-weight: 600;
padding-bottom: 0.5rem;

    &:hover{
        color: #0073b1;
        text-decoration: underline;
    }
`

const BottomBox = styled.a`
width: 21.6rem;
height: 4rem;
display: flex;
align-items: center;
text-decoration: none;

&:hover{
    text-decoration: underline;
}
`

const BottomBoxText = styled.div`
color: #0084bf;
padding-left: 1.2rem;
font-size: 1.4rem;
font-weight: 600;
`