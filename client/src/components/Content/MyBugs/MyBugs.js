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

export default MyBugs;
