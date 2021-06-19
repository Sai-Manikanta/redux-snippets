import { combineReducers } from '@reduxjs/toolkit'
import bugsReducer from './bugs'

const entitiesReducer = combineReducers({
    bugs: bugsReducer
});

export default entitiesReducer