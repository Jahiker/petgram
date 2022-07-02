import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './style'

export const ListOfPhotoCards = ({ data }) => {
  return (
    <List>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </List>
  )
}
