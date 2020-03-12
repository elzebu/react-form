
import * as type from './actionTypes'

export const theme = (state, action) => {
    switch (action.type) {
        case type.SWITCH_THEME:
            return {
                ...state,
                theme: state.theme === 'black' ? 'white' : 'black'
            }
        default:
            return state
    }
}