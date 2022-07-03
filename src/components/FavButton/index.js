import React from 'react'
import { Button } from './style'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = !!liked ? MdOutlineFavorite : MdOutlineFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' />{likes} Likes!
    </Button>
  )
}
