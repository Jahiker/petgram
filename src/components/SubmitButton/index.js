import React from 'react'
import { Button } from './style'

export const SubmitButton = ({ onClick, disabled, title }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>{title}</Button>
  )
}
