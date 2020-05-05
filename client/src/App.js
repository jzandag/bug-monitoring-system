import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './containers/Login/Login'
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
        <Switch>
            <Route path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
