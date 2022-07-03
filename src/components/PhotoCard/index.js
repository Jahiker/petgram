import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img } from './style'
import { FavButton } from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, src = DEFAULT_IMAGE, likes = 0 }) {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {show && <Fragment>
        <Link to={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </Link>
        <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
      </Fragment>}
    </Article>
  )
}
