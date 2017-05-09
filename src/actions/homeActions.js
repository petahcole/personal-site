import React from 'react';
import DataApi from '../api/DataApi';

export function loadDataSuccess(data)   {
    return { type: 'LOAD_DATA_SUCCESS', data}
}

export function loadData()  {
    return function(dispatch)   {
        return DataApi.getAllData().then(data  =>   {
            dispatch(loadDataSuccess(data))
        }).catch(error  =>  {
            throw(error);
        });
    }
}