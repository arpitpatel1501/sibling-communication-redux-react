// Reducers -> describe how action change the state
//
// Based on action change make change into store

import messageReducer from './messageReducer';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    messageReducer:messageReducer
})

export default reducers;