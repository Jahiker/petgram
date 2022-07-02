import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './style'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, src = DEFAULT_IMAGE, likes = 0 }) {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const Icon = !!liked ? MdOutlineFavorite : MdOutlineFavoriteBorder

  return (
    <Article ref={element}>
      {show && <Fragment>
        <a href={`/?detail=${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </a>
        <Button onClick={() => setLiked(!liked)}>
          <Icon size='32px' />{likes} Likes!
        </Button>
      </Fragment>}
    </Article>
  )
}
