import * as type from './actionTypes'


export const updateCounter = () => {
    return {
        type: type.UPDATE_COUNTER
    }
}

export const asyncUpdateCounter = () => {
    return dispatch => {
        setTimeout( () => {
            dispatch(updateCounter());
        }, 2000)
    }
}