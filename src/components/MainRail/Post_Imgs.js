import React, { Component } from 'react';
import styled from 'styled-components';

class Imgs extends Component {
    
    state ={
        showModal: false
    }

    displayModal = () => {
        this.setState(prevState => ({showModal: !prevState.showModal}))
    }

    render() {
        return (
            <Main>
                <ImgBox onClick={this.displayModal}>
                    <Img img={this.props.img}> </Img>
                </ImgBox>
                {this.state.showModal && <ImgModal displayModal={this.displayModal} img={this.props.img}/>}
            </Main>
        )
    }
}

export default Imgs;

//CSS//
const Main = styled.div`
width: 100%;
background-color: #ffffff;
`

const ImgBox = styled.div`
padding: 0.1rem;
`

const Img = styled.div`
width: 100%;
height: 34rem;
background-image: url("${props => props.img}");
background-position: center;
background-size: cover;
cursor: pointer;
`

class ImgModal extends Component {

    componentDidMount() {
        document.addEventListener('mousedown', this.hideModal, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideModal, false);
    }

    hideModal = (e) => {
        if (!this.ImgModal.contains(e.target)) {
            this.props.displayModal()
            return;
        }
    }

    render(){
        return(
            <ModalWrapper>
                <Modal></Modal>
                <CloseWindow onClick={() => this.props.displayModal()}>╳</CloseWindow>
                <ModalMain ref={ImgModal => this.ImgModal = ImgModal}>
                <ModalImg src={this.props.img}/>
                </ModalMain>
            </ModalWrapper>
        )
    }
}

//CSS//
const ModalWrapper = styled.div`

`

const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #000;
opacity: 0.75;
z-index: 3;
`

const ModalMain = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
opacity: 1;
z-index: 4;
display: flex;
flex-direction: column;
font-size: 1.4rem;
color: rgba(0,0,0, .6);
font-weight: 400;
`

const ModalImg = styled.img`
max-width: 140rem;
max-height: 60rem;
`

const CloseWindow = styled.div`
position: fixed;
top: 5rem;
right: 5rem;
display: flex;
justify-content: center;
align-items: center;
margin-right: 0.5rem;
font-size: 1.8rem;
cursor: pointer;
width: 5rem;
height: 5rem;
border-radius: 50%;
color: white;
font-weight: 600;
z-index: 4;

&:hover {
    background-color: rgba(207,207,207,.25);
}
`
