import { cn } from '@/lib/utils';
import React from 'react';

type BadgeVariant = 'default' | 'secondary' | 'outline';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}

export default function Badge({
    className,
    variant = 'default',
    children,
    ...props
}: BadgeProps) {
    const variantStyles = {
        default:
            'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        secondary:
            'bg-white/60 text-gray-600 dark:bg-white/10 dark:text-gray-400',
        outline:
            'border border-gray-300 text-gray-600 bg-transparent dark:border-white/20 dark:text-gray-400',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide',
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
