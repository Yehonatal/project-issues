import Link from 'next/link';
import { Timestamp } from '../components/Timestamp';
import { buttonClasses } from '../components/ui/Button';
import { CheckSquare } from 'lucide-react';

export default async function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-surface-canvas text-text-primary">
            <header className="sticky top-0 z-50 nav-glass">
                <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-8 px-6">
                    <div className="flex items-center gap-10">
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 group"
                        >
                            <CheckSquare
                                className="h-5 w-5 text-green-600 transition-all duration-300 group-hover:text-green-500 group-hover:scale-110"
                                strokeWidth={2.5}
                            />
                            <span className="text-lg font-bold tracking-tight text-text-primary group-hover:text-green-600 transition-colors duration-300">
                                Issues
                            </span>
                        </Link>
                        <nav className="hidden items-center gap-8 md:flex">
                            <Link
                                href="/features"
                                className="text-sm font-medium text-text-secondary transition-all duration-300 hover:text-text-primary relative group"
                            >
                                Features
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-sm font-medium text-text-secondary transition-all duration-300 hover:text-text-primary relative group"
                            >
                                Pricing
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                            <Link
                                href="/faq"
                                className="text-sm font-medium text-text-secondary transition-all duration-300 hover:text-text-primary relative group"
                            >
                                FAQ
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/signin"
                            className={buttonClasses({
                                variant: 'ghost',
                                size: 'sm',
                                className: 'hidden sm:inline-flex',
                            })}
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/signup"
                            className={buttonClasses({
                                variant: 'solid',
                                size: 'sm',
                            })}
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto flex-1 w-full bg-surface-canvas">
                {children}
            </main>

            <footer className="relative border-t border-border-subtle bg-surface-subtle">
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 via-transparent to-transparent pointer-events-none" />

                <div className="mx-auto max-w-7xl px-6 py-16 relative">
                    <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
                        <div className="space-y-5">
                            <Link
                                href="/"
                                className="flex items-center gap-2.5 group w-fit"
                            >
                                <CheckSquare
                                    className="h-5 w-5 text-green-600 transition-all duration-300 group-hover:text-green-500 group-hover:scale-110"
                                    strokeWidth={2.5}
                                />
                                <span className="text-base font-bold tracking-tight text-text-primary group-hover:text-green-600 transition-colors duration-300">
                                    Issues
                                </span>
                            </Link>
                            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
                                A fast, keyboard-first issue tracker for modern
                                product teams.
                            </p>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://github.com/Yehonatal/project-issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-surface-elevated/50 border border-border-subtle text-text-secondary transition-all hover:bg-surface-elevated hover:text-text-primary hover:border-green-500/30 hover:shadow-glow"
                                    aria-label="GitHub"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-text-primary">
                                Product
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link
                                        href="/features"
                                        className="text-text-secondary transition-colors hover:text-green-600"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/pricing"
                                        className="text-text-secondary transition-colors hover:text-green-600"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/faq"
                                        className="text-text-secondary transition-colors hover:text-green-600"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-text-primary">
                                Resources
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link
                                        href="/docs"
                                        className="text-text-secondary transition-colors hover:text-green-600"
                                    >
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/Yehonatal/project-issues"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary transition-colors hover:text-green-600"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href="/changelog"
                                        className="text-text-secondary transition-colors hover:text-green-600"
                                    >
                                        Changelog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-text-primary">
                                Legal
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link
                                        href="/terms"
                                        className="text-text-secondary transition-colors hover:text-green-600"
                                    >
                                        Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/privacy"
                                        className="text-text-secondary transition-colors hover:text-green-600"
                                    >
                                        Privacy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-text-muted">
                            &copy; <Timestamp /> Issues. All rights reserved.
                        </p>
                        <p className="text-xs text-text-muted/80">
                            Built with Next.js, Tailwind CSS, and Supabase
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
