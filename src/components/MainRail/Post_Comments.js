import React, { Component } from 'react';
import styled from 'styled-components';
import LikesModal from './LikesModal'
import SubComment from './SubComment';
import { Link } from 'react-router-dom';

class Comments extends Component {

    state = {
        text: '',
        commentsArr: []

    }

    sendLiketoServer = async (commentID) => {
        let likeData = {}
        likeData.targetClass = 'Comment';
        likeData.targetID = commentID;
        likeData.userID = this.props.userID
        await this.props.updateLike(JSON.stringify(likeData))
    }

    updateInfo = (event) => {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target })
    }

    sendComment = async () => {
        let newComment = {};
        newComment.text = this.state.text
        newComment.userID = this.props.userID;
        newComment.targetID = this.props.postID;
        let newCommentJson = JSON.stringify({ ...newComment })
        await this.props.uploadComment(newCommentJson)
        this.setState({ text: '' });
    }

    async componentDidMount() {
        this.props.fetchComments(this.props.postID)
    }



    render() {
        const { allowComments, showComments, userID, user, uploadSubComment, commentsArr } = this.props

        if (!allowComments) {
            return (
                <Main show={showComments}>
                    <PostDisabled>User disabled comments on this post.</PostDisabled>
                </Main>
            )
        }
        else {
            return (
                <Main show={showComments}>
                    <AddComment>
                        <AddCommentBox>
                            <Avatar src={this.props.userAvatar} />
                            <InputDiv>
                                <Input
                                    type="text"
                                    name="text"
                                    placeholder="Add a comment..."
                                    value={this.state.text}
                                    onChange={this.updateInfo}
                                />
                                <Photo><i class="fas fa-camera"></i></Photo>
                                <SendButton
                                    input={this.state.text.length}
                                    onClick={this.sendComment}
                                    type="button">Post</SendButton>
                            </InputDiv>
                        </AddCommentBox>
                    </AddComment>

                    <ComDiv>
                        {commentsArr.map(comment =>
                            comment.userInfo &&
                            <SingleComment comment={comment}
                                userID={userID}
                                user={user}
                                key={comment._id}
                                sendLiketoServer={this.sendLiketoServer}
                                uploadSubComment={uploadSubComment}
                            />
                        )}
                    </ComDiv>
                </Main>
            )
        }
    }
}

export default Comments;

//CSS//

// User Comment //
const Main = styled.div`
display: ${props => props.show ? 'flex' : 'none'};
flex-direction: column;
width: 100%;
background-color: #f3f6f8;
`

const AddComment = styled.div`
display: flex;
width: 100%;
/* height: 5rem; */
`

const AddCommentBox = styled.div`
display: flex;
width: 100%;
margin-top: 1rem;
position: relative;
`

const Avatar = styled.img`
height: 3rem;
width: 3rem;
border-radius: 50%;
margin-left: 2rem;
`
const InputDiv = styled.div`
width: 100%;
display: flex;
margin-left: 1rem;
margin-right: 2rem;
flex-direction: column;
margin-bottom: .5rem;
`

const Input = styled.input`
height: 3rem;
width: 100%;
border: none;
display: flex;
align-items: center;
padding-left: .5rem;
font-size: 1.2rem;
color: rgba(0,0,0,.6);
font-weight: 400;

&:focus{
  outline: none;
}
`
const Photo = styled.div`
position: absolute;
top: 0rem;
right: 2.5rem;
padding: 0.3rem;
font-size: 1.8rem;
color: rgba(0,0,0,.6);

cursor: pointer;

&:hover{
    color: #0073b1;
}
`

// Other's Comments //
const ComDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const ComBox = styled.div`
display: flex;
margin-top: 1.5rem;
align-items: flex-start;
padding: 0 1rem;
width: 100%;
position: relative;
`

const ComAvatar = styled.img`
height: 3rem;
width: 3rem;
border-radius: 50%;
cursor: pointer;
`

const ComMain = styled.div`
margin-left: 1rem;
width: 41.5rem;
border: none;
display: flex;
flex-direction: column;
padding-left: .5rem;
font-size: 1.2rem;
color: rgba(0,0,0,.6);
font-weight: 400;
margin-right: 1rem;
`

const ComUser = styled.div`
width: 100%;
color: rgba(0,0,0,.9);
font-size: 1.2rem;
font-weight: 600;
/* padding: 0.2rem 0; */
cursor: pointer;

&:hover {
    text-decoration: underline;
    color: #0073b1;
}
`
const ComTitle = styled.div`
width: 100%;
font-size: 1.2rem;
font-weight: 400;
color: rgba(0,0,0,.6);
`
const ComText = styled(ComTitle)`
margin-top: .8rem;
color: black;
`
const ComLikesCount = styled.div`
cursor: pointer;
color: black;

&:hover{
    text-decoration: underline;
    color: #0073b1;
}
`

const ComSocialDiv = styled.div`
width: 100%;
color: rgba(0,0,0,.9);
font-size: 1.2rem;
font-weight: 600;
padding: 0.2rem 0;
display: flex;
align-items: center;
`
const ComSocial = styled.div`
color: rgba(0,0,0,.6);
font-weight: 600;
margin-right: 1.25rem;
font-size: 1.3rem;
cursor: pointer;

&:hover {
    text-decoration: underline;
    color: #0073b1;
}
`

const ComSocialLike = styled(ComSocial)`
color: ${props => props.userLike ? '#0073b1' : 'rgba(0,0,0,.6)'};
`

const ComTime = styled.div`
align-self: flex-start;
display: flex;
justify-content: center;
align-items: center;
height: 2rem;
width: 2rem;
margin-right: 1rem;
`
const ComReport = styled(ComTime)`
cursor: pointer;
`

const PostDisabled = styled.div`
width: 53.3;
height: 4rem;
display: flex;
align-items: center;
background-color: #f3f6f8;
font-size: 1.2rem;
font-weight: 400;
color: rgb(0,0,0, .9);
padding-left: 1.5rem;
`
const SendButton = styled.button`
display: ${props => props.input === 0 ? 'none' : 'flex'};
justify-content: center;
align-items: center;
width: 6rem;
height: 2.6rem;
border-radius: .1rem;
background-color: #0073b1;
color: white;
border: none;
margin: .5rem 0;
cursor: pointer;

&:hover{
    background-color: #006097;
}
`

class SingleComment extends Component {
    state = {
        userLikeComment: false,
        likesArr: [],
        showModal: false,
        showNewCommentBox: false
    }

    componentDidMount() {
        let userLike = this.props.comment.likes.find(singleLike => { return singleLike.userID === this.props.userID })
        if (userLike) {
            this.setState({ userLikeComment: true })
        }
        this.setState({ likesArr: this.props.comment.likes })
    }

    changeLikeStatus = () => {
        if (!this.state.userLikeComment) {
            this.setState(prevState => ({ likesArr: [...prevState.likesArr, { userID: this.props.userID }] }))
        } else {
            let newLikesArr = this.state.likesArr.filter(item => item.userID !== this.props.userID)
            this.setState({ likesArr: newLikesArr })
        }
        this.setState(prevState => ({ userLikeComment: !prevState.userLikeComment }))
    }

    likeClicked = async () => {
        await this.props.sendLiketoServer(this.props.comment._id);
        this.changeLikeStatus()
    }

    displayModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }))
    }

    addNewComment = () => {
        this.setState({ showNewCommentBox: true })
    }

    render() {
        const { comment, user, uploadSubComment, sendLiketoServer } = this.props
        return (
            <Wrapper>
                <ComBox key={comment._id}>
                    <Link to={`/user/${comment.userInfo._id}`} style={{ textDecoration: 'none' }}>
                        <ComAvatar src={comment.userInfo.avatar} />
                    </Link>
                    <ComMain>
                        <Link to={`/user/${comment.userInfo._id}`} style={{ textDecoration: 'none' }}>
                            <ComUser>{comment.userInfo.first_name} {comment.userInfo.last_name}</ComUser>
                        </Link>
                        <ComTitle>{comment.userInfo.job_title} at {comment.userInfo.company_name}</ComTitle>
                        <ComText>{comment.text}</ComText>
                        <ComSocialDiv>
                            <ComSocialLike
                                onClick={this.likeClicked}
                                userLike={this.state.userLikeComment}>
                                Like</ComSocialLike>
                            <ComSocial onClick={this.addNewComment}>Reply</ComSocial>
                            {this.state.likesArr.length > 0 &&
                                <ComLikesCount onClick={this.displayModal}>{this.state.likesArr.length} Likes</ComLikesCount>}
                            {this.state.showModal &&
                                <LikesModal
                                    displayModal={this.displayModal}
                                    postID={comment._id}
                                />}
                        </ComSocialDiv>

                    </ComMain>
                    <ComTime>{comment.createdAt}</ComTime>
                    <ComReport><i class="fas fa-ellipsis-h"></i></ComReport>
                </ComBox>

                <SubComment
                    user={user}
                    postID={comment.targetID}
                    commentID={comment._id}
                    subCommentsArray={comment.subComments}
                    uploadSubComment={uploadSubComment}
                    showNewCommentBox={this.state.showNewCommentBox}
                    sendLiketoServer={sendLiketoServer}
                    addNewComment={this.addNewComment}
                />
            </Wrapper>
        )
    }
}

//CSS
const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 `