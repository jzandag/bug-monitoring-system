import React from 'react';

import classes from './ViewBugs.module.css'

const ViewBugs = () => {
    return (
        <div className={classes.ViewBugs}>
            <div className={classes.Header}>
                <h1><i className="fa fa-asterisk"></i> Bugs</h1>
            </div>
        </div>
    );
}

export default ViewBugs;
