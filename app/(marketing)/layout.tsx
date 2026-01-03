import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import { CheckSquare, Github, Twitter } from 'lucide-react';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-surface-canvas text-text-primary font-sans selection:bg-primary-500/30">
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-surface-canvas/70 backdrop-blur-xl transition-all duration-300">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
                            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105">
                                <CheckSquare
                                    className="h-5 w-5 text-text-primary"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-text-primary group-hover:text-primary-400 transition-colors">
                                Issues
                            </span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6">
                            <NavLink href="/features">Features</NavLink>
                            <NavLink href="/pricing">Pricing</NavLink>
                            <NavLink href="/faq">FAQ</NavLink>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/signin">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="hidden sm:flex text-text-secondary hover:text-text-primary"
                            >
                                Sign in
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button
                                variant="primary"
                                size="sm"
                                className="shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full">{children}</main>

            <footer className="border-t border-border-subtle bg-surface-subtle/30 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

                <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div className="col-span-2 md:col-span-1 space-y-4">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded bg-primary-500 flex items-center justify-center">
                                    <CheckSquare className="h-4 w-4 text-black" />
                                </div>
                                <span className="font-bold text-text-primary">
                                    Issues
                                </span>
                            </Link>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                The issue tracker designed for high-performance
                                teams.
                            </p>
                            <div className="flex gap-4">
                                <SocialLink
                                    href="#"
                                    icon={<Twitter size={18} />}
                                />
                                <SocialLink
                                    href="#"
                                    icon={<Github size={18} />}
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-text-primary mb-4">
                                Product
                            </h4>
                            <ul className="space-y-2 text-sm text-text-secondary">
                                <li>
                                    <Link
                                        href="/features"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/pricing"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/changelog"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        Changelog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        Documentation
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-text-primary mb-4">
                                Company
                            </h4>
                            <ul className="space-y-2 text-sm text-text-secondary">
                                <li>
                                    <Link
                                        href="/about"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/careers"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-text-primary mb-4">
                                Legal
                            </h4>
                            <ul className="space-y-2 text-sm text-text-secondary">
                                <li>
                                    <Link
                                        href="/privacy"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/terms"
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        Terms
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
                        <p>
                            © {new Date().getFullYear()} Project Issues. All
                            rights reserved.
                        </p>
                        <p>
                            Designed with{' '}
                            <span className="text-primary-400">♥</span> for
                            developers.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
        </Link>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-text-secondary hover:text-text-primary hover:bg-text-primary/10 p-2 rounded-full transition-all"
        >
            {icon}
        </a>
    );
}
