import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

import { Layout } from '../components/Layout';

import { useParams } from "react-router-dom";

export const Detail = ({ detailId }) => {
  let params = useParams();
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={params.detailId} />
    </Layout>
  )
}
