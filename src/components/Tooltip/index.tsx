import { ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { useTheme } from '../../hooks/Theme'

interface TooltipProps {
  children: ReactNode
  title: string
}

export function Tooltip({ children, title }: TooltipProps) {
  const { theme } = useTheme()

  const isDark = theme.title === 'dark'
  return (
    <TooltipPrimitive.Provider delayDuration={10}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipContent isdark={isDark}>
          {title}
          <TooltipArrow isdark={isDark} />
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
