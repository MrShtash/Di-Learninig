import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import thunk from 'redux-thunk'

// const store = createStore(reducer);

// => action => middleware => reducer
const myMiddleWare = (store) => (next) => (action) => { // can call any name, logger/myMiddleWare/etc.
    console.log('prev state=>', store.getState());
    console.log('action=>', action);
    next(action)
    console.log('current state=>', store.getState());
}



const store = createStore(reducer, applyMiddleware(myMiddleWare, thunk));

export default store;