import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const authLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expirationTime * 1000)
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://localhost:3000/users/login', {
            email, 
            password})
            .then((result) => {
                //console.log(result);
                //const expirationDate = new Date(new Date().getTime() + result.data.expiresIn * 1000) 
                localStorage.setItem('token', result.data.token)
                //localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', result.data.user._id)
                dispatch(authSuccess( result.data.token, result.data.user._id))
            }).catch((err) => {
                dispatch(authFail(err))
            });
        //dispatch(authSuccess(email, password))
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token){
            console.log('lo');
            dispatch(authLogout())
        }
        else {
            // const expirationDate = new Date(localStorage.getItem('expirationDate'))
            // if(expirationDate < new Date()){
            //     dispatch(authLogout())
            // }else {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(token, userId))
                //dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/ 1000))
            //}
        }

    }
}
