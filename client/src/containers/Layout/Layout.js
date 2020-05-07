import React, { Component } from 'react';

import classes from './Layout.module.css'
import MenuBar from '../../components/Navigation/MenuBar/MenuBar';
import Button from '../../components/UI/Button/Button';
import AuthContext from '../../context/AuthContext';
import Sidebar from '../../components/Navigation/SideBar/Sidebar';

class Layout extends Component {
    state = {
        showSidebar: false
    }
    render() {
        return (
            <React.Fragment>
                <MenuBar />
                <Sidebar />
                <AuthContext.Consumer>
                    {context => {
                        return <main className={classes.Content}>
                                hello
                                <Button buttonType='Success' clicked={context.logout}/>
                            </main>
                    }}
                    
                </AuthContext.Consumer>
            </React.Fragment>
        );
    }
}

export default Layout;
