import React, { Component } from 'react';
import styled from 'styled-components';
import AddToFeed from './AddToFeed';
import SmallLinks from './SmallLinks';
import { connect } from 'react-redux';
const API_URL = process.env.REACT_APP_API_URL

class RightRail extends Component {

    state = {
        usersArr: [],
        // fetchDone: false
    }

    async componentDidMount() {
        try {
            let res = await fetch(`${API_URL}/api/user/userstofallow/${this.props.loginData.user._id}?limit=3`);
            res = await res.json();
            this.setState({ usersArr: res.users })
        } catch (err) {
            console.log(err)
        }
    }

    render() {

        return (
            <Main>
                <AddToFeed usersArr={this.state.usersArr}/>
                <SmallLinks />
            </Main>
        )
    }
}

function mapStateToProps(state, ownProps) {

    const { loginData,feedData } = state;
  
    return {
      loginData,
      feedData
    }
  }
  function mapDispatchToProps(dispatch) {

    return {
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(RightRail)

//CSS//
const Main = styled.div`
display: flex;
flex-direction: column;
min-width: 30rem;
margin-top: 5.2rem;
background-color: #f5f5f5;
position: relative;

@media only screen and (max-width: 580px) {
    display: none;
}
`

