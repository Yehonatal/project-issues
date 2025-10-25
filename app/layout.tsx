import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({
    variable: '--font-sans',
    display: 'swap',
    subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
    variable: '--font-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Issues — fast issue tracking for focused teams',
    description:
        'Issues is a modern, keyboard-driven issue tracker inspired by Linear to help product teams move faster.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetBrainsMono.variable} bg-surface-canvas text-text-primary antialiased`}
            >
                <Toaster position="top-right" />
                {children}
            </body>
        </html>
    );
}
