import {combineReducers, configureStore, ReducerType} from '@reduxjs/toolkit'
import homeReducer from './main-reducer.ts';
import loaderReducer from './loader-reducer.ts';

const reducersData = combineReducers({
    homeData: homeReducer,
    loaderData: loaderReducer,
})

type ReducerDataType = typeof reducersData

export type AppStateType = ReturnType<ReducerDataType>

type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: reducersData,
})

export default store