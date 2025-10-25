import type { Config } from 'tailwindcss';

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
                    '2.25rem',
                    {
                        lineHeight: '2.5rem',
                        letterSpacing: '-0.02em',
                        fontWeight: '700',
                    },
                ],
                h2: [
                    '1.875rem',
                    {
                        lineHeight: '2.25rem',
                        letterSpacing: '-0.01em',
                        fontWeight: '600',
                    },
                ],
                h3: [
                    '1.5rem',
                    {
                        lineHeight: '2rem',
                        fontWeight: '600',
                    },
                ],
                body: [
                    '1rem',
                    {
                        lineHeight: '1.5rem',
                    },
                ],
                'body-sm': [
                    '0.875rem',
                    {
                        lineHeight: '1.25rem',
                    },
                ],
            },
            borderRadius: {
                sm: '0.5rem',
                DEFAULT: '0.75rem',
                md: '0.75rem',
                lg: '1rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            colors: {
                green: {
                    50: 'rgb(var(--green-50) / <alpha-value>)',
                    100: 'rgb(var(--green-100) / <alpha-value>)',
                    200: 'rgb(var(--green-200) / <alpha-value>)',
                    300: 'rgb(var(--green-300) / <alpha-value>)',
                    400: 'rgb(var(--green-400) / <alpha-value>)',
                    500: 'rgb(var(--green-500) / <alpha-value>)',
                    600: 'rgb(var(--green-600) / <alpha-value>)',
                    700: 'rgb(var(--green-700) / <alpha-value>)',
                    800: 'rgb(var(--green-800) / <alpha-value>)',
                    900: 'rgb(var(--green-900) / <alpha-value>)',
                },
                amber: {
                    50: 'rgb(var(--amber-50) / <alpha-value>)',
                    200: 'rgb(var(--amber-200) / <alpha-value>)',
                    400: 'rgb(var(--amber-400) / <alpha-value>)',
                    700: 'rgb(var(--amber-700) / <alpha-value>)',
                    800: 'rgb(var(--amber-800) / <alpha-value>)',
                    900: 'rgb(var(--amber-900) / <alpha-value>)',
                },
                red: {
                    50: 'rgb(var(--red-50) / <alpha-value>)',
                    200: 'rgb(var(--red-200) / <alpha-value>)',
                    400: 'rgb(var(--red-400) / <alpha-value>)',
                    700: 'rgb(var(--red-700) / <alpha-value>)',
                    800: 'rgb(var(--red-800) / <alpha-value>)',
                    900: 'rgb(var(--red-900) / <alpha-value>)',
                },
                dark: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    850: '#171717',
                    900: '#111827',
                    925: '#0d0d0d',
                    950: '#0a0a0a',
                },
                surface: {
                    canvas: 'rgb(var(--surface-canvas) / <alpha-value>)',
                    elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
                    subtle: 'rgb(var(--surface-subtle) / <alpha-value>)',
                },
                text: {
                    primary: 'rgb(var(--text-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
                    muted: 'rgb(var(--text-muted) / <alpha-value>)',
                },
                border: {
                    subtle: 'rgb(var(--border-subtle) / <alpha-value>)',
                    muted: 'rgb(var(--border-muted) / <alpha-value>)',
                },
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                sm: '0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
                DEFAULT:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                md: '0 8px 16px -2px rgba(0, 0, 0, 0.2), 0 4px 8px -2px rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                lg: '0 12px 24px -4px rgba(0, 0, 0, 0.3), 0 8px 12px -4px rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
                xl: '0 20px 40px -8px rgba(0, 0, 0, 0.4), 0 12px 16px -8px rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 2px 0 0 rgba(255, 255, 255, 0.1)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
                glow: '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1)',
                'glow-lg':
                    '0 0 25px rgba(34, 197, 94, 0.4), 0 0 50px rgba(34, 197, 94, 0.15), 0 0 75px rgba(34, 197, 94, 0.05)',
                glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                focus: '0 0 0 3px rgba(34, 197, 94, 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-shimmer':
                    'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
            },
            animation: {
                shimmer: 'shimmer 3s ease-in-out infinite',
                float: 'float 6s ease-in-out infinite',
                glow: 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { opacity: '0.5' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
    darkMode: 'media',
} satisfies Config;

export default config;
