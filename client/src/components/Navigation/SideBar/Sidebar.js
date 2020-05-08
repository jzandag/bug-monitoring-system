import React from 'react'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './Sidebar.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const Sidebar = (props) => {
    let attachedClasses = [classes.Sidebar, classes.Close]
    if(props.show){
        attachedClasses = [classes.Sidebar, classes.Open]
    }
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.click}/>
            <div className={attachedClasses.join(' ')} >
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
}

export default Sidebar