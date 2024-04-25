import { createSelector } from "@reduxjs/toolkit"

const selectSelf = (state) => state

export const getDateSelector = createSelector(selectSelf,(state) => {return state.homeData.date})

export const getDataNews = createSelector(selectSelf,(state) => {return state.homeData.dataNews})

export const getPage = createSelector(selectSelf,(state) => {return state.homeData.page})