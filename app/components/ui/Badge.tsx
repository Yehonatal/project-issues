import { cn } from '@/lib/utils';
import React from 'react';

type BadgeVariant =
    | 'default'
    | 'secondary'
    | 'outline'
    | 'success'
    | 'warning'
    | 'danger';
type StatusType = 'backlog' | 'todo' | 'in_progress' | 'done';
type PriorityType = 'low' | 'medium' | 'high';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    status?: StatusType;
    priority?: PriorityType;
}

export default function Badge({
    className,
    variant = 'default',
    children,
    status,
    priority,
    ...props
}: BadgeProps) {
    const getBadgeVariant = (): BadgeVariant => {
        if (status) {
            switch (status) {
                case 'backlog':
                    return 'secondary';
                case 'todo':
                    return 'default';
                case 'in_progress':
                    return 'warning';
                case 'done':
                    return 'success';
                default:
                    return 'default';
            }
        }

        if (priority) {
            switch (priority) {
                case 'low':
                    return 'secondary';
                case 'medium':
                    return 'default';
                case 'high':
                    return 'danger';
                default:
                    return 'default';
            }
        }

        return variant;
    };

    const variantStyles: Record<BadgeVariant, string> = {
        default:
            'bg-surface-subtle text-text-primary border border-border-subtle shadow-sm',
        secondary:
            'bg-surface-elevated text-text-secondary border border-border-subtle',
        outline: 'bg-transparent text-text-primary border border-border-subtle',
        success:
            'bg-green-500/10 text-green-500 border border-green-500/20 shadow-[0_0_10px_rgba(0,229,153,0.1)]',
        warning:
            'bg-amber-400/10 text-amber-400 border border-amber-400/20 shadow-[0_0_10px_rgba(251,191,36,0.1)]',
        danger: 'bg-red-400/10 text-red-400 border border-red-400/20 shadow-[0_0_10px_rgba(248,113,113,0.1)]',
    };

    const badgeVariant = getBadgeVariant();

    return (
        <span
            className={cn(
                'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full transition-all duration-200',
                variantStyles[badgeVariant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
