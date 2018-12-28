import React, { Component } from 'react';
import styled from 'styled-components';


class Social extends Component {

    state = {
        display: false,
        showTopComments: false,
        sortBy: 'Top',
        postLike: false
    }

    displayHidden(){
        this.setState({ showTopComments: true });
        this.props.showComments();
    }

    displayWindow(){
        this.setState(prevState => ({display: !prevState.display})) 
    }

    changeDisplaySort(v){
        this.setState({sortBy: v, display: false})
    }

    uploadLike = async () => {
        let newLike = {};
        newLike.userID = this.props.authorID;
        newLike.targetID = this.props.postID;
        newLike.targetClass = 'Post';
        const newLikeJson = JSON.stringify({...newLike})
        await this.props.updateLike(newLikeJson)
        this.props.changeLikeStatus()
    }

    render() {
        return (

            <Main>
                <Box>
                    <SocialActionsLike postLike={this.props.userLikePost} onClick={this.uploadLike}><i class="far fa-thumbs-up"></i> Like</SocialActionsLike>
                    <SocialActions onClick={this.displayHidden.bind(this)}><i class="far fa-comment-alt"></i> Comment</SocialActions>
                    <SocialActions><i class="fas fa-share"></i> Share</SocialActions>
                </Box>
                <TopComments onClick={this.displayWindow.bind(this)} show={this.state.showTopComments}>{this.state.sortBy} Comments<i class="fas fa-sort-down"></i></TopComments>

                <SortComments show={this.state.display}>
                    <Top onClick={() => this.changeDisplaySort('Top')} selected={this.state.sortBy}>
                        Top Comments
                        </Top>
                    <Recent onClick={() => this.changeDisplaySort('Recent')} selected={this.state.sortBy}>
                        Recent Comments
                        </Recent>
                </SortComments>
    
            </Main>

        )
    }
}

export default Social;

//CSS//
const Main = styled.div`
width: 100%;
height: 4rem;
background-color: #ffffff;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: 600;
color: rgba(0,0,0,.6); 
font-size: 1.4rem;
border-top: 1px solid lightgray;
position: relative;
`

const Box = styled.div`
display: flex;
align-items: center;
margin-left: 1rem;
`

const SocialActions = styled.div`
color: rgba(0,0,0, .6);
margin-right: 0.7rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
padding: 0.4rem 0.7rem;

&:hover {
    color: #0073b1;
    background-color: #e1ebf4;
}

& i {
    margin-right:1rem;
}
`

const SocialActionsLike = styled(SocialActions)`
color: ${props => props.postLike ? '#0073b1' : 'rgba(0,0,0, .6)'};
`

const TopComments = styled.div`
display: ${props => props.show ? 'flex' : 'none'};
align-items: center;
cursor: pointer;
padding: 0 0.7rem;
margin-right: 1rem;

& i{
font-weight: 900;
font-size: 2.2rem;
margin-left: 0.4rem;
padding-bottom: .7rem;
}

&:hover {
    color: #0073b1;
    background-color: #e1ebf4;
}
`

const SortComments = styled.div`
box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 6px 9px rgba(0,0,0,.2);
position: absolute;
width: 15rem;
top: 4.1rem;
right: 0rem;
display: ${(props) => props.show ? 'flex' : 'none'};
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
list-style-type: circle;
cursor: pointer;
z-index: 1;
`

const Top = styled.div`
width: 100%;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,.15);
font-size: 1.2rem;
color: ${(props) => props.selected === 'Top' ? '#0073b1' : 'rgba(0,0,0,.9)'};
font-weight: 600;
background-color: #ffffff;

&:hover{
    background-color: #f3f6f8;
    color: #0073b1; 
}
`

const Recent = styled(Top)`
border: none;
color: ${(props) => props.selected === 'Recent' ? '#0073b1' : 'rgba(0,0,0,.9)'};
`