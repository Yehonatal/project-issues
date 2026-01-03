import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { AuthProvider } from '@/lib/auth-context';
import { getCurrentUser } from '@/lib/dal';

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

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getCurrentUser();

    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetBrainsMono.variable} bg-surface-canvas text-text-primary antialiased`}
            >
                <AuthProvider
                    userId={user?.id || null}
                    email={user?.email || null}
                >
                    <Toaster position="top-right" />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
