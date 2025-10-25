import { cn } from '@/lib/utils';
import React from 'react';

type BadgeVariant =
    | 'default'
    | 'secondary'
    | 'outline'
    | 'success'
    | 'warning'
    | 'error';

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
        default: 'bg-green-50 text-green-700 border border-green-200',
        secondary:
            'bg-surface-subtle text-text-primary border border-border-subtle',
        outline:
            'border border-border-muted text-text-primary bg-transparent hover:bg-surface-subtle',
        success: 'bg-green-50 text-green-700 border border-green-200',
        warning: 'bg-amber-50 text-amber-700 border border-amber-200',
        error: 'bg-red-50 text-red-700 border border-red-200',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium uppercase tracking-wide transition-colors',
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
