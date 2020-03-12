import { createStore, applyMiddleware } from 'redux'
import * as reducers from './reducers'

const initialState = {
    theme: 'white'
}

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispaching', action)
            const result = next(action)
            console.log('[Middleware] next state', store.getState())
            return result
        }
     }
}

const store = createStore(reducers.theme, initialState, applyMiddleware(logger))

export default store