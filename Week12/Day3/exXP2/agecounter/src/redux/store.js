import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import thunk from 'redux-thunk'

const logger = (store) => (next) => (action) => {
        next(action)
        console.log(`caught in the middleware -> Age:${store.getState().age}`);
}

const store = createStore(reducer, applyMiddleware(logger ,thunk));
export default store;