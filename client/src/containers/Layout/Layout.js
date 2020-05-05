import React, { Component } from 'react';

import classes from './Layout.module.css'

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={classes.Content}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Layout;
