import { createStore } from 'redux'
import * as reducers from './reducers'

const initialState = {
    theme: 'white'
}

const store = createStore(reducers.theme, initialState)

export default store