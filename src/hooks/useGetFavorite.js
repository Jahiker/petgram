import { useQuery, gql } from '@apollo/client'

const GET_FAVORITES = gql`
    query getFavs {
        favs {
            id 
            categoryId
            src
            likes
            userId
        }
    }
`

export const useGetFavorite = ()=> {
    const {data, loading, error} = useQuery(GET_FAVORITES, {
        fetchPolicy: 'cache-and-network'
    })

    console.log({data, loading, error})

    return {data , loading, error}
}
