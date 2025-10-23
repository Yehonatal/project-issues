import Link from 'next/link';
import { Timestamp } from '../components/Timestamp';
import { buttonClasses } from '../components/ui/Button';

export default async function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-neutral-950 dark:text-white">
            <header className="sticky top-0 z-40 border-b border-white/30 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/80">
                <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-8 px-4">
                    <div className="flex items-center gap-8">
                        <Link
                            href="/"
                            className="rounded-md text-xl font-semibold tracking-tight text-gray-900 transition-colors hover:text-green-600 dark:text-white"
                        >
                            Issues
                        </Link>
                        <nav className="hidden items-center gap-8 md:flex">
                            <Link
                                href="/features"
                                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Features
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/faq"
                                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                FAQ
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/signin"
                            className={buttonClasses({
                                variant: 'ghost',
                                size: 'sm',
                                className: 'px-4 text-sm',
                            })}
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/signup"
                            className={buttonClasses({
                                variant: 'solid',
                                size: 'sm',
                                className: 'px-6',
                            })}
                        >
                            Join the waitlist
                        </Link>
                    </div>
                </div>
            </header>

            <main className="mx-auto flex-1 w-full">{children}</main>

            <footer className="border-t border-white/30 bg-white/60 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-950/60">
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
                        <div className="space-y-4">
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                Issues
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-400">
                                Fast, focused project management for modern
                                product teams.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                                Product
                            </p>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <li>
                                    <Link
                                        href="/features"
                                        className="transition-colors hover:text-gray-900 dark:hover:text-white"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/pricing"
                                        className="transition-colors hover:text-gray-900 dark:hover:text-white"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/faq"
                                        className="transition-colors hover:text-gray-900 dark:hover:text-white"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                                Resources
                            </p>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <li>
                                    <Link
                                        href="/docs"
                                        className="transition-colors hover:text-gray-900 dark:hover:text-white"
                                    >
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/yourusername/mode"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-colors hover:text-gray-900 dark:hover:text-white"
                                    >
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                                Legal
                            </p>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <li>
                                    <Link
                                        href="/terms"
                                        className="transition-colors hover:text-gray-900 dark:hover:text-white"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            &copy; <Timestamp /> Mode. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
