import React, {useEffect, useState, useRef, FC} from "react"
import s from "./News.module.css"
import logo from '../../img/logo.svg'
import NewsBlock from './NewsBlock/NewsBlock';
import { NavLink } from 'react-router-dom';
import leftArrow from '../../img/left-arrow.svg'
import rightArrow from '../../img/right-arrow.svg'
import isDeepEqual from 'fast-deep-equal/react';
import {useDeepCompareEffect} from 'react-use'

import {newsType} from "../commonInterface/CommonInterface.ts";
import {Data} from "../../redux/interface-redux";

type Props = {
    date: string
    dataNews: {
        author: string,
        content : string,
        description: string,
        publishedAt: string,
        source: {id: string, name: string},
        title: string,
        url : string,
        urlToImage: string
    }
    search: boolean,
    page: number,
    searchedNews:string

    nextPage : () => void,
    prevPage : () => void,
    stopLoader : () => void,
    addAppleNews : (page:number,date:string) => Data,
    startLoader : () => void,
    addTeslaNews : (page: number, date: string) => Data,
    addBusinessNews : (page:number,date:string) => Data,
    addTechCrunchNews : (page:number,date:string) => Data,
    addWallStreetNews : (page:number,date:string) => Data
}

const News = React.memo(({date,nextPage,prevPage,dataNews,page,addAppleNews,stopLoader,startLoader,addTeslaNews,
                             addBusinessNews,addTechCrunchNews,addWallStreetNews,searchedNews} : Props)  => {


    console.log(searchedNews)

    useDeepCompareEffect(()=> {
        if (dataNews) {
            stopLoader()
        }
    },[dataNews])

    useEffect(() => {
        switch (searchedNews) {
            case newsType.AppleNews : {
                addAppleNews(page,date)
            }
            case newsType.TeslaNews : {
                addTeslaNews(page,date)
            }
            case newsType.BusinessNews : {
                addBusinessNews(page,date)
            }
            case newsType.TechCrunchNews : {
                addTechCrunchNews(page,date)
            }
            case newsType.WallStreetNews : {
                addWallStreetNews(page,date)
            }
        }
    },[page,date,searchedNews])

    return (
        <div className={s.news}>
            <header className={s.header}>
                    <NavLink to={`/`}>
                        <img src={logo} className={s.header__img} />
                    </NavLink>
                    <p className={s["home__inner-text"]}>{date}</p>
            </header> 
            <div className={s.header__inner}>
                <NewsBlock dataNews={dataNews}/>
                <button onClick={() => {
                    startLoader()
                    prevPage()
                }} className={s["home__inner-btn--left"]}>
                    <img draggable="false" src={leftArrow} className={s["home__inner-btn--img"]}/>
                </button>
                <button onClick={() => {
                    startLoader()
                    nextPage()
                }} className={s["home__inner-btn--right"]}>
                    <img draggable="false" src={rightArrow} className={s["home__inner-btn--img"]}/>
                </button>
            </div>
        </div>
    )
})

export default News
