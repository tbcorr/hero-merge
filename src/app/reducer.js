import { combineReducers } from 'redux';
import { hero } from 'hero/reducers.js';

const appReducer = combineReducers({
    hero
});

export default appReducer;