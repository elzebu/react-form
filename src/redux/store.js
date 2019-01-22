import { createStore, applyMiddleware, compose } from 'redux';
import thunk from  'redux-thunk';

import * as reducers from './reducers'

const initialState = {
    count: 0,
    brands: [],
    tyres: [],
    error: ''
}

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispatching', action);
            const result  = next(action);
            console.log('[Middleware] next state', store.getState())
            return result;
        }
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers.counter, initialState, composeEnhancers(applyMiddleware(logger, thunk)));


export default store;