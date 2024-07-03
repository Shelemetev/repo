import { createAction, createReducer } from "@reduxjs/toolkit"

enum Actions {
    startLoader = "start-loader",
    stopLoader = "stop-loader"
}

const initialState : {search: boolean} = {
    search : false
}

export const startLoader = createAction<void, Actions.startLoader>(Actions.startLoader);

export const stopLoader = createAction<void, Actions.stopLoader>(Actions.stopLoader);

const loaderReducer = createReducer(initialState, (builder) => {
    builder.addCase(startLoader, (state,action) => {
        state.search = true
    })
    builder.addCase(stopLoader, (state,action) => {
        state.search = false
    })
})

export default loaderReducer