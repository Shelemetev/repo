import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { News } from './../api/api';

const initialState = {
    dataNews: [

    ]
}

export const addAppleNews = createAsyncThunk(
    'add-apple-news',
    async (date) => {
        const response = await News.getApple(date)
        return response
    }
)

const homeReducer = createReducer(initialState, (builder) => {
    builder.addMatcher(addAppleNews, (state, action) => {
        console.log(action);
    })
})

export default homeReducer