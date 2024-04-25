import React, { useEffect, useState } from 'react'
import s from './Home.module.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../img/logo.svg"
import { NavLink } from "react-router-dom";

const Home = React.memo(({addAppleNews,date,setDate,page}) => {

    useEffect(() => {
        if(date === ''){
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0') - 1;
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();
            const day =  yyyy + '-' + mm + '-' + dd;
            setDate(day)
        }
    },[date])

    let [clietX, setClietX] = useState(window.innerWidth / 2)
    let [clietY, setClietY] = useState(window.innerHeight / 2)

    useGSAP(() => {
        let cx = window.innerWidth / 2
        let cy = window.innerHeight / 2

        let dx = clietX - cx
        let dy = clietY - cy

        let tiltX = dy / cy
        let tiltY = dx / cx

        let radius = Math.sqrt(Math.pow(tiltX, 2) + Math.pow(tiltY, 2))
        let degree = radius * 16

        gsap.to(".home__inner", 1, { transform: `rotate3d(${tiltX}, ${tiltY}, 0 ,${degree}deg)` });
    }, [clietX, clietY])

    return (
        <div onMouseMove={(e) => { setClietX(e.clientX); setClietY(e.clientY) }} className={`${s.home} ${"home"}`}>
            <header className={s.header}>
                    <img src={logo} className={s.header__img} />
                    <p className={`${s['home__inner-text']}`}>{date}</p>
            </header> 
            <div className={` ${"home__inner"} ${s.home__inner}`}>
                <div className={` ${s.home__grid} `}>
                    <NavLink onClick={() => addAppleNews(date,page)} to={`/news`} className={` ${"home__apple-news"} ${s["home__apple-news"]}`}>
                        <div onMouseEnter={() => {
                            gsap.to(".home__apple-news", 1, { scale: 1.10 });
                        }} onMouseLeave={() => {
                            gsap.to(".home__apple-news", 1, { scale: 1 });
                        }} className={`${s["home__grid-block"]}`}>
                            <img src='https://i.pinimg.com/736x/1d/20/a1/1d20a1e1ec25871f6af2ab2804ed832c.jpg' className={`${s["home__img"]}`}></img >
                            <p className={s['home__grid-text']}>Apple News</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/news`} className={`${s["home__tesla-news"]} ${"home__tesla-news"}`}>
                        <div onMouseEnter={() => {
                            gsap.to(".home__tesla-news", 1, { scale: 1.10 });
                        }} onMouseLeave={() => {
                            gsap.to(".home__tesla-news", 1, { scale: 1 });
                        }} className={`${s["home__grid-block"]}`}>
                            <img src='https://gas-kvas.com/grafic/uploads/posts/2023-10/1696455852_gas-kvas-com-p-kartinki-mashina-tesla-8.jpg' className={`${s["home__img"]}`}></img >
                            <p className={s['home__grid-text']}>Tesla News</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/news`} className={`${s["home__business-news"]} ${"home__business-news"}`}>
                        <div onMouseEnter={() => {
                            gsap.to(".home__business-news", 1, { scale: 1.10 });
                        }} onMouseLeave={() => {
                            gsap.to(".home__business-news", 1, { scale: 1 });
                        }} className={`${s["home__grid-block"]}`}>
                            <img src='https://images.squarespace-cdn.com/content/v1/5877c72c29687fa11b33e287/1486965332434-HMSUFWCAC574LH33VCFO/organization-consulting-mobile+%281%29.png' className={`${s["home__img"]}`}></img >
                            <p className={s['home__grid-text']}>Business US</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/news`} className={`${s["home__techcrunch-news"]} ${"home__techcrunch-news"}`}>
                        <div onMouseEnter={() => {
                            gsap.to(".home__techcrunch-news", 1, { scale: 1.10 });
                        }} onMouseLeave={() => {
                            gsap.to(".home__techcrunch-news", 1, { scale: 1 });
                        }} className={`${s["home__grid-block"]}`}>
                            <img src='https://ecdn2.wn.com/ph/img/67/c5/c15a06cbdc5fbfc2671f575e3e8a-large.jpg' className={`${s["home__img"]}`}></img >
                            <p className={s['home__grid-text']}>Tech Crunch News</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/news`} className={`${s["home__wallstreet-news"]} ${"home__wallstreet-news"}`}>
                        <div onMouseEnter={() => {
                            gsap.to(".home__wallstreet-news", 1, { scale: 1.10 });
                        }} onMouseLeave={() => {
                            gsap.to(".home__wallstreet-news", 1, { scale: 1 });
                        }} className={`${s["home__grid-block"]}`}>
                            <img src='https://i.pinimg.com/originals/05/8a/11/058a114f2c1914807e0b10b4c2cb92f9.jpg' className={`${s["home__img"]}`}></img >
                            <p className={s['home__grid-text']}>Wall Street News</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
})

export default Home