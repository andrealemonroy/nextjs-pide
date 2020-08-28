import styled from '@emotion/styled'
import { device } from '../../utils/device'
export const Container = styled('div')`
  overflow: hidden;
  cursor: pointer;
  & img{
    height: 90vh;
    @media ${device.tablet} {
        width: 50vw;
        height: 100vh;
        overflow: none
    }
  }
`
