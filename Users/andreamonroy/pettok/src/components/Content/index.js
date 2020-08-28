import React from 'react'
import { ContainerContent } from './styles'
const Content = (props) => {
  return <ContainerContent {...props}>{props.children}</ContainerContent>
}

export default Content
