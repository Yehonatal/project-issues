import type { Config } from 'tailwindcss';

const withOpacityValue = (variable: string) => {
    return ({ opacityValue }: { opacityValue?: string }) => {
        if (opacityValue !== undefined) {
            return `rgb(var(${variable}) / ${opacityValue})`;
        }

        return `rgb(var(${variable}))`;
    };
};

const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                xl: '3rem',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
                mono: [
                    'var(--font-mono)',
                    'JetBrains Mono',
                    'ui-monospace',
                    'SFMono-Regular',
                    'Menlo',
                    'monospace',
                ],
            },
            fontSize: {
                h1: [
                    '3.5rem',
                    {
                        lineHeight: '1.05',
                        letterSpacing: '-0.04em',
                        fontWeight: '700',
                    },
                ],
                h2: [
                    '2.5rem',
                    {
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em',
                        fontWeight: '600',
                    },
                ],
                h3: [
                    '1.75rem',
                    {
                        lineHeight: '1.2',
                        fontWeight: '600',
                    },
                ],
                body: [
                    '1rem',
                    {
                        lineHeight: '1.55',
                    },
                ],
                'body-sm': [
                    '0.875rem',
                    {
                        lineHeight: '1.5',
                    },
                ],
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                DEFAULT: 'var(--radius-md)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
            },
            colors: {
                brand: {
                    50: withOpacityValue('--color-brand-50'),
                    100: withOpacityValue('--color-brand-100'),
                    200: withOpacityValue('--color-brand-200'),
                    300: withOpacityValue('--color-brand-300'),
                    400: withOpacityValue('--color-brand-400'),
                    500: withOpacityValue('--color-brand-500'),
                    DEFAULT: withOpacityValue('--color-brand-500'),
                    600: withOpacityValue('--color-brand-600'),
                    700: withOpacityValue('--color-brand-700'),
                    800: withOpacityValue('--color-brand-800'),
                    900: withOpacityValue('--color-brand-900'),
                },
                green: {
                    50: withOpacityValue('--color-green-50'),
                    100: withOpacityValue('--color-green-100'),
                    200: withOpacityValue('--color-green-200'),
                    300: withOpacityValue('--color-green-300'),
                    400: withOpacityValue('--color-green-400'),
                    500: withOpacityValue('--color-green-500'),
                    DEFAULT: withOpacityValue('--color-green-500'),
                    600: withOpacityValue('--color-green-600'),
                    700: withOpacityValue('--color-green-700'),
                    800: withOpacityValue('--color-green-800'),
                    900: withOpacityValue('--color-green-900'),
                },
                neutral: {
                    50: withOpacityValue('--color-neutral-50'),
                    100: withOpacityValue('--color-neutral-100'),
                    200: withOpacityValue('--color-neutral-200'),
                    300: withOpacityValue('--color-neutral-300'),
                    400: withOpacityValue('--color-neutral-400'),
                    500: withOpacityValue('--color-neutral-500'),
                    600: withOpacityValue('--color-neutral-600'),
                    700: withOpacityValue('--color-neutral-700'),
                    800: withOpacityValue('--color-neutral-800'),
                    900: withOpacityValue('--color-neutral-900'),
                },
                surface: {
                    canvas: withOpacityValue('--surface-canvas'),
                    subtle: withOpacityValue('--surface-subtle'),
                    elevated: withOpacityValue('--surface-elevated'),
                    muted: withOpacityValue('--surface-muted'),
                    overlay: withOpacityValue('--surface-overlay'),
                },
                text: {
                    primary: withOpacityValue('--text-primary'),
                    secondary: withOpacityValue('--text-secondary'),
                    muted: withOpacityValue('--text-muted'),
                    inverse: withOpacityValue('--text-inverse'),
                },
                border: {
                    subtle: withOpacityValue('--border-subtle'),
                    muted: withOpacityValue('--border-muted'),
                    strong: withOpacityValue('--border-strong'),
                    focus: withOpacityValue('--border-focus'),
                },
                status: {
                    success: {
                        100: withOpacityValue('--status-success-100'),
                        500: withOpacityValue('--status-success-500'),
                        600: withOpacityValue('--status-success-600'),
                    },
                    warning: {
                        100: withOpacityValue('--status-warning-100'),
                        500: withOpacityValue('--status-warning-500'),
                        600: withOpacityValue('--status-warning-600'),
                    },
                    error: {
                        100: withOpacityValue('--status-error-100'),
                        500: withOpacityValue('--status-error-500'),
                        600: withOpacityValue('--status-error-600'),
                    },
                },
                label: {
                    amber: withOpacityValue('--label-amber'),
                    emerald: withOpacityValue('--label-emerald'),
                    cyan: withOpacityValue('--label-cyan'),
                    pink: withOpacityValue('--label-pink'),
                    slate: withOpacityValue('--label-slate'),
                },
            },
            boxShadow: {
                xs: 'var(--shadow-xs)',
                subtle: 'var(--shadow-sm)',
                elevated: 'var(--shadow-md)',
                focus: '0 0 0 1px rgb(var(--border-focus) / 0.35), 0 12px 24px -18px rgba(17, 24, 39, 0.4)',
            },
        },
    },
    plugins: [],
    darkMode: 'media',
} satisfies Config;

export default config;
