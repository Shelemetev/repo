import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { News } from './../api/api';

const initialState = {
    dataNews: [

    ],
    date: '',
    page: 1,
    totalPage: 0,
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
    builder.addCase(addAppleNews.fulfilled, (state, action) => {
        console.log(action.payload); 
        
        state.dataNews = [...action.payload.articles]
     
        state.totalPage = action.payload.totalResults
         
    })
    
})

export default homeReducer