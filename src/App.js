import React, {useContext, Suspense} from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import { Context } from "./Context";

//styles
import { GlobalStyle } from "./styles/GlobalStyles";

//COMPONENTS
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

// PAGES
const Favs = React.lazy(() => import ('./pages/Favs'))
const NotFound = React.lazy(() => import ('./pages/NotFound'))
const NotRegisterUser = React.lazy(() => import ('./pages/NotRegisterUser'))
const Home = React.lazy(() => import ('./pages/Home'))
const Detail = React.lazy(() => import ('./pages/Detail'))
const User = React.lazy(() => import ('./pages/User'))

export const App = () =>{
    // const  urlParams = new window.URLSearchParams(window.location.search)
    // const detailId = urlParams.get('detail')
    // console.log(detailId)
    const { isAuth } = useContext(Context)
    return (
        <Suspense fallback={<div />}>
          <BrowserRouter>
            <GlobalStyle />
            <Logo />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/pet/:id' element={<Home />} />
                <Route exact path='/detail/:id' element={<Detail />} />
                <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />}/>
                <Route exact path='/user'  element={isAuth ? <User /> : <Navigate replace to='/login' />} />
                <Route exact path='/login' element={!isAuth ? <NotRegisterUser /> : <Navigate replace to='/' />} />
                <Route path='*' element={<NotFound />} />

            </Routes>
          <NavBar />
          </BrowserRouter>
        </Suspense>
    )
} 
