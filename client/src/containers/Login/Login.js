import React, { Component } from 'react';

import classes from './Login.module.css'
import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner'

class Login extends Component {
    state = {
        form: {
            email: {
                elementType: 'input',
                label: 'Email',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email...'
                },
                value: '',
                touch: false
            },
            password: {
                elementType: 'input',
                label: 'Password',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password...'
                },
                value: ''
            }
        }, 
        loading: false
    }

    loginHandler = () => {
        this.setState({loading: true})
    }

    inputChangeHandler = (event ,id) => {
        const formData = {
            ...this.state.form
       }
       const formElement = {...formData[id]}
       formElement.value = event.target.value
       formData[id] = formElement
       this.setState({form: formData})
    }

    render() {
        const formElements =  []
        for(let key in this.state.form){
            formElements.push({
                id: key,
                config: this.state.form[key]
            })
        }
        let form = (
            <form className={classes.FormLogin} onSubmit={this.loginHandler}>
                {formElements.map(f => {
                    return <Input 
                            key={f.id}
                            elementType={f.config.elementType}
                            elementConfig={f.config.elementConfig}
                            value={f.config.value}
                            change={(event) => this.inputChangeHandler(event, f.id)}
                            touch={f.config.touch}
                            label={f.config.label}      
                    />
                }) 
                }
                <Button buttonType='Primary' >LOGIN</Button>
            </form>
        )
        if(this.state.loading)
            form = <Spinner />
        return (
            <div className={classes.LoginBox}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <h1>Login to dashboard</h1>
                {/* <p className={classes.right}>Bug</p>
                <p className={classes.left}>Monitoring</p>
                <p className={classes.right}>System</p> */}
                {form}
            </div>
        );
    }
}

export default Login;
