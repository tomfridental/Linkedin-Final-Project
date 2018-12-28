import React, { Component } from 'react';
import styled from 'styled-components';



class LikesModal extends Component {

    state = {
        likesArr: []
    }

    hideModal = (e) => {
        if (!this.LikeModal.contains(e.target)) {
            this.props.displayModal()
            return;
        }
    }

    async componentDidMount() {
        document.addEventListener('mousedown', this.hideModal, false);
        try {
            let res = await fetch(`/api/user/likes/${this.props.postID}`);
            res = await res.json();
            this.setState({ likesArr: res })
        }
        catch (err) {
            console.log(err)
        }
    }


    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideModal, false);
    }

    render() {
        const { likesArr } = this.state
        return (
            <Wrapper>
                <Modal></Modal>
                <Main ref={LikeModal => this.LikeModal = LikeModal}>
                    <LikesHeader>
                        <CountDiv>{likesArr.length} Likes</CountDiv>
                        <CloseWindow onClick={() => this.props.displayModal()}>╳</CloseWindow>
                    </LikesHeader>
                    {likesArr && likesArr.map(like => <LikesList userInfo={like.userInfo} key={like.userID} />)}
                </Main>
            </Wrapper>
        )
    }
}

export default LikesModal;

//CSS//
const Wrapper = styled.div`

`

const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #000;
opacity: 0.75;
z-index: 1;
`

const Main = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 50rem;
background-color: white;
opacity: 1;
z-index: 4;
display: flex;
flex-direction: column;
font-size: 1.4rem;
color: rgba(0,0,0, .6);
font-weight: 400;
/* height: 60rem;
overflow: auto; */
`

const LikesHeader = styled.div`
width: 100%;
height: 5rem;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: .1rem solid rgba(0,0,0,.15);
`

const CloseWindow = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 0.5rem;
font-size: 1.8rem;
cursor: pointer;
width: 4rem;
height: 4rem;
border-radius: 50%;
color: rgba(0,0,0, .9);
font-weight: 600;

&:hover {
    background-color: rgba(207,207,207,.25);
}
`

const CountDiv = styled.div`
font-size: 2rem;
margin-left: 2rem;
`

///////////////////////////////////////////////////////////////////////////////////////////////////
class LikesList extends Component {



    render() {
        const { first_name, last_name, job_title, company_name, avatar } = this.props.userInfo
            return (
                <SingleLikeDiv>
                    <ImgDiv>
                        <Img src={avatar} />
                    </ImgDiv>
                    <UserNamAndTitle>
                        <UserName>{first_name} {last_name}</UserName>
                        <Title>{job_title} at {company_name}</Title>
                    </UserNamAndTitle>
                </SingleLikeDiv>

            )
        }
    }


const SingleLikeDiv = styled.div`
width: 100%;
height: 7rem;
display: flex;
align-items: center;
cursor: pointer;
`
const ImgDiv = styled.div`
width: 6rem;
height: 6rem;
display: flex;
align-items: center;
justify-content: center;
margin-left: 1rem;
`

const Img = styled.img`
width: 4.8rem;
height: 4.8rem;
border-radius: 50%;
`

const UserNamAndTitle = styled.div`
width: 100%;
height: 6rem;
margin-left: 1rem;
border-bottom: .1rem solid rgba(0,0,0,.15);
display: flex;
flex-direction: column;
justify-content: center;
`

const UserName = styled.div`
font-size: 1.8rem;
font-weight: 600;
color: rgba(0,0,0, .9);
`

const Title = styled.div`

`

