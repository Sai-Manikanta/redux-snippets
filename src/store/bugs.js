import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './middleware/api'
import moment from 'moment'

//[{ _id, description, resolve }]
// bugAdded, bugRemoved, bugResolved, 

const slice = createSlice({
    name: 'bugs',
    initialState: {
        loading: false,
        list: [],
        lastFetch: null
    },
    reducers: {
        bugsRequested: (bugs, action) => {
            bugs.loading = true;
        },
        bugsReceived: (bugs, action) => {
            bugs.loading = false;
            bugs.list = action.payload.data;
            bugs.lastFetch = Date.now()
        },
        bugsRequestFailed: (bugs, action) => {
            bugs.loading = false;
        },
        bugAdded: (bugs, action) => {
            bugs.list.push(action.payload.data)
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug._id === action.payload.data);
            bugs.list.splice(index, 1);
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug._id === action.payload.data);
            bugs.list[index].resolve = true;
        }
    }
});

const { 
    bugsRequested,
    bugsReceived,
    bugsRequestFailed,
    bugAdded,
    bugRemoved,
    bugResolved
} = slice.actions;

export default slice.reducer;

// action creators, to dispatch () => {} with apiCalls
export const loadBugs = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.bugs;
    const diff = moment().diff(moment(lastFetch), 'minutes');
    if(diff < 1) return;

    dispatch(apiCallBegan({
        url: '/bugs',
        onStart: bugsRequested.type,
        onSuccess: bugsReceived.type,
        onFailed: bugsRequestFailed.type
    }))
}

export const addBug = description => apiCallBegan({
    url: '/bugs',
    method: 'post',
    data: { description },
    onSuccess: bugAdded.type
});

export const removeBug = id => apiCallBegan({
    url: `/bugs/${id}`,
    method: 'delete',
    onSuccess: bugRemoved.type
});

export const resolveBug = id => apiCallBegan({
    url: `/bugs/${id}`,
    method: 'patch',
    data: { resolve: true },
    onSuccess: bugResolved.type
});