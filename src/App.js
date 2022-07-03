import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCardsContainer } from './containers/ListOfPhotoCards'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail');

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Fragment>
              <ListOfCategories />
              <ListOfPhotoCardsContainer categoryId={1} />
          </Fragment>
      }
    </div>
  )
}
