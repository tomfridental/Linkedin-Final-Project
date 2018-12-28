import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './ProfileTop';
import Mid from './ProfileMid';
import Bottom from './ProfileBottom'
import { connect } from 'react-redux';

class Profile extends Component {

    render() {

        const {user} = this.props.loginData
        
        return (
            <Main>
            <Top {...user}/>
            <Mid />
            <Bottom />
            </Main>
        )
    }
}

function mapStateToProps(state, ownProps) {

    const { loginData } = state;
  
    return {
      loginData
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
     
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Profile)

//CSS//
const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
border: 1px solid #929292;
border-top: none;
height: 29.3rem;
width: 21.6rem;
background-color: white;
position: relative;
`