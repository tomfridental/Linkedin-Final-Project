import React, { Component } from 'react';
import styled from 'styled-components';

class MyNetwork extends Component {

    render() {
        return (
            <Main>
                    <Box>
                        <Img src="https://res.cloudinary.com/tomfr/image/upload/c_scale,h_373/v1545929719/imageedit_3_6898911032.png" />
                        <Msg>
                        <Header>AWWW...DON’T CRY.</Header>
                        <Text>It's just a 404 Error!</Text>
                        </Msg>
                    </Box>
            </Main> 
        )
    }
}

export default MyNetwork;

//CSS//
const Main = styled.div`
margin-top: 5.3rem;
width: 100%;
/* height: 95.5rem; */
display: flex;
justify-content: center;
align-items: center;
color: black;
`

const Box = styled.div`
margin-top: 10rem;
display: flex;
justify-content: center;
align-items: center;
`

const Img = styled.img`

`

const Msg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 3rem;
`

const Header = styled.span`
font-size: 5rem;
color: rgba(0,0,0,.9);
font-weight: 600;
`

const Text = styled.span`
margin-top: 2rem;
font-size: 2rem;
color: rgba(0,0,0,.6);
font-weight: 400;
`