import React from 'react';

import classes from './MenuBar.module.css'
import Logo from '../../UI/Logo/Logo';
import SidebarToggle from '../SideBar/SidebarToggle/SidebarToggle';
import { Link } from 'react-router-dom';

const MenuBar = (props) => {
    return (
        <header className={classes.MenuBar}>
            <SidebarToggle toggle={props.click}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <button onClick={props.logout}><Link to='/login'>Logout</Link></button>
            </nav>
        </header>
    );
}

export default MenuBar;
