import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './style'

export function ListOfPhotoCards () {
  return (
    <List>
      {[1, 2, 3, 4, 5].map(id => <PhotoCard key={id} />)}
    </List>
  )
}
