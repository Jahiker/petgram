import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

import { useParams } from "react-router-dom";

export const Detail = () => {
  let params = useParams();
  return (
    <PhotoCardWithQuery id={params.detailId} />
  )
}
