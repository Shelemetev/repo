import React from "react"
import s from "./News.module.css"
import logo from '../../img/logo.svg'
import NewsBlock from './NewsBlock/NewsBlock';

const News = React.memo(({date}) => {
    return (
        <div className={s.news}>
            <header className={s.header}>
                    <img src={logo} className={s.header__img} />
                    <p className={s["home__inner-text"]}>{date}</p>
            </header> 
            <div className={s.header__inner}>
                <NewsBlock/>
            </div>
        </div>
    )
})

export default News
