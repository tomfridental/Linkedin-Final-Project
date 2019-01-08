import React, { Component } from 'react';
import styled from 'styled-components';
import BottomBarImg from '../../imgs/login_bottom_copyright.png'

class LoginBottom extends Component {

    state = {
        letters: [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ],
    first_name: '',
    last_name: ''
    }

    updateInfo = (event) => {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target })
    }

    render() {
        return (
            <Main>

                <Form>
                    <FindColleague>Find a colleague:</FindColleague>
                    <Input placeholder="First name" name="first_name" onChange={this.updateInfo}/>
                    <Input placeholder="Last name" name="last_name" onChange={this.updateInfo}/>
                    <SearchButton 
                    type="button"
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    >Search</SearchButton>
                </Form>

                <ABC> 
                LinkedIn member directory:
                {this.state.letters.map(letter => 
                 <Letter key={letter}>{letter}</Letter>
                )}
                <More>More</More>
                <Browse>Browse by country/region</Browse>
                </ABC>

                <Links>
                    <LinkBox>
                        <LinkBoxTitle>General</LinkBoxTitle>
                        <LinkBoxList>
                        <Link>Sign Up</Link>|
                        <Link>Help Center</Link>|
                        <Link>About</Link>|
                        <Link>Press</Link>|
                        <Link>Blog</Link>|
                        <Link>Careers</Link>|
                        <Link>Developers</Link>
                        </LinkBoxList>
                    </LinkBox>

                    <LinkBox>
                        <LinkBoxTitle>Business Solutions</LinkBoxTitle>
                        <LinkBoxList>
                        <Link>Talent</Link>|
                        <Link>Marketing</Link>|
                        <Link>Sales</Link>|
                        <Link>Learning</Link>
                        </LinkBoxList>
                    </LinkBox>

                    <LinkBox>
                        <LinkBoxTitle>Browse LinkedIn</LinkBoxTitle>
                        <LinkBoxList>
                        <Link>Learning</Link>|
                        <Link>Jobs</Link>|
                        <Link>Salary</Link>|
                        <Link>Mobile</Link>|
                        <Link>ProFinder</Link>
                        </LinkBoxList>
                    </LinkBox>

                    <LinkBox>
                        <LinkBoxTitle>Directories</LinkBoxTitle>
                        <LinkBoxList>
                        <Link>Members</Link>|
                        <Link>Jobs</Link>|
                        <Link>Companies</Link>|
                        <Link>Salaries</Link>|
                        <Link>Universities</Link>|
                        <Link>Top Jobs</Link>
                        </LinkBoxList>
                    </LinkBox>
                </Links>
                    
                    <BottomBar>
                        <Img src={BottomBarImg}/>
                        <Link>User Agreement</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Community Guidelines</Link>
                        <Link>Cookie Policy</Link>
                        <Link>Copyright Policy</Link>
                        <Link>Guest Controls</Link>
                        <Link>Language</Link>
                    </BottomBar>
            </Main>
        )
    }
}

export default LoginBottom;

//CSS//
const Main = styled.div`
width: 100%;
background-color: #434649;
display: flex;
flex-direction: column;
align-items: center;
`

const Form = styled.form`
display: flex;
align-items: center;
color: white;
font-size: 1.6rem;
margin-top: 3rem;

@media only screen and (max-width: 480px) {
  font-size: 1.2rem;
  overflow: hidden;
}
`
const FindColleague = styled.span`
@media only screen and (max-width: 480px) {
width: 5.2rem;
}
`

const Input = styled.input`
margin-left: 1rem;
width: 23.2rem;
height: 2.8rem;

@media only screen and (max-width: 480px) {
  width: 16rem;
  height: 2.52rem;
  font-size: 1.4rem;
}

@media only screen and (max-width: 360px) {
  margin-left: .5rem;
}
`

const SearchButton = styled.button`
border: none;
background-color: transparent;
width: 8.27rem;
height: 3.3rem;
font-size: 1.6rem;
color: ${props => props.first_name.length > 0 || props.last_name.length > 0 ? 'white' : 'rgba(255,255,255,0.35)'};
box-shadow: inset 0 0 0 .1rem ${props => props.first_name.length > 0 || props.last_name.length > 0 ? 'white' : 'rgba(255,255,255,0.35)'};
font-weight: 400;
margin-left: 1rem;
cursor: ${props => props.first_name.length > 0 || props.last_name.length > 0 ? 'pointer' : 'not-allowed'};
`

const ABC = styled.div`
display: flex;
align-items: center;
color: white;
font-size: 1.4rem;
font-weight: 400;
margin-top: 2rem;
flex-wrap: wrap;

@media only screen and (max-width: 480px) {
  font-size: 1rem;
  overflow: hidden;
}
`

const Letter = styled.div`
cursor: pointer;
margin-left: .75rem;
font-size: 1.4rem;
text-transform: uppercase;

@media only screen and (max-width: 480px) {
  font-size: 1.2rem;
}

&:hover {
text-decoration: underline;
}
`

const More = styled(Letter)`
text-transform: none;
`

const Browse = styled(More)`
margin-left: 2rem;

@media only screen and (max-width: 480px) {
    margin-left: 1rem;
}
`

const Links = styled.div`
margin: 2rem 0;
padding: 2rem 0;
border-top: 1px solid rgba(255,255,255,0.15);
border-bottom: 1px solid rgba(255,255,255,0.15);
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: center;
`

const LinkBox = styled.div`
display: flex;
flex-direction: column;
color: white;
font-size: 1.4rem;
width: 45%;
margin-bottom: 2rem;
`

const LinkBoxTitle = styled.div`

`

const LinkBoxList = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 1rem;
`

const Link = styled.div`
margin: 0 .7rem;
cursor: pointer;
color: white;
font-size: 1.4rem;
font-weight: 400;

&:hover{
    text-decoration: underline;
}

@media only screen and (max-width: 580px) {
font-size: 1.2rem;
}
`

const BottomBar = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 2rem;
width: 100%;
overflow: hidden;
`

const Img = styled.img`
margin-right: 2rem;
`