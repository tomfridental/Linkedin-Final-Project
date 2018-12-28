import React, { Component } from 'react';
import styled from 'styled-components';
import Messaging from './Messaging';
import { connect } from 'react-redux';

class BottomBar extends Component {


    render() {

        const {auth, user} = this.props.loginData

        if (auth) {
            if (user.registrationWizard === 'done') {
                return (
                    <Wrapper>
                        <Messaging />
                    </Wrapper>
                )
            } 
            else {
                return <div></div>
            }
        }
        else {
            return (
                <div></div>
            )
        }
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
  export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)

//CSS//
const Wrapper = styled.div`
position: fixed;
bottom: 0;
height: 4.2rem;
display: flex;
flex-direction: row-reverse;
width: 100%;
z-index: 2;
`
