import React from 'react'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {

  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
        <UserLogged>
          {
            ({ isAuth }) => (
              isAuth
                ? <Routes>
                    <Route path='/favs' element={<Favs />} />
                    <Route path='/user' element={<User />} />
                  </Routes>
                : <Routes>
                    <Route path='/favs' element={<NotRegisterUser />} />
                    <Route path='/user' element={<NotRegisterUser />} />
                  </Routes>
            )
          }
        </UserLogged>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}
