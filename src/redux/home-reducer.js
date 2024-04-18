import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { News } from './../api/api';

const initialState = {
    dataNews: [

    ],
    date: ''
}

export const addAppleNews = createAsyncThunk(
    'add-apple-news',
    async (date) => {
        const response = await News.getApple(date)
        return response
    }
)

export const setDate = createAction(
    "set-date"
)

const homeReducer = createReducer(initialState, (builder) => {
    builder.addCase(setDate, (state, action) => { 
        state.date = action.payload
    })
    builder.addMatcher(addAppleNews, (state, action) => {
        console.log(action);         
    })
    
})

export default homeReducer