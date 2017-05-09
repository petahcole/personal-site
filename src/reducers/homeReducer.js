import React from 'react';
import initialState from './initialState';

export default function homeReducer(state = initialState.data, action)  {
    switch(action.type) {
        case 'LOAD_DATA_SUCCESS':
            return action.data

    default:
        return state
    }  
}