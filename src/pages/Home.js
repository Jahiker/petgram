import React, { Fragment } from 'react';
import { ListOfPhotoCardsContainer } from '../containers/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

import { useParams } from "react-router-dom"

import { Helmet } from 'react-helmet'

const HomePage = () => {
  let params = useParams();
  return (
    <Fragment>
        <Helmet>
          <title>Petgram - tu app de fotos de mascotas</title>
          <meta name="description" content="Con Petgram puedes econtrar fotos de mascotas de todas partes del mundo" />
        </Helmet>
        <ListOfCategories />
        <ListOfPhotoCardsContainer categoryId={params.id} />
    </Fragment>
  )
}

export default React.memo(HomePage)
