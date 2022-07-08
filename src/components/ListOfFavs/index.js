import React from 'react'
import { Link, Grid, Image } from './style';

export const ListOfFavs = ({ favs = [] }) => {
  console.log('favs', favs)
  
  return (
    <Grid>
      {
        favs.map(fav => (
            <Link key={fav.id} to={`/detail/${fav.id}`} >
                <Image src={fav.src} />
            </Link>
        ))
      }
    </Grid>
  )
}
