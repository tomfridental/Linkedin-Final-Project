import React, { Component } from 'react';
import styled from 'styled-components';
import logo_pic from '../../imgs/topbar_logo.png';
import {Link} from 'react-router-dom';

class Search extends Component {
    
    state ={
        searchBarActive: false,
        searchBarText: 'Search'
    }

    activeSearch(){
        this.setState({searchBarActive: true, searchBarText:''})
    }

    deactiveSearch(){
        this.setState({searchBarActive: false, searchBarText:'Search'})
    }

    render() {
        return (
            <SearchDiv>
                <Link to="/"><img src={logo_pic} alt="Header Img" /></Link>
                <Input type="text" placeholder={this.state.searchBarText} onFocus={this.activeSearch.bind(this)} 
                onBlur={this.deactiveSearch.bind(this)} active={this.state.searchBarActive}/>
                <SearchIcon show={this.state.searchBarActive}><i class="fas fa-search"></i></SearchIcon>
            </SearchDiv>
        )
    }
}

export default Search;


//CSS//
const SearchDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 57rem;
position: relative;

& img{
    width: 3.4rem;
    height: 3.4rem;
}

/* & i{
    position: relative;
    left: -6.4rem;
    width: 3.3rem;
    height: 3.2rem;
    display: ${props=> !props.show ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: #0173b1;
    background-color: #e1e9ee;
} */
`

const Input = styled.input`
height: 3.2rem;
width: 26rem;
margin-left: 1.2rem;
border-radius: 2px;
background-color: ${props => !props.active ? '#e1e9ee' : '#ffffff'};
border: none;
display: flex;
align-items: center;
padding-left: 15px;
font-size: 1.4rem;
font-weight: 400;
color: #9aa7af;
margin-right: 3rem;
`

const SearchIcon = styled.button`
    border: none;
    position: relative;
    left: -6.4rem;
    width: 3.5rem;
    height: 3.2rem;
    visibility: ${props=> !props.show ? 'hidden' : 'visible'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: #0173b1;
    background-color: #e1e9ee;
    cursor: pointer;
`