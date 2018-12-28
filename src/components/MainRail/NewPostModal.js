import React, { Component } from 'react';
import styled from 'styled-components';
import Loader from '../../imgs/Loader'

class NewPostModal extends Component {

    state = {
        showAdvanced: false,
        allowComments: true,
        secoundStage: false,
        showLoader: false,
        viewBy: 'anyone',
        text: '',
        img: ''
    }

    imgData = null

    updateInfo = (event) => {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target })
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.hideModal, false);
        if (this.props.img) {
            // this.setState({ img: this.props.img })
            const reader = new FileReader()
            reader.readAsDataURL(this.props.img)
            reader.onloadend = () => this.setState({ img: reader.result})
            this.imgData = this.props.img;
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideModal, false);
        this.props.nullUploadedImg()
        this.props.removePostMsg()

    }

    hideModal = (e) => {
        if (!this.PostModal.contains(e.target)) {
            this.props.showModal()
            return;
        }
    }

    addHash = () => {
        let newState = this.state.text
        newState += ' #'
        this.setState({ text: newState })
    }

    displayNextStep = () => {
        if (this.state.text.length > 0) {
            this.setState(prevState => ({ secoundStage: !prevState.secoundStage }));
        }
    }

    displayAdvanded = () => {
        this.setState(prevState => ({ showAdvanced: !prevState.showAdvanced }));
    }

    allowCommentsOnPage = () => {
        this.setState(prevState => ({ allowComments: !prevState.allowComments }));
    }

    publishPost = async () => {
        this.setState({ showLoader: true, secoundStage: true })
        let newComment = this.state;
        delete newComment.showAdvanced;
        delete newComment.secoundStage;
        delete newComment.showLoader;
        delete newComment.img;

        newComment.userID = this.props.user._id
        const commentJson = JSON.stringify({ ...newComment })

        let data = new FormData();
        data.append('img', this.imgData)
        data.append('text', commentJson)

        await this.props.uploadPost(data);
    }

    uploadImg = (event) => {
        const file = event.target.files[0]
        if (!file) {
            return
        }

        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = e => this.setState({ img: reader.result })
        this.imgData = file;
    }

    render() {
        
        const { avatar } = this.props.user
        if (this.props.postSaved) { this.props.showModal() }


        if (!this.state.secoundStage) {
            return (
                <div>
                    <Modal>
                    </Modal>
                    <PostBox ref={PostModal => this.PostModal = PostModal}>
                        <Header>
                            <ImgBox><Img src={avatar} /></ImgBox>
                            <CloseWindow onClick={() => this.props.showModal()}>╳</CloseWindow>
                        </Header>

                        <TextArea name="text" id="message" value={this.state.text} placeholder="What do you want to talk about?" onChange={this.updateInfo}>
                        </TextArea>
                        <ImgDiv>
                            <PostImg src={this.state.img} />
                        </ImgDiv>
                        <HashtagDiv>
                            <HashtagButton onClick={this.addHash}>+ Add hashtag</HashtagButton>
                            <HashtagText>Help the right people see your post</HashtagText>
                        </HashtagDiv>
                        <SocialDiv>
                            <Social>
                                <SocialLabel>
                                    <i class="fas fa-camera"></i>
                                    <UploadPhoto type="file"
                                        onChange={this.uploadImg}
                                        accept="image/png, image/jpeg" name="post_img" />
                                </SocialLabel>
                                <i class="fas fa-video"></i>
                                <i class="fas fa-award"></i>
                            </Social>
                            <Button onClick={this.displayNextStep} value={this.state.text.length}>Next</Button>
                        </SocialDiv>
                    </PostBox>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Modal>
                    </Modal>
                    <PostBox ref={PostModal => this.PostModal = PostModal}>
                        <ReviewHeader> <span>Review your post</span> </ReviewHeader>
                        <ReviewSmallHeader><span>Who can see this post?</span> </ReviewSmallHeader>

                        <OptionDiv name={'anyone'} selected={this.state.viewBy}
                            onClick={() => this.setState({ viewBy: 'anyone' })}>
                            <i class="fas fa-globe-americas"></i>
                            <OptionText><span>Anyone</span><VDiv name={'anyone'}
                                selected={this.state.viewBy}>✓</VDiv></OptionText>
                        </OptionDiv>

                        <OptionDiv name={'twitter'} selected={this.state.viewBy}
                            onClick={() => this.setState({ viewBy: 'twitter' })}>
                            <i class="fas fa-globe-americas"></i>
                            <OptionText><span>Anyone + Twitter</span><VDiv name={'twitter'}
                                selected={this.state.viewBy}>✓</VDiv></OptionText>
                        </OptionDiv>

                        <OptionDiv name={'conections'} selected={this.state.viewBy}
                            onClick={() => this.setState({ viewBy: 'conections' })}>
                            <i class="fas fa-user-friends"></i>
                            <OptionText><span>Connections only</span><VDiv name={'conections'}
                                selected={this.state.viewBy}>✓</VDiv></OptionText>
                        </OptionDiv>

                        <OptionDiv name={'groups'} selected={this.state.viewBy}
                            onClick={() => this.setState({ viewBy: 'groups' })}>
                            <i class="fas fa-users"></i>
                            <OptionText><span>Group Name to be inserted Here</span><VDiv name={'groups'}
                                selected={this.state.viewBy}>✓</VDiv></OptionText>
                        </OptionDiv>

                        <AdvancedOptions onClick={this.displayAdvanded}>
                            <AdvancedOptionsButton flip={this.state.showAdvanced}>Advanced settings
                                <i class="fas fa-angle-down"></i>
                            </AdvancedOptionsButton>
                        </AdvancedOptions>
                        <AllowComment show={this.state.showAdvanced}>
                            <AllowText show={this.state.showAdvanced}>Allow comments on this post</AllowText>
                            <AllowButtonDiv show={this.state.showAdvanced}>
                                {this.state.allowComments && 'On'}
                                {!this.state.allowComments && 'Off'}
                                <AllowButton switch={this.state.allowComments} onClick={this.allowCommentsOnPage}>
                                    <AllowButtonSpan switch={this.state.allowComments}></AllowButtonSpan>
                                </AllowButton>
                            </AllowButtonDiv>

                        </AllowComment>
                        <ButtonsDiv>
                            <BackButton onClick={this.displayNextStep}>Back</BackButton>
                            <PostButton onClick={this.publishPost}>{this.state.showLoader && <Loader />}Post</PostButton>

                        </ButtonsDiv>
                    </PostBox>

                </div>
            )
        }
    }
}

export default NewPostModal;

//CSS//
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

const PostBox = styled.div`
position: absolute;
top: 0;
width: 100%;
background-color: white;
opacity: 1;
z-index: 4;
display: flex;
flex-direction: column;
`

const Header = styled.div`
width: 100%;
height: 4.8rem;
background-color: #0073b1;
display: flex;
justify-content: flex-end;
align-items: center;
color: white;
`

const CloseWindow = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 2rem;
font-size: 1.8rem;
cursor: pointer;
width: 4rem;
height: 4rem;
border-radius: 50%;

&:hover {
    background-color: rgba(152,216,244,.25);
}
`

const ImgBox = styled.div`
width: 5rem;
height: 5rem;
position: absolute;
left: 50%;
transform: translate(-50%, 0);
background-color: white;
border-radius: 50%;
top: 2.4rem;
display: flex;
justify-content: center;
align-items: center;
box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15);
`

const Img = styled.img`
width: 4.5rem;
height: 4.5rem;
border-radius: 50%;
`
const TextArea = styled.textarea`
color: #84878a;
border: none;
/* flex-grow: 1; */
min-height: 10rem;
max-height: 20rem;
font-size: 1.8rem;
display: flex;
padding: 3.5rem 2rem;
resize: none;
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Fira Sans",Ubuntu,Oxygen,"Oxygen Sans",Cantarell,"Droid Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Emoji","Segoe UI Symbol","Lucida Grande",Helvetica,Arial,sans-serif;

&:focus{
  outline: none;
}
`

const ImgDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: .2rem;
`

const PostImg = styled.img`
cursor: pointer;
max-width: 100%;
max-height: 30rem;
`

const HashtagDiv = styled.div`
width: 100%;
height: 4rem;
border-top: 1px solid #e6e9ec;
display: flex;
align-items: center;
`

const HashtagButton = styled.button`
border: none;
padding: .3rem .7rem;
margin-left: 2rem;
color: rgba(0,0,0,.6);
font-size: 1.4rem;
font-weight: 600;
background-color: white;
cursor: pointer;
height: 2rem;

&:hover{
    background-color: rgba(207,207,207,.25);
    color: rgba(0,0,0,.75); 
}

&:focus{
  outline: none;
}
`

const HashtagText = styled.div`
color: rgba(0,0,0,.6);
font-size: 1.4rem;
margin-left: 1.5rem;
padding: .3rem;
`

const SocialDiv = styled(HashtagDiv)`
height: 6rem;
display: flex;
align-items: center;
justify-content: space-between;
`
const Social = styled.div`
margin-left: 2rem;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.8rem;

& i{
 margin-right: 1rem;
 cursor: pointer;
 padding: 1rem;
 border-radius: 50%;

 &:hover {
background-color: rgba(207,207,207,.25); 
 }
}
`

const SocialLabel = styled.label`

`

const Button = styled.button`
width: 6rem;
height: 3rem;
color: white;
border: none;
background-color: #0073b1;
opacity: ${props => props.value === 0 ? '0.3' : '1'};
margin-right: 2rem;
cursor: ${props => props.value === 0 ? 'not-allowed' : 'pointer'};

&:hover{
    background-color: #006097
}
`

const ReviewHeader = styled(Header)`
justify-content: flex-start;
font-size: 1.8rem;
font-weight: 600;

& span {
    margin-left: 2rem;
}
`

const ReviewSmallHeader = styled(ReviewHeader)`
background-color: #f3f6f8;
color: rgba(0,0,0, .6);
font-size: 1.6rem;
font-weight: 400;
`

const OptionDiv = styled.div`
color: ${props => props.selected === props.name ? '#0084bf' : 'rgba(0,0,0, .6)'};
width: 100%;
height: 5rem;
background-color: white;
display: flex;
align-items: center;
cursor: pointer;

& i {
    width: 3rem;
    font-size: 2rem;
    margin-left: 2rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

&:hover {
    background-color: #f3f6f8;
}
`

const OptionText = styled.div`
width: 100%;
height: 4.9rem;
font-size: 1.4rem;
font-weight: 600;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: .1rem solid rgba(0,0,0,.15);
`

const VDiv = styled.div`
display: ${props => props.selected === props.name ? 'flex' : 'none'};
margin-right: 2rem;
font-size: 2.2rem;
`
const AdvancedOptions = styled.div`
width: 100%;
height: 5rem;
background-color: rgba(207,207,207,.25);
color: rgba(0,0,0, .6);
border-bottom: 1px solid rgba(0,0,0,.15);
display: flex;
align-items: center;
cursor: pointer;
`

const AdvancedOptionsButton = styled.div`
margin-left: 2rem;
font-size: 1.4rem;
font-weight: 600;
display: flex;

& i{
    font-size: 1.8rem;
    margin-left: 1rem;
    margin-top: 0.2rem;
    transform: ${props => props.flip ? 'rotate(180deg)' : 'rotate(0deg)'};
}
`

const AllowComment = styled.div`
width: 100%;
height: ${props => props.show ? '5rem' : '2.5rem'};
background-color: white;
border-bottom: 1px solid rgba(0,0,0,.15);
display: flex;
justify-content: space-between;
align-items: center;
`

const AllowText = styled.div`
margin-left: 2rem;
font-size: 1.4rem;
color: rgba(0,0,0, .6);
font-weight: 600;
display: ${props => props.show ? 'flex' : 'none'};
`

const AllowButtonDiv = styled.div`
margin-right: 2rem;
display: ${props => props.show ? 'flex' : 'none'};
align-items: center;
font-size: 1.4rem;
color: rgba(0,0,0, .6);
`

const AllowButton = styled.div`
margin-left: 1rem;
width: 4.8rem;
height: 3rem;
background-color: ${props => props.switch ? '#0073b1' : 'grey'};
cursor: pointer;
border-radius: 3.4rem;
display: flex;
justify-content: ${props => props.switch ? 'flex-end' : 'flex-start'};
align-items: center;
padding: 0 0.2rem;
`

const AllowButtonSpan = styled.span`
width: 2.6rem;
height: 2.8rem;
background-color: white;
border-radius: 50%;
`

const ButtonsDiv = styled.div`
width: 100%;
height: 6rem;
background-color: white;
display: flex;
justify-content: flex-end;
align-items: center;
`

const PostButton = styled(Button)`
font-size: 1.5rem;
font-weight: 600;
position: relative;
`

const BackButton = styled(PostButton)`
background-color: white;
color: #0084bf;
box-shadow: inset 0 0 0 .1rem #0084bf;
margin-right: 1rem;

&:hover {
    background-color: rgba(152,216,244,.25);
    color: #006097;
    box-shadow: inset 0 0 0 .2rem #006097;
}
`

const UploadPhoto = styled.input`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-25%, -25%);
pointer-events: none;
width: 1px;
height: 1px;
opacity: 0;
`


