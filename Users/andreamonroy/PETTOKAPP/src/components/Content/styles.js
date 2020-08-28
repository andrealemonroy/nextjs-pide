import styled from '@emotion/styled'
import { device } from '../../utils/device'
export const ContainerContent = styled('span')`
  padding: ${(props) => (props.full ? '1em' : '0em')};
  max-width: 50vw;
  /* margin-bottom: ${(props) => props.margin}; */
  @media ${device.tabletM} {
    font-size: ${(props) =>
    props.large ? '1.5rem' : props.little ? '0.8rem' : '0.8rem'};
  }
  @media ${device.mobileL} {
    font-size: ${(props) =>
    props.large ? '1.2rem' : props.little ? '0.8rem' : '0.8rem'};
  }
  text-align: ${(props) =>
    props.center ? 'center' : props.right ? 'right' : 'left'};
  /* margin-bottom: 10px; */
  @media ${device.desktop} {
    font-size: ${(props) =>
    props.medium ? '1rem' : props.little ? '0.8rem' : '1rem'};
  }
  font-weight: ${(props) =>
    props.bold ? '900' : props.semibold ? '600' : '400'};
`
