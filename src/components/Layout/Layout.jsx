import React from 'react'
import { LayoutContainer } from './LayoutStyled'

export const Layout = ({ children }) => {
  return (
      <LayoutContainer>{children}</LayoutContainer>
  )
}
