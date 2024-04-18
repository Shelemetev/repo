import { createSelector } from "@reduxjs/toolkit"

const selectSelf = (state) => state

export const getDateSelector = createSelector(selectSelf,(state) => {return state.homeData.date})