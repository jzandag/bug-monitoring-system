import React, { Component } from 'react';

import classes from './Login.module.css'
import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner'

import { Redirect } from 'react-router-dom'
import Error from '../../components/UI/Error/Error'

import * as actions from '../../store/actions/';
import { connect } from 'react-redux';
import { updateObject } from '../../shared/utility';

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
        loading: false,
        authenticated: false,
        message: ''
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.form.email.value, this.state.form.password.value)
    }

    inputChangeHandler = (event ,id) => {
        // const formData = {
        //     ...this.state.form
        // }
        
        // const formElement = {...formData[id]}
        // formElement.value = event.target.value
        // formData[id] = formElement
        const formData = updateObject(this.state.form, {
            [id]: updateObject(this.state.form[id], {
                value: event.target.value
            })
        })
        this.setState({form: formData})
    }
    componentDidMount(){
        // if (this.props.location.state && this.props.location.state.error) {
        //     this.setState({message: this.props.location.state.error}) 
        //     this.props.history.replace({
        //         pathname: this.props.location.pathname,
        //         state: {}
        //     });
        // }
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
            <form className={classes.FormLogin} onSubmit={this.submitHandler}>
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
        let error = null
        if(this.props.message){
            error = <Error>{this.props.message}</Error>
        }
        if(this.props.loading)
            form = <Spinner />
        let authRedirect = <Redirect to="/dashboard"/>
        if(!this.props.isAuthenticated)
            authRedirect = null
        return (
            <div className={classes.LoginBox}>
                {authRedirect}
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <h1>Login to dashboard</h1>
                {error}
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token != null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email,password) => dispatch(actions.auth(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
