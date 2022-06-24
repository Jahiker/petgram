import React from 'react'
import { ImgWrapper, Img, Button } from './style'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, src = DEFAULT_IMAGE, likes = 0 }) {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button><MdOutlineFavoriteBorder size='32px' /> {likes} Likes!</Button>
    </article>
  )
}
