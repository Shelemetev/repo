import s from './Loader.module.css'
import React from "react";
import logo from '../img/logo.svg'

const Loader = React.memo(({}) => {
  return(
      <div className={s.loader__wrapper}>
            <img src={logo} className={s.loader}/>
      </div>
  )
})

export default Loader