import React, { Component } from 'react';
import styled from 'styled-components';

class Messaging extends Component {

    render() {
        return (
            <Main>
                <Messeging> 
                    <StatusSign></StatusSign>
                    Messaging
                    </Messeging>
                <NewMsg><i class="far fa-edit"></i></NewMsg>
                <Settings><i class="fas fa-cog"></i></Settings>
            </Main>
        )
    }
}

export default Messaging;

//CSS//
const Main = styled.a`
display: flex;
align-items: center;
/* border: 1px solid #929292; */
height: 4.2rem;
width: 25.3rem;
margin-right: 2.3rem;
background-color: white;
cursor: pointer;
padding: 0 0.5rem;
box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 4px 6px rgba(0,0,0,.2);
`
const Messeging = styled.div`
height: 100%;
width: 20.3rem;
color: rgba(0,0,0,.9);
font-weight: 400;
font-size: 1.4rem;
display: flex;
align-items: center;
`

const StatusSign = styled.div`
width: 0.75rem;
height: 0.75rem;
border-radius: 50%;
background-color: green;
margin-left: 0.7rem;
margin-right: 0.8rem;
`

const NewMsg = styled.div`
width: 2.4rem;
height: 2.4rem;
display: flex;
justify-content: center;
align-items: center;
color: rgba(0,0,0,.6);
font-weight: 600;
font-size: 1.3rem;
border-radius: 50%;

&:hover{
    color: black;
    background-color:  #f2f2f2;
    
}
`
const Settings = styled(NewMsg)`

`
