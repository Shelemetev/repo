import React from "react"
import s from "./News.module.css"
import logo from '../../img/logo.svg'
import NewsBlock from './NewsBlock/NewsBlock';
import { NavLink } from 'react-router-dom';
import leftArrow from '../../img/left-arrow.svg'
import rightArrow from '../../img/right-arrow.svg'


const News = React.memo(({date}) => {
    return (
        <div className={s.news}>
            <header className={s.header}>
                    <NavLink to={`/`}>
                        <img src={logo} className={s.header__img} />
                    </NavLink>
                    <p className={s["home__inner-text"]}>{date}</p>
            </header> 
            <div className={s.header__inner}>
                <NewsBlock/>
                <button  className={s["home__inner-btn--left"]}>
                    <img src={leftArrow} className={s["home__inner-btn--img"]}/>
                </button>
                <button className={s["home__inner-btn--right"]}>
                    <img src={rightArrow} className={s["home__inner-btn--img"]}/>
                </button>
            </div>
        </div>
    )
})

export default News
