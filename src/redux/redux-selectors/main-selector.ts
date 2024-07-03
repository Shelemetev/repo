import { createSelector } from "@reduxjs/toolkit"
import {NewsBlock} from "../interface-redux";
import {AppStateType} from "../store";

const selectSelf = (state : AppStateType) => state

export const getDateSelector = createSelector(selectSelf,(state) : string => {return state.homeData.date})

export const getDataNews = createSelector(selectSelf,(state) : NewsBlock => {return state.homeData.dataNews})

export const getPage = createSelector(selectSelf,(state) : number => {return state.homeData.page})

export const getStatusSearch = createSelector(selectSelf,(state) : boolean => {return state.homeData.statusSearch})

export const getSearchedNews = createSelector(selectSelf,(state) : string => {return state.homeData.searchedNews})