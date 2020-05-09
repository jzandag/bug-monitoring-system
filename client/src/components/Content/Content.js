import React, { Component } from 'react';

import MyBugs from './MyBugs/MyBugs';
import classes from './Content.module.css'
import Logs from './Logs/Logs';
import AllBugs from './AllBugs/AllBugs';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../Routes/ProtectedRoute' 

import ViewBugs from './ViewBugs/ViewBugs'
import ViewBug from './ViewBugs/ViewBug/ViewBug'

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
