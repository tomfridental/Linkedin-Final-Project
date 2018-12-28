import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSelectedUserInfo, removeUserPageData } from './UserPgaeReduer/UserPage.action'
import Loader from '../../imgs/Loader'
import ProfileTop from './ProfileTop'
import Highlights from './Heighlights'
import Activity from './Activity'
import RightColum from './RightColum';
import BottomBar from './BottomBar'

class UserPage extends Component {

    componentDidMount() {
        this.props.getSelectedUserInfo(this.props.match.params.id)
    }

    async componentWillUpdate(prevState) {
        if (prevState.match.params.id !== this.props.match.params.id) {
            await this.props.getSelectedUserInfo(prevState.match.params.id)
        }
    }

    componentWillUnmount() {
        this.props.removeUserPageData()
    }

    render() {
        const { selectedUser, fetchDone, usersToFallow, userLastComments } = this.props.UserPageData
        const { user, auth } = this.props.loginData
        if(!auth){this.props.history.push('/')}
        if (fetchDone) {
            return (
                <Wrapper>
                    <Main>
                        <LeftColum>
                            <ProfileTop selectedUser={selectedUser} user={user}/>
                            <Highlights user={user} selectedUser={selectedUser} />
                            <Activity user={user} selectedUser={selectedUser} userLastComments={userLastComments}/>
                        </LeftColum>
                        {usersToFallow.length > 0 &&
                            <RightColum usersToFallow={usersToFallow} fetchDone={fetchDone} />
                        }
                    </Main>

                    <BottomBar />
                </Wrapper>
            )
        }
        else {
            return (
                <Loader />
            )
        }
    }
}

function mapStateToProps(state, ownProps) {

    const { loginData, UserPageData } = state;

    return {
        loginData,
        UserPageData
    }
}
function mapDispatchToProps(dispatch) {

    return {

        getSelectedUserInfo: (id) => dispatch(getSelectedUserInfo(id)),
        removeUserPageData: () => dispatch(removeUserPageData())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

//CSS//
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const Main = styled.div`
margin-top: 5.2rem;
width: 100%;
display: flex;
justify-content: center;
color: rgba(0,0,0, .6);
font-weight: 400;
font-size: 1.6rem;
background-color: #f5f5f5;
`

const LeftColum = styled.div`
width: 79.2rem;
`