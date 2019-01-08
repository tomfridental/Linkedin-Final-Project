import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './NewPostModal';

class NewPost extends Component {

    state = {
        showPostWindow: false,
        img: null
    }

    showModal() {
        this.setState(prevState => ({ showPostWindow: !prevState.showPostWindow }));
    }

    uploadImg = (event) => {
        const file = event.target.files[0]        
        if (!file) {
            return
        }

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () =>  this.setState({ img: file, showPostWindow: true})
    }

    nullUploadedImg = () => {
        this.setState({img: null})
    }


    render() {

        const { user, uploadPost, postSaved, removePostMsg } = this.props

        return (
            <Main>
                <StartPost>
                    <Post onClick={this.showModal.bind(this)}><i class="far fa-edit"></i> <p>Start a post</p></Post>
                    <Photo>
                        <i class="fas fa-camera"></i>
                        <UploadPhoto type="file" name="photo_upload" accept="image/png, image/jpeg" onChange={this.uploadImg}/>
                    </Photo>
                    <Video>
                        <i class="fas fa-video"></i>
                        <UploadPhoto type="file" name="video_upload" accept="image/png, image/jpeg"/>
                    </Video>
                </StartPost>
                <WriteArticle><A>Write an article</A> on LinkedIn</WriteArticle>
                {this.state.showPostWindow && 
                <Modal 
                showModal={this.showModal.bind(this)} 
                user={user} 
                uploadPost={uploadPost} 
                postSaved={postSaved} 
                removePostMsg={removePostMsg} 
                img={this.state.img}
                nullUploadedImg={this.nullUploadedImg}
                />}
            </Main>
        )
    }
}

export default NewPost;

//CSS//
const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
position: relative;
width: 54.8rem;
background-color: white;
box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);

@media only screen and (max-width: 580px) {
    width: 98%;
    margin-left: -.5rem;
}
`
const StartPost = styled.div`
width: 100%;
height: 7.3rem;
border: 1px solid #cfd1d3;
border-top: none;
display: flex;
`

const Post = styled.div`
height: 100%;
width: 40.5rem;
display: flex;
align-items: center;
cursor: pointer;
color: #696c6f;
font-size: 1.6rem;
font-weight: 600;

& i{
    margin-left: 1.8rem;
    margin-right: 0.7rem;
    font-size: 1.8rem;
    text-decoration: none;
}

&:hover p{
text-decoration: underline;
color: #0073b1;
}

&:hover i{
color: #0073b1;
}

@media only screen and (max-width: 580px) {
    width: 100%;
}
`

const Photo = styled.label`
height: 100%;
width: 7.15rem;
display: flex;
align-items: center;
cursor: pointer;
justify-content: center;
border-left: 1px solid #cfd1d3;
color: #696c6f;
position: relative;

& i {
    font-size: 2rem;
}

&:hover{
    background-color: #f3f6f8;
    color: black;
}
`

const Video = styled(Photo)`
width: 7.15rem;
`

const WriteArticle = styled.div`
width: 100%;
height: 4.3rem;
background-color: #f3f6f8;
border: 1px solid #cfd1d3;
border-top: none;
display: flex;
align-items: center;
font-size: 1.4rem;
color: rgba(0,0,0,.6);
font-weight: 400;

@media only screen and (max-width: 580px) {
    display: none;
}
`

const A = styled.a`
color: #0073b1;
cursor: pointer;
font-weight: 600;
margin-left: 1.8rem;
margin-right: 0.3rem;

&:hover{
    text-decoration: underline;
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