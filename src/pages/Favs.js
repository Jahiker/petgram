import React, { Fragment } from 'react'
import { useGetFavorite } from '../hooks/useGetFavorite'
import { ListOfFavs } from '../components/ListOfFavs'

import { Helmet } from 'react-helmet'

export const Favs = () => {
  const { data, loading, error } = useGetFavorite()

  if (loading) return 'loading...'
  if (error) return 'error'

  return (
    <Fragment>
      <Helmet>
        <title>Petgram - Tus favoritos</title>
        <meta name="description" content="Aqui podras encontrar tus imagenes favoritas" />
      </Helmet>
      <ListOfFavs favs={data.favs} />
    </Fragment>
  )
}
