import React from 'react'
import { FlexboxWrapper } from './styles'
const Flexbox = (props) => {
  return <FlexboxWrapper {...props}>{props.children}</FlexboxWrapper>
}

export default Flexbox