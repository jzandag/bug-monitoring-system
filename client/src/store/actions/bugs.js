import * as actionTypes from './actionTypes'

export const myBugsSuccess = (myBugs) => {
    return {
        type: actionTypes.MY_BUGS_START,
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

export const fetchMyBugs = (id) => {
    return dispatch => {
        dispatch(myBugsStart())
    }
}