import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCardsContainer } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail');
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ detailId", detailId)

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <h1>Detail Id { detailId }</h1>
          : <Fragment>
              <ListOfCategories />
              <ListOfPhotoCardsContainer categoryId={1} />
          </Fragment>
      }
    </div>
  )
}
