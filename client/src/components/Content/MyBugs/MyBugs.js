import React from 'react';

import classes from './MyBugs.module.css'
import ListItem from "../ListItem/ListItem";

const MyBugs = (props) => {
    let listItems = <p>No bugs assigned yet!</p>;
    if(props.list){
        props.list.map(li => {
            return <ListItem />
        })
    }
    return (
        <div className={classes.MyBugs}>
            <div className={classes.Header}>
                <h1>My Bugs</h1>
            </div>
            <article>
                {listItems}
            </article>
        </div>
    );
}

export default MyBugs;
