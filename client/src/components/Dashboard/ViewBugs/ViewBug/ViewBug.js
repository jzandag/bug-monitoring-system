import React from 'react';

import classes from './ViewBug.module.css'

const ViewBug = (props) => {
    let form = {
        name: {
            elementType: 'input',
            label: 'Name',
            elementConfig: {
                type: 'text',
                placeholder: 'Name...'
            },
            value: '',
            valid: false,
            touch: false
        },
        description: {
            elementType: 'input',
            label: 'Description',
            elementConfig: {
                type: 'text',
                placeholder: 'Description...'
            },
            value: '',
            valid: false,
            touch: false
        },
        priority: {
            elementType: 'select',
            label: 'priority',
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ],
            },
            value: '',
            valid: false,
            touch: false
        }

    }
    return (
        <div className={classes.ViewBug}>
            
        </div>
    );
}

export default ViewBug;
