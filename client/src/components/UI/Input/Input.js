import React from 'react';

import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null
    const inputClasses = [classes.InputElement]
    let validationMessage = null
    if(!props.valid && props.touch){
        inputClasses.push(classes.Invalid)
        validationMessage = <span className={classes.ValidationError}>You have an error in your input element</span>
    }
    if(props.valid && props.touch){
        inputClasses.push(classes.Valid)
    }
    switch(props.elementType){
        case('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                onChange={props.change}
                value={props.value}/>
            break;
        case('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                onChange={props.change}
                value={props.value}/>
            break   
        case('select'):
            inputElement = <select
                className={inputClasses.join(' ')} 
                value={props.value}
                onChange={props.change}>
                {props.elementConfig.options.map(option => {
                    return <option key={option.value} value={option.value}>{option.displayValue}</option>
                })}
            </select>
            break
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
            onChange={props.change}                    
                value={props.value} />
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationMessage}
        </div>
    );
}

export default Input;
