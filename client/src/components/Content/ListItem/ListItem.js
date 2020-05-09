import React from 'react';
import { Link, withRouter } from "react-router-dom";

import classes from './ListItem.module.css'

const ListItem = (props) => {
    return (
        <div className={classes.ListItem}>
            <Link to={{
                pathname: '/bugs/all'
                }}>
                {props.name}
            </Link>
            <div className={classes.Under}>
                Started by {props.createdBy}, created at {props.dateCreated}
            </div>
            
        </div>
    );
}

export default ListItem;
