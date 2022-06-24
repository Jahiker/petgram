import React from 'react'
import { Category } from '../Category'
import { List, Item } from './style'
import data from '../../../api/db.json'

export function ListOfCategories () {
  return (
    <List>
      {
        data.categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      }
    </List>
  )
}
