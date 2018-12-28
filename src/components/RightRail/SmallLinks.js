import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../imgs/right_rail_community_smalllinks_logo.png'

class SmallLinks extends Component {

    render() {
        return (
            <Main>
                <Links>
                <Link>About</Link>
                <Link>Help Center</Link>
                <Link>Privacy & Terms<i class="fas fa-angle-down"></i></Link><br />
                <Link>Advertising</Link>
                <Link>Business Services<i class="fas fa-angle-down"></i></Link><br />
                <Link>Get the LinkedIn app</Link>
                <Link>More</Link>
                </Links>
                <CopyRights><Img src={Logo} />LinkedIn Corporation © 2018</CopyRights>
            </Main>
        )
    }
}

export default SmallLinks;

//CSS//
const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
border: 1px solid #929292;
border-top: none;
height: 14.8rem;
width: 31rem;
background-color: white;
position: sticky;
top: 5.2rem;
`

const Links = styled.div`
width: 100%;
height: 9.5rem;
border-top: 1px solid #929292;
display: flex;
justify-content: center;
align-items:center;
flex-wrap: wrap;
`

const Link = styled.a`
font-size: 1.2rem;
padding: 0 1.2rem;
font-weight: 400;
text-decoration: none;
color: #4F6878;
cursor: pointer;
display: flex;
align-items: center;

& i {
    font-size: 1.6rem;
    padding-left: 0.5rem;
    padding-top: 0.2rem;
}

&:hover {
    color: #665ed0;
}
`

const CopyRights = styled.a`
width: 100%;
height: 3.5rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
color: rgba(0,0,0,.6);
font-weight: 400;
`
const Img = styled.img`
width: 6.3rem;
height: 2rem;
`