import React from 'react';

import classes from './MyBugs.module.css'
import ListItem from "../ListItem/ListItem";
import { Link, withRouter } from 'react-router-dom';

const MyBugs = (props) => {
    let listItems = <p style={{textAlign: 'center'}}>No bugs assigned yet!</p>;
    if(props.list){
        listItems = props.list.map(li => {
            return <ListItem 
                    key={li._id}
                    name={li.description}
                    dateCreated={li.createdAt}
                    createdBy={li.createdBy.first_name + li.createdBy.last_name}
                />
        })
    }
    return (
        <div className={classes.MyBugs}>
            <div className={classes.Header}>
                <h1>My Bugs</h1>
            </div>
            <article>
                {listItems}
                {/* <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' /> 
                <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' /> 
                <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' /> 
                <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' /> 
                <ListItem id='ffff' name='Bug sampler' dateCreated='Oct 6, 1998' createdBy='Zidrex' />  */}
            </article>
            <div className={classes.Footer}>
                <Link to='bugs/me'><button >See more</button></Link>
            </div>
        </div>
    );
}

export default withRouter(MyBugs);
