import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './styles'
const Loader = (props) => {
  return (
    <SpinnerOverlay className={`${props.asOverlay}`}>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
}

export default Loader
