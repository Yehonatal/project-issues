import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

// Form
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
}

export function Form({ className, children, ...props }: FormProps) {
    return (
        <form className={cn('space-y-6', className)} {...props}>
            {children}
        </form>
    );
}

// Form Group
interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function FormGroup({ className, children, ...props }: FormGroupProps) {
    return (
        <div className={cn('space-y-2', className)} {...props}>
            {children}
        </div>
    );
}

// Form Label
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
}

export function FormLabel({ className, children, ...props }: FormLabelProps) {
    return (
        <label
            className={cn('text-sm font-semibold text-text-primary', className)}
            {...props}
        >
            {children}
        </label>
    );
}

// Form Input
type FormInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    'flex h-10 w-full rounded-md border border-border-subtle bg-surface-subtle px-3 py-2 text-sm text-text-primary placeholder:text-text-muted transition-all duration-200 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:border-border-muted disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                {...props}
            />
        );
    }
);
FormInput.displayName = 'FormInput';

// Form Textarea
type FormTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(
                    'flex min-h-24 w-full rounded-md border border-border-subtle bg-surface-subtle px-3 py-2 text-sm text-text-primary placeholder:text-text-muted transition-all duration-200 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:border-border-muted disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                {...props}
            />
        );
    }
);
FormTextarea.displayName = 'FormTextarea';

// Form Select
interface FormSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options?: Array<{ label: string; value: string }>;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
    ({ className, children, options, ...props }, ref) => {
        return (
            <div className="relative">
                <select
                    ref={ref}
                    className={cn(
                        'flex h-10 w-full appearance-none rounded-md border border-border-subtle bg-surface-subtle px-3 py-2 text-sm text-text-primary transition-all duration-200 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:border-border-muted disabled:cursor-not-allowed disabled:opacity-50',
                        className
                    )}
                    {...props}
                >
                    {options
                        ? options.map((option) => (
                              <option key={option.value} value={option.value}>
                                  {option.label}
                              </option>
                          ))
                        : children}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-muted">
                    <svg
                        className="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        );
    }
);
FormSelect.displayName = 'FormSelect';

// Form Error
interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export function FormError({ className, children, ...props }: FormErrorProps) {
    return (
        <p
            className={cn('text-xs font-medium text-red-600', className)}
            {...props}
        >
            {children}
        </p>
    );
}

// Form Description
interface FormDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export function FormDescription({
    className,
    children,
    ...props
}: FormDescriptionProps) {
    return (
        <p className={cn('text-xs text-text-muted', className)} {...props}>
            {children}
        </p>
    );
}
