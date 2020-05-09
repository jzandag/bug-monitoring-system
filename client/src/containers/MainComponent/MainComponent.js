import React, { Component } from 'react';
import ProtectedRoute from '../../components/Routes/ProtectedRoute';
import { Route, Switch } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Layout from '../Layout/Layout';
import Login from '../Login/Login'
import ViewBugs from '../../components/Content/ViewBugs/ViewBugs';
import ViewBug from '../../components/Content/ViewBugs/ViewBug/ViewBug';

class MainComponent extends Component {
    state = {
        authenticated: false
    }
    /////
    loginHandler = (e, cb) => {
        e.preventDefault()
        this.setState({authenticated: true})
        localStorage.setItem('authenticated', 'true');
        cb()
    }
    logoutHandler = () => {
        this.setState({authenticated: false})
        localStorage.removeItem('authenticated');
    }
    isAuthenticated = () => {
        return localStorage.getItem('authenticated');
    }
    isPageRefreshed() {
        return window.performance && performance.navigation.type === 1;
    }
    render() {
        return (
            <React.Fragment>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: this.loginHandler,
                    logout: this.logoutHandler,
                    isAuthenticated:this.isAuthenticated
                }}>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <ProtectedRoute path="/dashboard" exact component={Layout} />
                    <ProtectedRoute path='/bugs/all' exact component={ViewBugs}/>
                    <ProtectedRoute path='/bugs/me' exact component={ViewBugs}/>
                    <ProtectedRoute path='/bugs/:id' component={ViewBug}/>
                    <Route path="*"  component={() => <p style={{textAlign: 'center'}}>Component not found</p>} />
                </Switch>
                </AuthContext.Provider>
            </React.Fragment>
        );
    }
}

export default MainComponent;
