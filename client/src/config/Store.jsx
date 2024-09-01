import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../context/reducers'

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.PROJECT_ENV,
})

export default store;