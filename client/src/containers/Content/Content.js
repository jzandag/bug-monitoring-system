import React, { Component } from 'react';

import MyBugs from '../../components/Dashboard/MyBugs/MyBugs';
import classes from './Content.module.css'
import Logs from '../../components/Dashboard/Logs/Logs';
import AllBugs from '../../components/Dashboard/AllBugs/AllBugs';
import { connect } from 'react-redux';

import * as actions from "../../store/actions/index";

class Content extends Component {

    componentDidMount(){
        console.log('sup');
        this.props.onDashboardStart()
    }
    
    render() {
        return (
            <div className={classes.Content}>
                <MyBugs list={this.props.mybugs}/>
                <Logs />
                <AllBugs />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mybugs: state.bugs.myBugs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDashboardStart: () => dispatch(actions.fetchMyBugs())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);
