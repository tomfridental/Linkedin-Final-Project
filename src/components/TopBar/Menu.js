import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

class Menu extends Component {

    componentDidMount() {
        document.addEventListener('mousedown', this.removeMenu, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.removeMenu, false);
    }

    removeMenu = (e) => {
        if (!this.LinkMenu.contains(e.target) && !this.props.ClickMeRef.contains(e.target)) {
            this.props.hideMenu()
            return;
        }
    }


    render() {
        const { avatar, first_name, last_name, job_title, _id } = this.props.user

        return (
            <Main show={this.props.show} ref={LinkMenu => this.LinkMenu = LinkMenu}>
                <Link to={`/user/${_id}`} onClick={() => this.props.hideMenu()} style={{textDecoration: 'none'}}> 
                    <Header>
                        <Box>
                            <ImgDiv>
                                <Img src={avatar} />
                            </ImgDiv>
                            <Info>
                                <Name>{`${first_name} ${last_name}`}</Name>
                                <Title>{job_title}</Title>
                            </Info>
                        </Box>
                        <ViewProfile>
                            View profile
                   </ViewProfile>
                    </Header>
                </Link>
                <VBox>
                    <VboxTitle><span>ACCOUNT</span></VboxTitle>
                    <VBoxOption><span>Settings & Privacy</span></VBoxOption>
                    <VBoxOption><span>Language</span></VBoxOption>
                </VBox>

                <VBox>
                    <VboxTitle><span>need help?</span></VboxTitle>
                    <VBoxOption><span>Open Quick Help</span></VBoxOption>
                </VBox>

                <VBox>
                    <VboxTitle><span>manage</span></VboxTitle>
                    <VBoxOption><span>Post & Activity</span></VBoxOption>
                    <VBoxOption><span>Job postings</span></VBoxOption>
                    <Signout onClick={() => this.props.logUserOut()}><span>Sign out</span></Signout>
                </VBox>
            </Main>
        )
    }
}

export default Menu;

//CSS//
const Main = styled.div`
width: 28.5rem;
border: 1px solid lightgray;
background-color: #ffffff;
position: absolute;
right: 0;
top: 5.2rem;
display: flex;
flex-direction: column;
`

const Header = styled.div`
width: 26.5rem;
padding: 0 1rem;
display: flex;
flex-direction: column;
margin-top: 1.5rem;
cursor: pointer;
`

const Box = styled.div`
display: flex;
width: 100%;
`

const ImgDiv = styled.div`
width: 5.5rem;
`

const Img = styled.img`
width: 5.5rem;
height: 5.5rem;
border-radius: 50%;
box-shadow: 0 2px 5px rgba(0,0,0,.15);
`

const Info = styled.div`
width: 21rem;
padding-left: 1.5rem;
display: flex;
flex-direction: column;
justify-content: center;
`

const ViewProfile = styled.div`
width: 100%;
height: 3rem;
margin-top: .7rem;
display: flex;
justify-content: center;
align-items: center;
color: #0073b1;
font-size: 1.4rem;
font-weight: 600;

&:hover{
    background-color: rgba(152,216,244,.25);
}
`

const Name = styled.div`
font-size: 1.6rem;
color: rgba(0,0,0, .9);
font-weight: 600;
`

const Title = styled.div`
font-size: 1.4rem;
font-weight: 400;
color: rgba(0,0,0, .6);
`

const VBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const VboxTitle = styled.div`
width: 100%;
height: 3.6rem;
display: flex;
align-items: center;
font-size: 1.4rem;
color: rgba(0,0,0, .9);
font-weight: 600;
border-top: 1px solid rgba(0,0,0,.15);
border-bottom: 1px solid rgba(0,0,0,.15);
background-color: #f3f6f8;
margin: 0.4rem 0;
text-transform: uppercase;

& span {
    margin-left: 1.5rem;
}
`

const VBoxOption = styled.div`
width: 100%;
height: 3.6rem;
display: flex;
align-items: center;
font-size: 1.4rem;
color: rgba(0,0,0, .6);
font-weight: 600;
cursor: pointer;

& span {
    margin-left: 1.5rem;
}

&:hover{
    background-color: #cdcfd2;
}
`

const Signout = styled(VBoxOption)`
border-top: 1px solid rgba(0,0,0, .3);
`