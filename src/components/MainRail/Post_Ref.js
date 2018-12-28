import React, { Component } from 'react';
import styled from 'styled-components';

class Ref extends Component {

    render() {
        return (
            <Main>
                <RefBox>
                    <User>Anna Dimantov-Algamas</User> likes this
                </RefBox>
            </Main> 
        )
    }
}

export default Ref;

//CSS//
const Main = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 3.5rem;
border-bottom: 1px solid lightgray;
background-color: #ffffff;
`
const RefBox = styled.div`
font-size: 1.2rem;
font-weight: 400;
color: rgba(0,0,0,.6);
display: flex;
margin-left: 1rem;
align-items: center;
`

const User = styled.div`
color: rgba(0,0,0,.9);
margin-right: .5rem;
font-weight: 600;
cursor: pointer;

&:hover{
    color: #0073b1;
    text-decoration: underline;
}

`