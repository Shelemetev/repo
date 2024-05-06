import React from "react"
import Loader from '../img/Loader.gif'
import s from './RedirectHOC.module.css'

const RedirectHOC = (Component) => {

    const RedirectComponent = React.memo((props) => {
        if (props.search === false) {
            return <Component {...props}/>
        } else {
            return <img src={Loader} className={s.loader}/>
        }
    })
    
    return RedirectComponent
}

export default RedirectHOC