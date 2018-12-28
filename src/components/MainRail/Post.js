import React, { Component } from 'react';
import styled from 'styled-components';
import Social from './Post_Social';
import Profile from './Post_Profile';
import SocialCount from './Post_SocialCount';
import Imgs from './Post_Imgs';
import PostText from './Post_Post';
// import Ref from './Post_Ref';
import Comments from './Post_Comments';
import Loader from '../../imgs/Loader'

class Post extends Component {


        state = {
            doneLoading: false,
            showComments: false,
            showBeFirst: true,
            likesArr: [],
            commentsArr: [],
            userLikePost: false
        }

    showComments = () => {
        this.setState({ showComments: true, showBeFirst: false })
    }

    changeLikeStatus = () => {
        if (!this.state.userLikePost) {
            this.setState(prevState => ({ likesArr: [...prevState.likesArr, { userID: this.props.user._id }] }))
        } else {
            let newLikesArr = this.state.likesArr.filter(item => item.userID !== this.props.user._id)
            this.setState({ likesArr: newLikesArr })
        }
        this.setState(prevState => ({ userLikePost: !prevState.userLikePost }))
    }

    async componentDidMount() {
        await this.setState({ likesArr: this.props.likes, commentsArr: this.props.comments })
        let userLike = await this.state.likesArr.find(singleLike => { return singleLike.userID === this.props.user._id })
        if (userLike) { this.setState({ userLikePost: true }) }
        this.setState({ doneLoading: true })
    }

    render() {

        const { updateLike, text, updatedAt, allowComments, img, _id, uploadComment, uploadedComment, uploadSubComment, fetchComments} = this.props
        if (!this.state.doneLoading) {
            return (
                <Loader />
            )
        }
        else {

            return (
                <PostDiv>
                    {/* <Ref /> */}
                    <Profile {...this.props.postAuthUser} timeOfPost={updatedAt} />
                    <PostText post={text} />
                    {img && <Imgs img={img} />}
                    <SocialCount
                        // likesInfo={this.props.likesArr}
                        likesArr={this.state.likesArr}
                        commentCount={this.props.comments.length}
                        showComments={this.showComments}
                        postID={_id}
                    />
                    <Social
                        showComments={this.showComments}
                        changeLikeStatus={this.changeLikeStatus}
                        userLikePost={this.state.userLikePost}
                        updateLike={updateLike} 
                        postID={_id}
                        authorID={this.props.user._id}
                    />
                    {this.state.commentsArr.length === 0 && <BeFirst show={this.state.showBeFirst}>Be the first to comment on this</BeFirst>}
                    
                    {this.state.showComments && 
                    <Comments
                        allowComments={allowComments}
                        showComments={this.state.showComments}
                        uploadComment={uploadComment}
                        userID={this.props.user._id}
                        user={this.props.user}
                        userAvatar={this.props.user.avatar}
                        postID={_id}
                        uploadSubComment={uploadSubComment}
                        commentsArr={this.props.comments}
                        updateLike={updateLike}
                        uploadedComment={uploadedComment}
                        fetchComments={fetchComments}
                    />}
                </PostDiv>
            )
        }
    }
}

export default Post;

//CSS//
const PostDiv = styled.div`
width: 54.8rem;
background-color: #ffffff;
box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
margin-bottom: 1rem;
`

const BeFirst = styled.div`
width: 53.3;
height: 4rem;
display: ${props => props.show ? 'flex' : 'none'};
align-items: center;
background-color: #f3f6f8;
font-size: 1.2rem;
font-weight: 400;
color: rgb(0,0,0, .9);
padding-left: 1.5rem;
`