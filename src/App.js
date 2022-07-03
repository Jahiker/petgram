import React from 'react'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      </BrowserRouter>
    </div>
  )
}
