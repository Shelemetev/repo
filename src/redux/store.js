import { combineReducers, configureStore } from '@reduxjs/toolkit'
import homeReducer from './main-reducer';
import loaderReducer from './loader-reducer';

const reducersData = combineReducers({
    homeData: homeReducer,
    loaderData: loaderReducer
})

const store = configureStore({
    reducer: reducersData,
})

export default store