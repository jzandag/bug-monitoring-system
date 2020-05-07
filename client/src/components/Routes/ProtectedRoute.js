import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <AuthContext.Consumer>
        {(context) => {
            return <Route 
                {...rest}
                render={(props) => {
                    if(context.isAuthenticated()){
                        return <Component {...props}/>
                    }
                    else
                        return <Redirect to={{
                            pathname: '/login',
                            state: {
                                error: 'Not authenticated',
                                from: props.location
                            }
                        }} />
                }}
            />
        }}
        </AuthContext.Consumer>
    );
}

export default ProtectedRoute;
