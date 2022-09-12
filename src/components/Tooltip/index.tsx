import { ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

interface TooltipProps {
  children: ReactNode
  title: string
}

export function Tooltip({ children, title }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={10}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipContent>
          {title}
          <TooltipArrow />
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
