import * as actionTypes from './actionTypes'
import axios from 'axios'

export const myBugsSuccess = (myBugs) => {
    return {
        type: actionTypes.MY_BUGS_SUCCESS,
        myBugs
    }
}

export const myBugsFail = (error) => {
    return {
        type: actionTypes.MY_BUGS_FAIL,
        error
    }
}

export const myBugsStart = () => {
    return {
        type: actionTypes.MY_BUGS_START
    }
}

export const fetchMyBugs = () => {
    return dispatch => {
        dispatch(myBugsStart())
        axios.get('http://localhost:3000/bugs/',{
                headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
                }
           })
            .then((res) => {
                console.log('[fetchMyBugs]', res);
                dispatch(myBugsSuccess(res.data))
            }).catch((err) => {
                console.log(err);
                dispatch(myBugsFail(err))
            });
    }
}