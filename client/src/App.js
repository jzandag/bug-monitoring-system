import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';

import { connect } from 'react-redux'
import * as actions from './store/actions/'

import Login from './containers/Login/Login';
import Layout from './containers/Layout/Layout';
import ViewBugs from './components/Dashboard/ViewBugs/ViewBugs';
import BugProfile from './containers/Bugs/BugProfile';

class App extends Component {

    componentDidMount(){
        this.props.onTryAutoSignup()
    }

    render(){
        let routes = (
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/bugProfile" exact component={BugProfile}/>
                <Redirect to="/login" />
            </Switch>
        )
        let authRedirect = <Redirect to="/login" />
        if(this.props.isAuthenticated){
            authRedirect = null
            routes = 
                <Switch>
                    <Route path="/dashboard" exact component={Layout} />
                    <Route path='/bugs/all' exact component={ViewBugs}/>
                    <Route path='/bugs/me' exact component={ViewBugs}/>
                    <Route path='/bugs/:id' component={ViewBugs}/>
                    <Redirect to="/dashboard" />
                </Switch>
        }
        return (
            <BrowserRouter className="App">
                {routes}
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
