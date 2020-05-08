import React from 'react';

import classes from './SidebarToggle.module.css'

const DrawerToggle = (props) => {
    return (
        <div className={classes.SidebarToggle} onClick={props.toggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default DrawerToggle;
