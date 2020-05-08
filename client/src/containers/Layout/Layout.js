import React, { Component } from 'react';

import classes from './Layout.module.css'
import MenuBar from '../../components/Navigation/MenuBar/MenuBar';
import Button from '../../components/UI/Button/Button';
import AuthContext from '../../context/AuthContext';
import Sidebar from '../../components/Navigation/SideBar/Sidebar';
import Content from '../../components/Content/Content'

class Layout extends Component {
    state = {
        showSidebar: false
    }
    showSidebarHandler = () => {
        this.setState({showSidebar: !this.state.showSidebar})
    }

    render() {
        return (
            <React.Fragment>
                <MenuBar click={this.showSidebarHandler}/>
                <Sidebar show={this.state.showSidebar} click={this.showSidebarHandler} />
                <AuthContext.Consumer>
                    {context => {
                        return <main className={classes.Content}>
                                <Content />
                                {/* TODO MAIN CONTENT */}
                                <Button buttonType='Success' clicked={context.logout}/>
                            </main>
                    }}    
                </AuthContext.Consumer>
            </React.Fragment>
        );
    }
}

export default Layout;
