import React from 'react';

import classes from './Button.module.css'

const Button = (props) => {
    return (
        <React.Fragment>
            <button
                disabled={props.disabled}
                className={[classes.Button, classes[props.buttonType]].join(' ')}
                onClick={props.clicked}>
                {props.children}</button>
        </React.Fragment>
    );
}

export default Button;
