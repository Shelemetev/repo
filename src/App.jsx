import React from 'react';
import s from './App.module.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import HomeContainer from './components/HomeContainer';

const App = React.memo(() => {
  return (
    <BrowserRouter>
      <div className={s.main__wrapper}>
        <Routes>
          <Route path='/' element={<HomeContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
})

export default App;
