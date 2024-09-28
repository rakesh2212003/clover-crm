import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from '../context/reducers'

const Store = configureStore({
    // reducer: rootReducer,
    devTools: process.env.REACT_APP_PROJECT_ENV === 'development',
})

export default Store;