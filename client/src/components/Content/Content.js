import React, { Component } from 'react';
import MyBugs from './MyBugs/MyBugs';
import classes from './Content.module.css'
import Logs from './Logs/Logs';
import AllBugs from './AllBugs/AllBugs';

class Content extends Component {
    render() {
        return (
            <div className={classes.Content}>
                <MyBugs />
                <Logs />
                <AllBugs />
            </div>
        );
    }
}

export default Content;
