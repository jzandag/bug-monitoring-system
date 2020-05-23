import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';

import { connect } from 'react-redux'
import * as actions from './store/actions/'

import Login from './containers/Login/Login';
import Layout from './containers/Layout/Layout';
import ViewBugs from './components/Dashboard/ViewBugs/ViewBugs';

class App extends Component {

    componentDidMount(){
        this.props.onTryAutoSignup()
    }

    render(){
        let authRedirect = <Redirect to="/login" />
        if(this.props.isAuthenticated){
            authRedirect = null
        }
        return (
            <BrowserRouter className="App">
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/dashboard" exact component={Layout} />
                    <Route path='/bugs/all' exact component={ViewBugs}/>
                    <Route path='/bugs/me' exact component={ViewBugs}/>
                    <Route path='/bugs/:id' component={ViewBugs}/>
                    {/* <Route path="*"  component={() => <p style={{textAlign: 'center'}}>Component not found</p>} /> */}
                    {authRedirect}
                </Switch>
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
