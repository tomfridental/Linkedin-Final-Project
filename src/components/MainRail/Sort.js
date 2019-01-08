import React, { Component } from 'react';
import styled from 'styled-components';

class Sort extends Component {

    state = {
        display: false,
        sortBy: 'Top'
    }

    displayWindow(){
        this.setState(prevState => ({display: !prevState.display})) 
    }

    changeDisplaySort(v){
        this.setState({sortBy: v, display: false})
    }

    render() {

        return (
            <Wrapper>
                <Line />

                <SortButton onClick={this.displayWindow.bind(this)}>
                    Sort By: <span>{this.state.sortBy}</span><i class="fas fa-sort-down"></i>
                </SortButton>
                <SortMenu show={this.state.display}>
                        <Top onClick={() => this.changeDisplaySort('Top')} selected={this.state.sortBy}>
                        Top
                        </Top>
                        <Recent onClick={() => this.changeDisplaySort('Recent')} selected={this.state.sortBy}>
                        Recent
                        </Recent>
                    </SortMenu>
            </Wrapper>
        )
    }

}

export default Sort;

//CSS//

const Wrapper = styled.div`
width: 100%;
height: 3rem;
position: relative;
display: flex;
align-items: center;

@media only screen and (max-width: 580px) {
   display: none;
}
`

const Line = styled.hr`
flex-grow: 2;
`

const SortButton = styled.a`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
cursor: pointer;
color: rgba(0,0,0,.6);
padding: 0 0.4rem;
font-size: 1.2rem;
font-weight: 400;

& span {
    color: rgba(0,0,0,.9);
    padding: 0 0.3rem;
    font-weight: 600;
}

& i {
    font-size: 1.8rem;
    padding-bottom: 0.7rem;
}
`

const SortMenu = styled.div`
box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 6px 9px rgba(0,0,0,.2);
position: absolute;
width: 10rem;
top: 3.1rem;
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

