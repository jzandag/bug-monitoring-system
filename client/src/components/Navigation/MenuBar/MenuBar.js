import React from 'react';

import classes from './MenuBar.module.css'
import Logo from '../../UI/Logo/Logo';

const MenuBar = (props) => {
    return (
        <header className={classes.MenuBar}>
            <div>XXX</div>
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
