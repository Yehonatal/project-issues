import { cn } from '@/lib/utils';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverable?: boolean;
    glossy?: boolean;
}

export function Card({
    className,
    children,
    hoverable = false,
    glossy = true,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                'rounded-2xl border border-border-subtle transition-all duration-300 relative',
                glossy
                    ? 'card-glossy'
                    : 'bg-surface-elevated backdrop-blur-xl shadow-md',
                hoverable && 'card-3d cursor-pointer',
                className
            )}
            {...props}
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-text-muted/20 to-transparent" />

            <div className="relative z-10">{children}</div>

            <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
                <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
            </div>
        </div>
    );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
    return (
        <div className={cn('flex flex-col p-6 pb-4', className)} {...props}>
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
                'text-lg font-semibold text-text-primary tracking-tight',
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
                'text-sm text-text-secondary leading-relaxed',
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
