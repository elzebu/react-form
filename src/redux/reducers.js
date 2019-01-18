import * as type from './actionTypes'

export const counter = (state, action) => {
    switch (action.type) {
        case type.UPDATE_COUNTER:
            return {
                ...state,
                count: state.count + 1
            }
        case type.SET_BRANDS:
            return {
                ...state,
                brands: action.payload
            }
        case type.SET_TYRES:
            return {
                ...state,
                tyres: action.payload
            }
        case type.SET_APIERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}