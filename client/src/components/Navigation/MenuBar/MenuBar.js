import React from 'react';

import classes from './MenuBar.module.css'
import Logo from '../../UI/Logo/Logo';
import SidebarToggle from '../SideBar/SidebarToggle/SidebarToggle';

const MenuBar = (props) => {
    return (
        <header className={classes.MenuBar}>
            <SidebarToggle toggle={props.click}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                Logout login project
            </nav>
        </header>
    );
}

export default MenuBar;
