import React from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'accent'
    | 'accent-outline'
    | 'solid'
    | 'glass';
export type ButtonSize = 'sm' | 'md' | 'lg';

const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-canvas disabled:cursor-not-allowed disabled:opacity-60 relative overflow-hidden';

const variants: Record<ButtonVariant, string> = {
    primary:
        'bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white border border-green-600/50 btn-3d glow-green hover:from-green-400 hover:via-green-500 hover:to-green-600',
    secondary:
        'bg-surface-elevated text-text-primary border border-border-muted btn-3d hover:bg-surface-subtle hover:border-border-muted backdrop-blur-xl',
    outline:
        'bg-transparent text-text-primary border border-border-muted hover:bg-surface-subtle hover:border-border-muted backdrop-blur-sm',
    ghost: 'bg-transparent text-text-secondary border-transparent hover:text-text-primary hover:bg-surface-subtle',
    accent: 'bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white border border-green-600/50 btn-3d glow-green hover:from-green-400 hover:via-green-500 hover:to-green-600',
    'accent-outline':
        'bg-transparent text-green-600 border border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50',
    solid: 'bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white border border-green-600/50 btn-3d glow-green hover:from-green-400 hover:via-green-500 hover:to-green-600',
    glass: 'bg-surface-elevated/50 text-text-primary border border-border-subtle backdrop-blur-xl hover:bg-surface-elevated hover:border-border-muted shadow-glass',
};

const sizes: Record<ButtonSize, string> = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-10 px-5 text-sm',
    lg: 'h-12 px-6 text-base',
};

export function buttonClasses({
    variant = 'primary',
    size = 'md',
    className,
    isLoading,
}: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    isLoading?: boolean;
}) {
    return cn(
        baseStyles,
        variants[variant],
        sizes[size],
        isLoading && 'opacity-70 cursor-not-allowed',
        className
    );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
}

export default function Button({
    className,
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            className={buttonClasses({
                variant,
                size,
                className,
                isLoading,
            })}
            disabled={disabled || isLoading}
            {...props}
        >
            {(variant === 'primary' ||
                variant === 'solid' ||
                variant === 'accent') && (
                <div className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity duration-300" />
            )}

            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <span className="relative z-10 flex items-center gap-2">
                {isLoading ? (
                    <>
                        <svg
                            className="h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        <span>Loading...</span>
                    </>
                ) : (
                    children
                )}
            </span>
        </button>
    );
}
