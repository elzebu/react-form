import * as type from './actionTypes'

export const counter = (state, action) => {
    switch (action.type) {
        case type.UPDATE_COUNTER:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}