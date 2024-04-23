import { combineReducers, configureStore } from '@reduxjs/toolkit'
import homeReducer from './main-reducer';

const reducersData = combineReducers({
    homeData: homeReducer,
})

const store = configureStore({
    reducer: reducersData,
})

export default store