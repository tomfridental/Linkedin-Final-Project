import React, { Component } from 'react';
import styled from 'styled-components';

class PostText extends Component {

    render() {
        return (
            <Main>
                <PostBox>
                    {this.props.post}
                </PostBox>
            </Main>
        )
    }
}

export default PostText;

//CSS//
const Main = styled.div`
width: 100%;
background-color: #ffffff;
display: flex;
align-items: center;
`

const PostBox = styled.div`
width: 100%;
padding: 1rem;
display: flex;
align-items: center;
font-size: 1.4rem;
color: rgba(0,0,0,.9);
font-weight: 400;
`