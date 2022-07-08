import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

import { Layout } from '../components/Layout';

import { useParams } from "react-router-dom";

export default () => {
  let params = useParams();
  return (
    <Layout title={`Fotografia`}>
      <PhotoCardWithQuery id={params.detailId} />
    </Layout>
  )
}
