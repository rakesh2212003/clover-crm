import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../../context/reducers'

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.REACT_APP_APPLICATION_ENV !== 'production',
})

export default store;