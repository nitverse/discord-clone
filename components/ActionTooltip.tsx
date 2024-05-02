"use client";

import { FC } from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';

interface ActionTooltipProps {
  label:string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

const ActionTooltip: FC<ActionTooltipProps> = ({label , children , side , align}) => {
  return (
    <div>
        <TooltipProvider>
            <Tooltip delayDuration={58}>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align}>
                    <p className='font-semibold text-sm p-2 capitalize'>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
)
}

export default ActionTooltip