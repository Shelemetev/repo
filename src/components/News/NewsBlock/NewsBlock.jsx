import React from 'react'
import s from './NewsBlock.module.css'

const NewsBlock = React.memo(({dataNews}) => {
    return (
        <div className={s.block}>
            <h1 className={s.block__title}>{dataNews.title}</h1>
            <h2 className={s.block__author}>{dataNews.author}</h2>
            <div className={s.block__info}>
                {dataNews.urlToImage ? <img className={s['block__info-img']} src={dataNews.urlToImage} alt="" /> : 
                    <div className={s['block__info-img--error']}>
                        <p className={s['block__img-text--error']}>NO IMG</p>
                    </div>}
                <div className={s['block__info-right']}>
                    <a href={dataNews.url} className={s['block__info-text']}>URL : {dataNews.url}</a>
                    <p className={s['block__info-text']}>Date Published: {dataNews.publishedAt}</p>
                    <p className={s['block__info-text']}>Source: {dataNews.source && dataNews.source.name}</p>
                    <p className={s['block__info-text']}>Description: {dataNews.description}</p>
                </div>
            </div>
            <p className={s['block__info-text']}>{dataNews.content}</p>
        </div>
    )
})

export default NewsBlock