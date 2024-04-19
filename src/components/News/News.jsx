import React from "react"
import s from "./News.module.css"
import logo from '../../img/logo.svg'

const News = React.memo(({date}) => {
    return (
        <div className={s.news}>
            <header className={s.header}>
                    <img src={logo} className={s.header__img} />
                    <p className={s["home__inner-text"]}>{date}</p>
            </header> 
        </div>
    )
})

export default News
