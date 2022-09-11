import styled from 'styled-components'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

interface ThemeProps {
  isdark: boolean
}

export const TooltipContent = styled(TooltipPrimitive.Content)<ThemeProps>`
  background-color: ${({ theme, isdark }) =>
    isdark ? theme.colors.background : theme.colors.white};
  padding: 0.75rem 1rem;
  border-radius: 5px;
  font-size: 0.875rem;
  box-shadow: ${(props) => props.theme.colors.placeholder};
  color: ${(props) => props.theme.colors.text};
`

export const TooltipArrow = styled(TooltipPrimitive.Arrow)<ThemeProps>`
  fill: ${({ theme, isdark }) =>
    isdark ? theme.colors.background : theme.colors.white};
  margin-bottom: 8px;
`
