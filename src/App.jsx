import React, {Suspense} from 'react';
import s from './App.module.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import { HashRouter } from "react-router-dom";
import HomeContainer from './components/Home/HomeContainer.tsx';
import NewsContainer from './components/News/NewsContainer.tsx';
import img from '../src/img/Loader.gif'
import Loader from "./comon/Loader.tsx";

// element={<NewsContainer/>}

const App = React.memo(({search}) => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className={s.main__wrapper}>
        <Routes>
            <Route path='/news' element={
                    <React.Suspense fallback={<Loader/>}>
                        <NewsContainer/>
                    </React.Suspense>
            }/>
            <Route path='/' element={<HomeContainer/>}/>
        </Routes>

      </div>
      {search && <Loader/>}

    </HashRouter>
  );
})

export default App;
