import React, { Component } from 'react';
import styled from 'styled-components';
import LikesModal from './LikesModal'

class SocialCount extends Component {

    state = {
        showLikes: false
    }

    displayModal = () => {
        this.setState(prevState => ({ showLikes: !prevState.showLikes }))
    }


    render() {

        const { likesArr, commentCount, showComments,postID} = this.props

        return (
            <Main>
                <SocBox>
                    <SocButton onClick={this.displayModal}>{likesArr.length} Likes</SocButton> •
                    <SocButton onClick={() => showComments()}>{commentCount} Comments</SocButton>
                </SocBox>
                {this.state.showLikes && 
                <LikesModal
                    displayModal={this.displayModal}
                    postID={postID}
                />}
            </Main>
        )
    }
}

export default SocialCount;

//CSS//
const Main = styled.div`
display: flex;
width: 100%;
height: 3.5rem;
border-top: none;
background-color: #ffffff;
position: relative;
`

const SocBox = styled.div`
display: flex;
align-items: center;
margin-left: 1rem;
`

const SocButton = styled.div`
font-size: 1.2rem;
color: rgba(0,0,0,.6);
padding: .2rem .7rem;
cursor: pointer;
text-decoration: none;
font-weight: 600;

&:hover{
    color: #0073b1;
    text-decoration: underline;
}
`