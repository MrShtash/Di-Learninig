import {combineReducers, createStore} from 'redux';
import {reducer} from './reducer';


const rootReducer = combineReducers({
    reducer,
})

const store = createStore(rootReducer);

// // for debug
// store.subscribe(() => console.log(store.getState()));
export default store;