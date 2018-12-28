import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LikesModal from './LikesModal'

class SubComment extends Component {

    state = {
        text: '',
        commentsArr: []

    }

    updateInfo = (event) => {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target })
    }

    sendComment = async () => {
        let newComment = {};
        newComment.text = this.state.text
        newComment.userID = this.props.user._id;
        newComment.targetID = this.props.commentID;
        newComment.parentID = this.props.postID;
        let newCommentJson = JSON.stringify({ ...newComment })
        await this.props.uploadSubComment(newCommentJson)
        this.setState({ text: '' });
    }

    render() {
        const { user, subCommentsArray, showNewCommentBox, addNewComment, sendLiketoServer } = this.props

        return (
            <div>

                {subCommentsArray && subCommentsArray.length > 0 && subCommentsArray.map(comment =>
                    <SingleSubComment
                        comment={comment}
                        addNewComment={addNewComment}
                        userID={user._id}
                        key={comment._id}
                        sendLiketoServer={sendLiketoServer}
                    />
                )
                }
                {showNewCommentBox &&
                    <AddComment>
                        <AddCommentBox>
                            <Avatar src={user.avatar} />
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
                }
            </div>


        )
    }
}

export default SubComment;

//CSS

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
margin-left: 4rem;
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

const ComBox = styled.div`
display: flex;
margin-top: 1.5rem;
align-items: flex-start;
width: 100%;
position: relative;
`

const ComAvatar = styled.img`
margin-left: 6rem;
height: 3rem;
width: 3rem;
border-radius: 50%;
cursor: pointer;
`

const ComMain = styled.div`
margin-left: 1rem;
width: 100%;
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
margin-right: 2rem;
`


class SingleSubComment extends Component {

    state = {
        userLikeComment: false,
        likesArr: [],
        showModal: false
    }

    componentDidMount() {
        let userLike = this.props.comment.likes.find(singleLike => { return singleLike.userID === this.props.userID })
        if (userLike) {
            this.setState({ userLikeComment: true })
        }
        this.setState({ likesArr: this.props.comment.likes })
    }

    displayModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }))
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

    render() {

        const { comment, addNewComment } = this.props

        return (
            <ComBox key={comment._id}>
                <Link to={`/user/${comment.subUserInfo._id}`} style={{ textDecoration: 'none' }}>
                    <ComAvatar src={comment.subUserInfo.avatar} />
                </Link>
                <ComMain>
                    <Link to={`/user/${comment.subUserInfo._id}`} style={{ textDecoration: 'none' }}>
                        <ComUser>{comment.subUserInfo.first_name} {comment.subUserInfo.last_name}</ComUser>
                    </Link>
                    <ComTitle>{comment.subUserInfo.job_title} at {comment.subUserInfo.company_name}</ComTitle>
                    <ComText>{comment.text}</ComText>
                    <ComSocialDiv>
                        <ComSocialLike
                            onClick={this.likeClicked}
                            userLike={this.state.userLikeComment}>
                            Like</ComSocialLike>
                        <ComSocial onClick={() => addNewComment()}>Reply</ComSocial>
                        {this.state.likesArr.length > 0 &&
                            <ComLikesCount
                            onClick={this.displayModal}
                            >
                                {this.state.likesArr.length} Likes</ComLikesCount>}
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
        )
    }
}