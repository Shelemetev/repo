import React, { useEffect, useState } from "react"
import s from "./News.module.css"
import logo from '../../img/logo.svg'
import NewsBlock from './NewsBlock/NewsBlock';
import { NavLink } from 'react-router-dom';
import leftArrow from '../../img/left-arrow.svg'
import rightArrow from '../../img/right-arrow.svg'


const News = React.memo(({date,nextPage,prevPage,dataNews,page,addAppleNews,stopLoader}) => {

    useEffect(() => {
        addAppleNews(page,date)
    },[page,date])

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
                <button onClick={() => prevPage()} className={s["home__inner-btn--left"]}>
                    <img draggable="false" src={leftArrow} className={s["home__inner-btn--img"]}/>
                </button>
                <button onClick={() => {nextPage() }} className={s["home__inner-btn--right"]}>
                    <img draggable="false" src={rightArrow} className={s["home__inner-btn--img"]}/>
                </button>
            </div>
        </div>
    )
})

export default News
