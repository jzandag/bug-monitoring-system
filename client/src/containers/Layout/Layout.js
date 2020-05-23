import React, { Component } from 'react';

import classes from './Layout.module.css'
import MenuBar from '../../components/Navigation/MenuBar/MenuBar';
import Button from '../../components/UI/Button/Button';
import Sidebar from '../../components/Navigation/SideBar/Sidebar';
import Content from '../Content/Content'

import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import { Redirect } from 'react-router-dom';

class Layout extends Component {
    state = {
        showSidebar: false
    }
    showSidebarHandler = () => {
        this.setState({showSidebar: !this.state.showSidebar})
    }

    render() {
        let authRedirect = <Redirect to="/logout"/>
        if(this.props.isAuthenticated)
            authRedirect = null
        return (
            <React.Fragment>
                {authRedirect}
                <MenuBar 
                    isAuth={this.props.isAuthenticated} 
                    click={this.showSidebarHandler}
                    logout={this.props.onLogout}
                    />
                <Sidebar show={this.state.showSidebar} click={this.showSidebarHandler} />
                <main className={classes.Content}>
                    <Content />
                    {/* TODO MAIN CONTENT */}
                    <Button buttonType='Success' clicked={this.props.onLogout}/>
                </main>
            </React.Fragment>
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
        onLogout: () => dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
