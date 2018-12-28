import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../imgs/userpage_bottombar_logo.png'

class BottomBar extends Component {

    render() {
        return (
            <Wrapper>
            <Header>
                <Img src={Logo} />
            </Header>
            <div>
            <Main>
                <LeftColum>
                    <LCLink>About</LCLink>
                    <LCLink>Careers</LCLink>
                    <LCLink>Advertising</LCLink>
                    <LCLink>Mobile</LCLink>
                    <LCLink>Talent Solutions</LCLink>
                    <LCLink>Marketing Solutions</LCLink>
                    <LCLink>Sales Solutions</LCLink>
                    <LCLink>Small Business</LCLink>
                    <LCLink>Community Guidelines</LCLink>
                    <LCLink>Privacy & Terms </LCLink>
                    <LCLink>Send feedback</LCLink>
                    <LCLink>Safety Center</LCLink>
                </LeftColum>

                <RightColum>
                    <RCBox>
                        <RCIcon><i class="far fa-question-circle"></i></RCIcon>
                        <RCLinkBox>
                            <RCLink>Questions?</RCLink>
                            <RCLinkText>Visit our Help Center.</RCLinkText>
                        </RCLinkBox>
                    </RCBox>

                    <RCBox>
                        <RCIcon><i class="fas fa-cog"></i></RCIcon>
                        <RCLinkBox>
                            <RCLink>Manage your account and privacy.</RCLink>
                            <RCLinkText>Go to your Settings.</RCLinkText>
                        </RCLinkBox>
                    </RCBox>
                </RightColum>
                <LanguageDiv>
                   <span>Select Language</span>
                   <SelectLang>
                       <option value="english">English (English)</option>
                       <option value="hebrew">Hebrew</option>
                       <option value="arabic">Arabic</option>
                       <option value="russian">Russian</option>
                   </SelectLang>
                </LanguageDiv>
            </Main>
            </div>
            <CopyRight>
                LinkedIn Corporation © 2018
            </CopyRight>
            </Wrapper> 
        )
    }
}

export default BottomBar;

//CSS//
const Wrapper = styled.div`
width: 100%;
height: 3.5rem;
display: flex;
flex-direction: column;
align-items: center;
border-top: 1px solid lightgray;
`

const Header = styled.div`
margin-top: 2rem;
width: 113rem;
`

const Img = styled.img`
width: 8.4rem;
height: 2.8rem;
`

const Main = styled.div`
display: flex;
width: 113rem;
margin-bottom: 1rem;
`

const LeftColum = styled.div`
display: flex;
flex-direction: column;
height: 11.6rem;
width: 51rem;
margin: 1rem 0;
flex-wrap: wrap;
`

const LCLink = styled.div`
color: #495D6E;
font-size: 1.2rem;
padding: 0.2rem;
font-weight: 600;
margin-bottom: .8rem;
cursor: pointer;

&:hover {
    color: #0084bf;
}
`

const RightColum = styled.div`
padding: 1rem 0;
width: 25rem;
display: flex;
flex-direction: column;
margin-left: 3rem;
`

const RCBox = styled.div`
width: 100%;
height: 5.5rem;
display: flex;
`

const RCIcon = styled.div`
height: 2.4rem;
width: 2.4rem;
color: #0084bf;
font-size: 2rem;
display: flex;
justify-content: center;
align-items: center;
`

const RCLinkBox = styled.div`
display: flex;
flex-direction: column;
margin-left: 1rem;
`

const RCLink = styled.div`
font-size: 1.4rem;
font-weight: 600;
color: #495D6E;
cursor: pointer;

&:hover{
    color: #0084bf;
}
`

const RCLinkText = styled.div`
margin-top: .3rem;
color: #495D6E;
font-size: 1.2rem;
font-weight: 400;
`

const LanguageDiv = styled.div`
margin-left: 2rem;
display: flex;
flex-direction: column;
color: #495D6E;
font-size: 1.2rem;
font-weight: normal;
padding: 1rem 0;
`

const SelectLang = styled.select`
margin-top: 1rem;
width: 17.5rem;
height: 3.2rem;
background-color: transparent;
color: #0091ca;
border: .2rem solid #0091ca;
font-weight: 600;
font-size: 1.2rem;

&:hover{
    border-color: rgba(0,0,0,.9);
}
`

const CopyRight = styled.div`
font-size: 1.2rem;
font-weight: normal;
color: rgba(0,0,0.6);
font-weight: normal;
width: 113rem;
margin-bottom: 2rem;
`