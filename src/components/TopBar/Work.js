import React, { Component } from 'react';
import styled from 'styled-components';

class Work extends Component {

    render() {
        return (
            <Main>
                <Link><i class="fas fa-th"></i><div>Work <i class="fas fa-sort-down"></i></div></Link>
                <TryPrimium>Try Primium Free <br />
                            for 1 Month
                </TryPrimium>
            </Main>
        )
    }
}

export default Work;

//CSS//
const Main = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

@media only screen and (max-width: 580px) {
display: none;
}
`

const Link = styled.div`
margin-left: 1.2rem;
height: 5.2rem;
width: 6rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.2rem;
color: #c7d1d8;
text-decoration: none;
font-weight: 600;
cursor: pointer;

    & i {
        font-size: 1.9rem;
       padding-top: 0.8rem;
       padding-bottom: 0.1rem;
    }

    &:hover {
        color: white;
    }

    & div {
    margin-top: 0.1rem;
    display: flex;
    align-items: flex-start;


    & i {
    font-size: 1.1rem; 
    padding: 0px 0px;
    padding-left: 3px;
    }
}
`

const TryPrimium = styled.div`
font-size: 1.4rem;
margin-left: 0.4rem;
height: 5.2rem;
width: 12rem;
color: #ccc19c;
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
text-decoration: none;
text-align: center;
padding-top: 0.2rem;
cursor: pointer;


    &:hover {
        text-decoration: underline;
    }
`