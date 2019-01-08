import React, { Component } from 'react';
import styled from 'styled-components';
import Post from './Post'

class Feed extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
      }

     componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
      }

      onScroll = () => {
        let nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
        if (!this.props.fetchingPosts && this.props.auth && nearBottom) {
            this.props.getPosts();
        }
    }

    render() {
        const {posts, updateLike, user, uploadComment, uploadedComment, uploadSubComment, fetchComments} = this.props

        return (
            <Main ref={ (FeedsList) => this.FeedsList = FeedsList}>
                {user &&
              posts.map(item => <Post {...item} 
              key={item._id} 
              updateLike={updateLike} 
              user={user}
              uploadComment={uploadComment}
              uploadSubComment={uploadSubComment}
              uploadedComment={uploadedComment}
              fetchComments={fetchComments}
              />) }
            </Main>
        )
    }
}

export default Feed;

//CSS//
const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
border-bottom: none;
width: 100%;

@media only screen and (max-width: 580px) {
    align-items: flex-start;
    margin-top: 1.5rem;
    width: 99%;
}
`