// your-tooltip.jsx
import React, { ReactNode, ReactElement } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    [key: string]: any;
}

export function Tooltip({
    children,
    content,
    open,
    defaultOpen,
    onOpenChange,
    ...props
}: TooltipProps) {
    return (
        <TooltipPrimitive.Root
            open={open}
            defaultOpen={defaultOpen}
            onOpenChange={onOpenChange}
        >
            <TooltipPrimitive.Trigger asChild>
                {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Content side="top" align="center" {...props}>
                {content}
                <TooltipPrimitive.Arrow width={11} height={5} />
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
    );
}