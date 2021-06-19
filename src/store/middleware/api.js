import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const apiCallBegan = createAction('api/callBegan');
const apiCallSuccess = createAction('api/callSuccess');
const apiCallFailed = createAction('api/callFailed');

const api = ({ dispatch }) => next => async action => {
    if(action.type !== apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onFailed } = action.payload;

    if(onStart) dispatch({ type: onStart });

    next(action);

    try {
        const res = await axios.request({
            baseURL: 'http://localhost:9000',
            url,
            method,
            data
        });
        dispatch(apiCallSuccess(res.data));
        if(onSuccess) dispatch({ type: onSuccess, payload: res.data })

    } catch (err) {

        dispatch(apiCallFailed(err.message));
        if(onFailed) dispatch({ type: onFailed, payload: err.message })
    }
}

export default api