import React, { Component } from 'react';
import ProtectedRoute from '../../components/Routes/ProtectedRoute';
import { Route, Switch } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Layout from '../Layout/Layout';
import Login from '../Login/Login'

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
                    <Route path="*"  component={() => <p>Component not found</p>} />
                </Switch>
                </AuthContext.Provider>
            </React.Fragment>
        );
    }
}

export default MainComponent;
