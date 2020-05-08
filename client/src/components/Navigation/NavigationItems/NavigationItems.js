import React, { Component } from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

class NavigationItems extends Component {
    render() {
        return (
            <div className={classes.NavigationItems}>
                <NavigationItem link="/">Dashboard</NavigationItem>
                <NavigationItem link="/orders">My bugs</NavigationItem>
                <NavigationItem link="/orders">All bugs</NavigationItem>
                <NavigationItem link="/orders">Projects</NavigationItem>
            </div>
        );
    }
}

export default NavigationItems;
