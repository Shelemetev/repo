import {AsyncThunkPayloadCreator, createAction, createAsyncThunk, createReducer, PayloadAction} from '@reduxjs/toolkit'
import { News } from '../api/api.ts';
import {Data, MainState} from "./interface-redux";

const initialState  = {
    dataNews: {
        author: null as string,
        content : null as string,
        description: null as string,
        publishedAt: null as string,
        source: {id: null as string, name: null as string},
        title: null as string,
        url : null as string,
        urlToImage: null as string
    },
    date: null as string,
    page: 1,
    totalPage: 0,
    statusSearch: false,
    searchedNews: null as string
}


export const setSearchedNews = createAction<string, 'set-searched-news'>(
    'set-searched-news',
)

export const addAppleNews  = createAsyncThunk<Data, {page:number,date:string}>(
    'add-apple-news',
    async ({page,date})  => {
        const response = await News.getApple(page, date)
        console.log(response)
        return response
    }
)

export const addTeslaNews = createAsyncThunk<Data, {page:number,date:string}>(
    'add-tesla-news',
    async ({page,date}) => {
        const response = await News.getTelsa(page, date)
        console.log(response)
        return response
    }
)

export const addBusinessNews = createAsyncThunk<Data, {page:number,date:string}>(
    'add-business-news',
    async ({page,date}) => {
        const response = await News.getBusiness(page, date)
        console.log(response)
        return response
    }
)

export const addTechCrunchNews = createAsyncThunk<Data, {page:number,date:string}>(
    'add-tech-crunch-news',
    async ({page,date}) => {
        const response = await News.getTechCrunch(page, date)
        console.log(response)
        return response
    }
)

export const addWallStreetNews = createAsyncThunk<Data, { page: number, date: string }>(
    'add-wall-street-news',
    async (page ,date ) => {
        const response = await News.getWallStreet(page, date)
        console.log(response)
        return response
    }
)

export const setDate = createAction<string, "set-date">(
    "set-date"
)

export const nextPage = createAction<void, "next-page">(
    "next-page"
)

export const prevPage = createAction<void, "prev-page">(
    "prev-page"
)

export const startSearch = createAction<void, "start-search">(
    "start-search"
)

export const stopSearch = createAction<void, "stop-search">(
    "stop-search"
)

const homeReducer = createReducer(initialState, (builder)  => {
    builder.addCase(setDate, (state, action: PayloadAction<string>) => {
        state.date = action.payload
    })

    builder.addCase(setSearchedNews, (state, action) => {
        state.searchedNews = action.payload
        console.log(action.payload)
    })

    builder.addCase(addTeslaNews.fulfilled, (state, action) => {

        state.dataNews = {...action.payload.articles[0]}

        state.totalPage = action.payload.totalResults

    })

    builder.addCase(addWallStreetNews.fulfilled, (state, action) => {

        state.dataNews = {...action.payload.articles[0]}

        state.totalPage = action.payload.totalResults

    })

    builder.addCase(addAppleNews.fulfilled, (state, action) => {

        state.dataNews = {...action.payload.articles[0]}

        state.totalPage = action.payload.totalResults

    })

    builder.addCase(addBusinessNews.fulfilled, (state, action) => {

        state.dataNews = {...action.payload.articles[0]}

        state.totalPage = action.payload.totalResults

    })

    builder.addCase(addTechCrunchNews.fulfilled, (state, action) => {

        state.dataNews = {...action.payload.articles[0]}

        state.totalPage = action.payload.totalResults

    })

    builder.addCase(nextPage, (state, action: PayloadAction<void>) => {
        if (state.page <= state.totalPage) {
            state.page++
        } else {
            state.page = 1
        }
    })

    builder.addCase(prevPage, (state, action: PayloadAction<void>) => {
        if (state.page > 1) {
            state.page--
        } else {
            state.page = state.totalPage
        }
    })

    builder.addCase(startSearch, (state, action: PayloadAction<void>) => {
        state.statusSearch = true
    })

    builder.addCase(stopSearch, (state, action: PayloadAction<void>) => {
        state.statusSearch = false
    })
})

export default homeReducer