import React, { Component } from 'react';
import styled from 'styled-components';
import logo_pic from '../../imgs/topbar_logo.png';
import { Link } from 'react-router-dom';

class Search extends Component {

    state = {
        searchBarActive: false,
        searchBarPH: 'Search',
        searchBarText: ''
    }

    activeSearch() {
        this.setState({ searchBarActive: true, searchBarPH: '' })
    }

    deactiveSearch = () => {
        this.setState({ searchBarActive: false, searchBarPH: 'Search' })
    }



    searchStr = (e) => {
        const value = e.target.value
        this.setState({ searchBarText: value })
        this.props.fetchSearchResults(this.props.userID, e.target.value)
    }


    render() {


        return (
            <SearchDiv>
                <Link to="/"><img src={logo_pic} alt="Header Img" /></Link>
                <VBox>
                    <Input type="text"
                        placeholder={this.state.searchBarPH}
                        onFocus={this.activeSearch.bind(this)}
                        // onBlur={this.deactiveSearch}
                        active={this.state.searchBarActive}
                        onChange={this.searchStr}
                        ref={SRBar => this.SRBar = SRBar}
                    />
                    <SearchIcon show={this.state.searchBarActive}><i class="fas fa-search"></i></SearchIcon>

                    {this.state.searchBarActive &&
                        <Result
                            deactiveSearch={this.deactiveSearch}
                            SRBar={this.SRBar}
                            {...this.props}
                            input={this.state.searchBarText}
                        />
                    }

                </VBox>
            </SearchDiv>
        )
    }
}

export default Search;

class Result extends Component {

    state = {
        searchGroups: [
            { name: 'People', avatar: <i class="fas fa-user-friends"></i> },
            { name: 'Jobs', avatar: <i class="fas fa-briefcase"></i> },
            { name: 'Content', avatar: <i class="far fa-newspaper"></i> }
        ]
    }

    componentDidMount() {
        this.props.fetchSearchResults(this.props.userID, '')
        document.addEventListener('mousedown', this.hideSearchBar, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideSearchBar, false);
    }

    hideSearchBar = (e) => {
        if (!this.SRWindow.contains(e.target) && !this.props.SRBar.contains(e.target)) {
            this.props.deactiveSearch()
        }
    }


    render() {
        const { input } = this.props

        return (
            <Results input={this.props.searchSuggestions.length} ref={SRWindow => this.SRWindow = SRWindow}>
                <SearchWrapper>
                    <GroupBox input={input.length}>
                        <Title>Search For</Title>
                        {this.state.searchGroups.map((item, i) =>
                            <SingleRes key={`SerGroup${i}`}>
                                <GroupAvatar> {item.avatar} </GroupAvatar>
                                {item.name}
                            </SingleRes>)}
                    </GroupBox>
                    <UserBox>
                        <Title input={input.length}>Recent</Title>
                        {this.props.searchSuggestions.map(user =>
                            <Link to={`/user/${user._id}`} style={{ textDecoration: 'none' }} key={user._id} onClick={() => this.props.deactiveSearch()}>
                                <SingleRes>
                                    <UserAvatar>
                                        <Img src={user.avatar} />
                                    </UserAvatar>
                                    {user.first_name} {user.last_name}
                                </SingleRes>
                            </Link>
                        )}

                    </UserBox>
                    <SeeAll input={input.length}>See all results for "{input}"</SeeAll>
                </SearchWrapper>
            </Results>
        )
    }
}


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

@media only screen and (max-width: 580px) {
display: none;
}
}

@media only screen and (max-width: 580px) {
width: 100%;
height: 6.2rem;
}
`

const VBox = styled.div`
display: flex;
position: relative;

@media only screen and (max-width: 580px) {
width: 100%;
height: 6.2rem;
justify-content: center;
align-items: center;
}
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
padding-left: 1.5rem;
font-size: 1.4rem;
font-weight: 400;
color: #9aa7af;
margin-right: 3rem;

@media only screen and (max-width: 580px) {
width: 95%;
height: 4rem;
margin-right: 0;
margin-left: 0;
}
`

const SearchIcon = styled.button`
border: none;
position: relative;
left: -6.4rem;
width: 3.5rem;
height: 3.2rem;
visibility: ${props => !props.show ? 'hidden' : 'visible'};
display: flex;
justify-content: center;
align-items: center;
font-size: 1.8rem;
color: #0173b1;
background-color: #e1e9ee;
cursor: pointer;

@media only screen and (max-width: 580px) {
display: none;
}
`

const Results = styled.div`
display: flex;
flex-direction: column;
position: absolute;
width: 56rem;
top: 3.7rem;
left: 1.2rem;
background-color: white;
border: .1rem solid black;
z-index: 4;
height: ${props => props.input > 7 ? '40rem' : `${props.input * 4.5 + 4.6}rem`};
overflow-y: auto;
overflow-x: hidden;

@media only screen and (max-width: 580px) {
width: 97%;
margin-top: 2.3rem;
}
`

const SearchWrapper = styled.div`
display: flex;
flex-direction: column;
position: absolute;
width: 100%;
`

const Title = styled.div`
height: 4.5rem;
font-weight: 400;
padding-left: 2rem;
display: ${props => props.input > 0 ? 'none' : 'flex'};
align-items: center;
font-size: 1.4rem;
color: rgba(0,0,0, .9);
font-weight: 600;
            `

const GroupBox = styled.div`
display: ${props => props.input > 0 ? 'none' : 'flex'};
flex-direction: column;
border-bottom: .1rem solid rgba(0,0,0,.6);
margin-top: 1rem;
width: 100%;
`

const SingleRes = styled.div`
width: 54rem;
height: 4.5rem;
display: flex;
align-items: center;
font-weight: 400;
font-size: 1.4rem;
color: black;
padding-left: 2rem;
cursor: pointer;
            
&:hover{
background-color: #e1e9ee;
}
`

const GroupAvatar = styled.div`
color: #0173b1;
font-size: 1.6rem;
margin-right: 1.5rem;
`

const UserBox = styled.div`
display: flex;
flex-direction: column;
/* margin-top: 1rem; */
width: 100%;
`

const UserAvatar = styled.div`
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
margin-right: 1.5rem;
 `

const Img = styled.img`
border-radius: 50%;
 `

const SeeAll = styled.div`
padding-left: 1.5rem;
border-top: .1rem solid rgba(0,0,0,.6);
display: ${props => props.input > 0 ? 'flex' : 'none'};
align-items: center;
font-size: 1.4rem;
color: #0173b1;
font-weight: 600;
cursor: pointer;
height: 4.5rem;
width: 100%;

&:hover{
    background-color: #e1e9ee;
}
`