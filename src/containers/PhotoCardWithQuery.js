import React from 'react'
import { Query } from '@apollo/client/react/components';
import { gql } from "@apollo/client"
import { PhotoCard } from '../components/PhotoCard'
import { PhotoCardPlaceholder } from '../components/PhotoCard/PhotoCardPlaceholder';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  const { photo } = data || { photo: {} };
  if (loading) return <PhotoCardPlaceholder />
  if (error) return <h1>Error...</h1>
  if (data) return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    { renderProp }
  </Query>
)
