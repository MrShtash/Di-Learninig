import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import thunk from 'redux-thunk'

const asyncCount = (store) => (next) => (action) => {
    if (action.type === 'IncrementAsync') {
        setTimeout(() => {
            next(action)
        }, 2000)
    } else {
        next(action)
    }
}

const store = createStore(reducer, applyMiddleware(asyncCount ,thunk));
export default store;