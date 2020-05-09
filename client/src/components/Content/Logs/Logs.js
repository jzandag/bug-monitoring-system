import React from 'react';

import classes from './Logs.module.css'
import ListItem from '../ListItem/ListItem';
const Logs = () => {
    return (
        <div className={classes.Logs}>
            <div className={classes.Header}>
                <h1>Log History</h1>
            </div>
            <article>
                {/* {listItems} */}
                <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' /> 
                <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' /> 
                <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' /> 
                <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' /> 
                <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' /> 
            </article>
            <div className={classes.Footer}>
                <button >See more</button>
            </div>
        </div>
    );
}

export default Logs;
