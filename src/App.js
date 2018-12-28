import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import BottomBar from './components/Bottom/BottomBar';
import styled from 'styled-components';
import Homepage from './components/Homepage'
import Login from './components/Login/Login'
import LoginStage1 from './components/Login/LoginStage1';
import LoginStage2 from './components/Login/LoginStage2';
import LoginStage3 from './components/Login/LoginStage3';
import LoginFail from './components/Login/LoginFail';
import MyNetwork from './components/MyNetwork/MyNetwork';
import UserPage from './components/UserPage/UserPage';

class App extends Component {

  render() {

    return (
      <HashRouter hashType="slash">
        <Wrapper>
          <TopBar />
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/start/location" component={LoginStage1}></Route>
            <Route path="/start/profile" component={LoginStage2}></Route>
            <Route path="/start/photo" component={LoginStage3}></Route>
            <Route path="/login" component={LoginFail}></Route>
            <Route path="/feed" component={Homepage}></Route>
            <Route path="/mynetwork" component={MyNetwork}></Route>
            <Route path="/user/:id" component={UserPage}></Route>
            <Route component={MyNetwork} />
          </Switch>
          <BottomBar />
        </Wrapper>
      </HashRouter>
    );
  }
}


export default App;

//CSS//

const Wrapper = styled.div`
display: flex;
flex-basis: 100%;
`

