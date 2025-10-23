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
    'inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]';

const variants: Record<ButtonVariant, string> = {
    primary:
        'border-green-600 bg-green-600 text-white shadow-sm hover:bg-green-500 focus-visible:ring-green-400',
    secondary:
        'border-gray-300 bg-white text-gray-900 hover:border-gray-400 hover:bg-gray-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10',
    outline:
        'border-gray-300 bg-transparent text-gray-900 hover:border-gray-400 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5',
    ghost: 'border-transparent bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5',
    accent: 'border-green-600 bg-green-600 text-white shadow-sm hover:bg-green-500 focus-visible:ring-green-400',
    'accent-outline':
        'border-green-500 bg-transparent text-green-600 hover:bg-green-50 dark:border-green-500/70 dark:text-green-300 dark:hover:bg-green-500/10',
    solid: 'border-transparent bg-green-600 text-white shadow-sm hover:bg-green-500',
    glass: 'border-white/20 bg-white/10 text-white hover:bg-white/20 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20',
};

const sizes: Record<ButtonSize, string> = {
    sm: 'h-9 px-3 text-xs font-medium',
    md: 'h-10 px-4 text-sm font-medium',
    lg: 'h-12 px-6 text-base font-semibold',
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
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <svg
                        className="-ml-1 mr-2 h-4 w-4 animate-spin text-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-20"
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
                </div>
            ) : (
                children
            )}
        </button>
    );
}
