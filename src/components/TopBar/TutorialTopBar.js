import React, { Component } from 'react';
import styled from 'styled-components';
import LogoImg from '../../imgs/login_topbar_tutorial_logo.png';
import { withRouter } from "react-router";

class TutorialTopBar extends Component {

    render() {
        return (
            <Main>
                <Logo>
                    <Img src={LogoImg} onClick={() => this.props.history.push('/')}/>
                </Logo>
            </Main>
        )
    }
}

export default withRouter(TutorialTopBar);

//CSS//
const Main = styled.div`
display: flex;
width: 100%;
height: 100%;
background-color: #ffffff;
`

const Logo = styled.div`
height: 100%;
width: 30%;
display: flex;
justify-content: center;
align-items: center;
`

const Img = styled.img`
width: 11.1rem;
cursor: pointer;
/* height: 3.8rem; */
`

