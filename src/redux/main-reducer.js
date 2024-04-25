import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { News } from '../api/api';

const initialState = {
    dataNews: {

    },
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

export const nextPage = createAction(
    "next-page"
)

export const prevPage = createAction(
    "prev-page"
)

const homeReducer = createReducer(initialState, (builder) => {
    builder.addCase(setDate, (state, action) => { 
        state.date = action.payload
    })
    builder.addCase(addAppleNews.fulfilled, (state, action) => {
        console.log(action.payload); 
        
        state.dataNews = {...action.payload.articles[0]}
     
        state.totalPage = action.payload.totalResults    
    })
    builder.addCase(nextPage, (state,action) => {
        if (state.page <= state.totalPage) {
            state.page++
        } else {
            state.page = 1
        }
    })
    builder.addCase(prevPage, (state,action) => {
        if (state.page > 0) {
            state.page--
        } else {
            state.page = state.totalPage
        }
    })
})

export default homeReducer