import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import entitiesReducer from './entities';
import api from './middleware/api'


const store = configureStore({
    reducer: {
        entities: entitiesReducer
    },
    middleware: [
        ...getDefaultMiddleware(),
        api
    ]
});

export default store