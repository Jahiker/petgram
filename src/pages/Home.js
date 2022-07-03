import React, { Fragment } from 'react';
import { ListOfPhotoCardsContainer } from '../containers/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

import { useParams } from "react-router-dom";

export const Home = () => {
  let params = useParams();
  return (
    <Fragment>
        <ListOfCategories />
        <ListOfPhotoCardsContainer categoryId={params.id} />
    </Fragment>
  )
}
