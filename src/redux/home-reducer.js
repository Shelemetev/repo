import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    value:0
}

const increment = createAction("ADD")

const homeReducer = createReducer(initialState, (builder) => {
    builder.addCase(increment, (state, action) => {
        state.value = action
    })
})

export default homeReducer