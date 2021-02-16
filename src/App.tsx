import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Page1 from './page/Page1';
import Page2 from './page/Page2';
import LoginPage from './page/LoginPage';
import { Button } from 'antd';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState<string>();
  const loginCompleteHandler = (user: string) => {
    setCurrentUser(user);
  };
  const clickLogoutButtonHandler = () => {
    setCurrentUser(undefined);
  };

  return (
    <>
    <BrowserRouter>
      <Switch>
        { currentUser && <>
          <Route exact path="/">
            <Redirect to="/1" />
          </Route>
          <Route exact path="/1">
            <Page1 currentUser={currentUser} />
          </Route>
          <Route exact path="/2">
            <Page2 currentUser={currentUser} />
          </Route>
          <div>
            <Link to="/1">page1</Link>
            <Link to="/2">page2</Link>
          </div>
          <div>
            <Button onClick={clickLogoutButtonHandler}>logout</Button>
          </div>        
        </>}
        { !currentUser && <LoginPage onLoginComplete={loginCompleteHandler} />}
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
