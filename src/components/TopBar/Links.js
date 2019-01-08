import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { withRouter } from 'react-router'

class Links extends Component {

    state = {
        activePage: 'Feed',
        showMenu: false
    }

    displayMenu() {
        this.setState(prevState => ({ showMenu: !prevState.showMenu }));
    }

    hideMenu() {
        this.setState({ showMenu: false })
    }

    render() {
        const { user, logUserOut } = this.props

        return (
            <Main>

                <LinkDiv onClick={() =>
                    this.props.history.push('/')}
                    name={'/feed'}
                    active={this.props.activePage}>
                    <i class="fas fa-home"></i>
                    <LinkText>Home</LinkText>
                </LinkDiv>


                <LinkDiv onClick={() =>
                    this.props.history.push('/mynetwork')}
                    name={'/mynetwork'}
                    active={this.props.activePage}>
                    <i class="fas fa-user-friends"></i>
                    <LinkText>My Network</LinkText>
                </LinkDiv>


                <LinkDiv onClick={() =>
                    this.props.history.push('/mynetwork')}
                    name={'/jobs'}
                    active={this.props.activePage}>
                    <i class="fas fa-briefcase"></i>
                    <LinkText>Jobs</LinkText>
                </LinkDiv>


                <LinkDiv onClick={() =>
                    this.props.history.push('/mynetwork')}
                    name={'/messaging'}
                    active={this.props.activePage}>
                    <i class="fas fa-comments"></i>
                    <LinkText>Messaging</LinkText>
                </LinkDiv>


                <LinkDiv onClick={() => this.props.history.push('/mynetwork')} name={'Notification'}><i class="fas fa-bell"></i><LinkText>Notification</LinkText></LinkDiv>

                <LinkMe onClick={this.displayMenu.bind(this)} ref={ClickMeRef => this.ClickMeRef = ClickMeRef}>
                    <img src={user.avatar} alt="s" />
                    <LinkTextMe>
                        Me <i class="fas fa-sort-down"></i>
                    </LinkTextMe>
                </LinkMe>
                {this.state.showMenu && <Menu user={user} show={this.state.showMenu} hideMenu={this.hideMenu.bind(this)} ClickMeRef={this.ClickMeRef}
                    logUserOut={logUserOut} />}

            </Main>
        )
    }
}

export default withRouter(Links);

//CSS//
const Main = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 48rem;
border-right: 1px solid #5c6f7c;
position: relative;

@media only screen and (max-width: 580px) {
width: 100%;
justify-content: center;
flex-wrap: wrap;
height: 6.2rem;
order: -1;
padding: 0 2rem;
}
`

const LinkDiv = styled.div`
height: 5.2rem;
width: 8rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.2rem;
cursor: pointer;
color: ${props => props.active === props.name ? 'white' : '#c7d1d8'};
text-decoration: none;
border-bottom: ${props => props.active === props.name ? '3px solid white' : 'none'};

    & i {
        font-size: 1.9rem;
        padding-top: 0.7rem;
        padding-bottom: 0.2rem;

        @media only screen and (max-width: 580px) {
        font-size: 3rem;
        }
    }

    &:hover {
        color: white;
    }

    &:visited{
        text-decoration: none;
    }

    &:active {
        text-decoration: none;
    }

@media only screen and (max-width: 580px) {
/* margin: 0 1.5rem; */
width: 16%;
}   
`

const LinkText = styled.div`
font-weight: 600;

@media only screen and (max-width: 1024px) {
display: none;
}
`

const LinkMe = styled(LinkDiv)`
justify-content: flex-start;
cursor: pointer;
border: none;


& img {
    border: 0.03rem solid white;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    margin-top: 0.9rem;

    @media only screen and (max-width: 580px) {
height: 3.6rem;
width: 3.6rem;
}
}

`

const LinkTextMe = styled(LinkText)`
    margin-top: 0.1rem;
    display: flex;
    align-items: flex-start;

    & i {
    font-size: 1.1rem; 
    padding: 0px 0px;
    padding-left: 3px;
    }

@media only screen and (max-width: 1024px) {
align-content: flex-start;
}
`

