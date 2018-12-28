import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

class AddToFeed extends Component {

    render() {
        return (
            <Main>
                <Header>
                    <span>Add to your feed</span> <i class="fas fa-info"></i>
                </Header>

                {this.props.usersArr && this.props.usersArr.map(user =>
                    <FallowBox key={user._id}>
                        <Link to={`/user/${user._id}`} style={{ textDecoration: 'none' }}>
                            <FallowBoxAvatar src={user.avatar} />
                        </Link>
                        <Link to={`/user/${user._id}`} style={{ textDecoration: 'none' }}>
                            <FallowBoxLink>
                                <Name>{user.first_name} {user.last_name}</Name>
                                <Title>{user.job_title} at {user.company_name}</Title>
                            </FallowBoxLink>
                        </Link>
                        <FallowBoxButton><i class="fas fa-plus"></i> Follow</FallowBoxButton>
                    </FallowBox>
                )}
                <ViewAll>View all recommendations</ViewAll>
            </Main>
        )
    }
}

export default AddToFeed;

//CSS//
const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border: 1px solid #929292;
border-top: none;
/* height: 25.25rem; */
width: 31rem;
background-color: white;
`


const Header = styled.div`
width: 28.5rem;
display: flex;
justify-content: space-between;
align-items: flex-end;
height: 3.4rem;
font-size: 1.6rem;
color: rgba(0,0,0,.9);
padding: 0 1.25rem;
margin-bottom: 1rem;

& i {
    margin-top: 0.7rem;
    color: rgba(0,0,0,.6);
    height: 0.9rem;
    width: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.85rem;
    border: 2px solid rgba(0,0,0,.6);
    border-radius: 50%;
    padding: 1px;
    position: relative;
}
`

const FallowBox = styled.div`
width: 28.5rem;
padding: 0 1.25rem;
display: flex;
justify-content: space-between;
align-items: center;
min-height: 7rem;
`

const FallowBoxAvatar = styled.img`
width: 4.5rem;
height: 4.5rem;
border-radius: 50%;
cursor: pointer;
`

const FallowBoxLink = styled.div`
width: 12.5rem;
display: flex;
flex-direction: column;
cursor: pointer;
`

const Name = styled.div`
font-weight: 600;
color: rgba(0,0,0,.9);
font-size: 1.4rem;
`

const Title = styled(Name)`
font-weight: normal;
font-size: 1.2rem;
`

const FallowBoxButton = styled.div`
border: 1px solid rgba(0,0,0,.6);
height: 2rem;
width: 8.2rem;
display: flex;
justify-content: center;
align-items: center;
padding: 0 0.2rem;
color: rgba(0,0,0,.6);
margin-bottom: 0.5rem;
font-size: 1.4rem;
font-weight: 600;
cursor: pointer;

& i {
    font-size: 1.3rem;
    padding-right: 1.2rem;
}

&:hover {
    color: white;
    background-color: #0073b1;
    border: 1px solid black;
}
`
const ViewAll = styled.a`
width: 29.75rem;
display: flex;
padding-left: 1.25rem;
height: 3rem;
color: #0073b1;
font-size: 1.4rem;
font-weight: 600;
text-decoration: none;
cursor: pointer;

&:hover {
    color: #665ed0;
}
`
