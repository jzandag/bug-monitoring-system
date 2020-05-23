import * as actionTypes from '../actions/actionTypes'
import { updateObject } from  '../../shared/utility';

const initState = {
    myBugs: [],
    allBugs: [],
    logs: [],
    error: null,
    loading: false
}

const myBugSuccess = (state, action) => {
    return updateObject(state, {
        myBugs: action.myBugs,
        error: null,
        loading: false
    })
}

const fail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.MY_BUGS_START:
            return updateObject(state, {error: null, loading: true})
        case actionTypes.MY_BUGS_SUCCESS:
            return myBugSuccess(state, action)
        case actionTypes.MY_BUGS_FAIL:
        case actionTypes.ALL_BUGS_FAIL:
        case actionTypes.LOGS_FAIL:
            return fail(state, action)
        default:
            return state
    }
}

export default reducer