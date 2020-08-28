import styled from '@emotion/styled'
import { device } from '../../utils/device'
export const FlexboxWrapper = styled('div')`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  grid-template-columns: ${(props) => (props.grid ? '50% 50%' : '0')};
  justify-content: ${(props) =>
    props.between
      ? 'space-between'
      : props.around
        ? 'space-around'
        : props.end
          ? 'flex-end'
          : props.start
            ? 'flex-start'
            : props.evenly ? 'space-evenly' :'center'};
  align-items: ${(props) => (props.align ? 'center' : 'none')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  @media ${device.tabletM} {
    display: ${(props) => props.mobileNone ? 'block' : 'flex'} 
  }
  @media ${device.laptopL} {
    grid-template-columns: ${(props) => (props.grid ? '12% 88%' : '0')};
  }
`
