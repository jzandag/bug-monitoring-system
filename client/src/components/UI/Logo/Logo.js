import React from 'react';

import bmsLogo from '../../../assets/image/zz.png'
import classes from './Logo.module.css'

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={bmsLogo} alt="Bug System Logo"></img>
        </div>
    );
}

export default Logo;
