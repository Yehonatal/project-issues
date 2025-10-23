import { cn } from '@/lib/utils';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverable?: boolean;
}

export function Card({
    className,
    children,
    hoverable = false,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                'rounded-2xl border border-gray-200 bg-white/60 shadow-sm backdrop-blur-sm transition-all duration-150 dark:border-white/10 dark:bg-white/5',
                hoverable && 'hover:shadow-lg hover:scale-[1.01]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
    return (
        <div className={cn('flex flex-col p-6 pb-3', className)} {...props}>
            {children}
        </div>
    );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
    return (
        <h3
            className={cn(
                'text-lg font-semibold text-gray-900 dark:text-white',
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
}

interface CardDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export function CardDescription({
    className,
    children,
    ...props
}: CardDescriptionProps) {
    return (
        <p
            className={cn(
                'text-sm text-gray-600 dark:text-gray-400',
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function CardContent({
    className,
    children,
    ...props
}: CardContentProps) {
    return (
        <div className={cn('p-6 pt-0', className)} {...props}>
            {children}
        </div>
    );
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
    return (
        <div className={cn('flex items-center p-6 pt-0', className)} {...props}>
            {children}
        </div>
    );
}
