import React, { Component } from 'react';

import MyBugs from '../../components/Dashboard/MyBugs/MyBugs';
import classes from './Content.module.css'
import Logs from '../../components/Dashboard/Logs/Logs';
import AllBugs from '../../components/Dashboard/AllBugs/AllBugs';
import { connect } from 'react-redux';

class Content extends Component {

    componentDidMount(){
        
    }
    
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

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);
