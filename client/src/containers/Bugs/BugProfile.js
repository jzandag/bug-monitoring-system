import React, { Component } from 'react';

import classes from './BugProfile.module.css'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../shared/utility';
import MenuBar from "../../components/Navigation/MenuBar/MenuBar";
import Sidebar from "../../components/Navigation/SideBar/Sidebar";

class BugProfile extends Component {
    state = {
        form: {
            name:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Bug name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touch: false
            },
            description:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touch: false
            },
            priority: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: '1', displayValue: 'Urgent'},
                        {value: '2', displayValue: 'Crash'},
                        {value: '3', displayValue: 'Normal'}
                    ],
                },
                value: 'fastest',
                valid: false,
                touch: false
            }
        },
        formValid: false,
        showSidebar: false
    }

    inputChangeHandler = (event, id) => {
        const formElement = updateObject(this.state.form[id], {
            value: event.target.value,
            touch: true,
            valid: checkValidity(event.target.value, this.state.form[id].validation)
        })

        const formData = updateObject(this.state.form, {
            [id]: formElement
        })

        let formisValid = true
        for (let id in formData){
            formisValid = formData[id].valid && formisValid
        }
        this.setState({form: formData, formValid: formisValid})
    }

    bugSubmitHandler = (event) => {
        event.preventDefault()
        const formData = {}

        for (let element in this.state.form){
            formData[element] = this.state.form[element].value
        }

        console.log(formData);
    }

    showSidebarHandler = () => {
        this.setState({showSidebar: !this.state.showSidebar})
    }

    render() {
        const formElements = []
        for(let key in this.state.form){
            formElements.push({
                id: key,
                config: this.state.form[key]    
            })
        }
        let form = (
            <form onSubmit={this.bugSubmitHandler}>
                {formElements.map(el => {
                    return <Input 
                        key={el.id}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        value={el.config.value}
                        change={(event) => this.inputChangeHandler(event, el.id)}
                        validation={el.config.validation}
                        valid={el.config.valid}
                        touch={el.config.touch}
                    />
                })}
                <Button buttonType="Success" disabled={!this.state.formValid}>Submit</Button>
            </form>
        )
        return (
            <div className={classes.BugProfile}>
                <MenuBar
                    click={this.showSidebarHandler}
                    logout={this.props.onLogout}
                    />
                <Sidebar show={this.state.showSidebar} click={this.showSidebarHandler} />
                <h2><i className="fa fa-bug"></i> Bug</h2>
                {form}
            </div>
        );
    }
}

export default BugProfile;
