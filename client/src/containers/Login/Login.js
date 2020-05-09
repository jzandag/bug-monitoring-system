import React, { Component } from 'react';

import classes from './Login.module.css'
import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner'

import AuthContext from '../../context/AuthContext'
import { Redirect } from 'react-router-dom';
import Error from '../../components/UI/Error/Error';
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
    componentDidMount(){
        if (this.props.location.state && this.props.location.state.error) {
            this.setState({message: this.props.location.state.error}) 
            this.props.history.replace({
                pathname: this.props.location.pathname,
                state: {}
            });
        }
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
            <AuthContext.Consumer>
                {context => {
                    if(context.isAuthenticated())
                        return <Redirect to="/dashboard"/>
                    return <form className={classes.FormLogin} onSubmit={(e) =>context.login(e, ()=> {this.props.history.push('/dashboard')})}>
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
                }}
            </AuthContext.Consumer>
        )
        let error = null
        if(this.state.message){
            error = <Error>{this.state.message}</Error>
        }
        if(this.state.loading)
            form = <Spinner />
        return (
            
            <div className={classes.LoginBox}>
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

export default Login;
