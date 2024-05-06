import { createAction, createReducer } from "@reduxjs/toolkit"


const initialState = {
    search : false
}

export const startLoader = createAction("start-loader")

export const stopLoader = createAction("stop-loader")

const loaderReducer = createReducer(initialState, (builder) => {
    builder.addCase(startLoader, (state,action) => {
        state.search = true
    })
    builder.addCase(stopLoader, (state,action) => {
        state.search = false
    })
})

export default loaderReducer