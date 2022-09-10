import styled from 'styled-components'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export const TooltipContent = styled(TooltipPrimitive.Content)`
  background-color: ${(props) => props.theme.colors.background};
  padding: 0.75rem 1rem;
  border-radius: 5px;
  font-size: 0.875rem;
  box-shadow: ${(props) => props.theme.colors.placeholder};
`

export const TooltipArrow = styled(TooltipPrimitive.Arrow)`
  fill: ${(props) => props.theme.colors.background};
`
