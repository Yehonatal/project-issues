import Link from 'next/link';
import { buttonClasses } from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '../components/ui/Card';
import {
    ArrowRight,
    Zap,
    Users,
    BarChart3,
    Keyboard,
    GitBranch,
    Sparkles,
} from 'lucide-react';

export default async function LandingPage() {
    const features = [
        {
            icon: Zap,
            title: 'Lightning Fast',
            description:
                'Built for speed. Real-time updates, optimistic UI, and instant search keep your team moving forward.',
        },
        {
            icon: Keyboard,
            title: 'Keyboard First',
            description:
                'Command palette and shortcuts for everything. Navigate, create, and manage issues without touching your mouse.',
        },
        {
            icon: Users,
            title: 'Team Collaboration',
            description:
                'Real-time sync, mentions, and comments. Everyone stays aligned on what matters most.',
        },
        {
            icon: BarChart3,
            title: 'Powerful Insights',
            description:
                'Track velocity, cycle time, and team performance with built-in analytics and reporting.',
        },
        {
            icon: GitBranch,
            title: 'Git Integration',
            description:
                'Connect with GitHub and GitLab. Automatically close issues when PRs merge.',
        },
        {
            icon: Sparkles,
            title: 'AI-Powered',
            description:
                'Smart categorization, auto-labeling, and AI-assisted sprint planning to save time.',
        },
    ];

    const stats = [
        {
            label: 'Faster Triage',
            value: '3x',
            description: 'Issues resolved with keyboard shortcuts',
        },
        {
            label: 'Team Velocity',
            value: '+40%',
            description: 'Average increase in sprint completion',
        },
        {
            label: 'Active Teams',
            value: '2,000+',
            description: 'Product teams shipping with Issues',
        },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="relative overflow-hidden bg-surface-canvas">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent" />

                    <div className="container relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
                        <div className="mx-auto max-w-4xl text-center space-y-8">
                            <div className="flex items-center justify-center">
                                <Badge variant="success" className="shadow-sm">
                                    <Sparkles className="h-3 w-3  mr-2" />
                                    Linear-inspired issue tracker
                                </Badge>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-tight">
                                The issue tracker for{' '}
                                <span className=" from-green-600 to-green-500 bg-clip-text text-transparent">
                                    fast-moving teams
                                </span>
                            </h1>

                            <p className="mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed">
                                Project Issues brings clarity to your workflow.
                                Plan sprints, track progress, and ship faster
                                with a keyboard-first interface built for modern
                                product teams.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                                <Link
                                    href="/signup"
                                    className={buttonClasses({
                                        variant: 'solid',
                                        size: 'lg',
                                    })}
                                >
                                    Get started free
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/features"
                                    className={buttonClasses({
                                        size: 'lg',
                                        variant: 'ghost',
                                    })}
                                >
                                    See how it works
                                </Link>
                            </div>

                            <p className="text-sm text-text-muted pt-4">
                                Trusted by 2,000+ product teams worldwide
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20 border-y border-border-subtle bg-surface-subtle">
                    <div className="container mx-auto max-w-6xl px-6">
                        <div className="grid gap-8 sm:grid-cols-3">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl border border-border-subtle bg-surface-elevated p-8 shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300" />

                                    <div className="relative text-center space-y-2">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
                                            {stat.label}
                                        </p>
                                        <p className="text-4xl font-bold text-text-primary">
                                            {stat.value}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-28">
                    <div className="container mx-auto max-w-6xl px-6 space-y-16">
                        <div className="mx-auto max-w-3xl text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                                Everything you need to ship faster
                            </h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Built for product teams who value speed,
                                clarity, and beautiful design.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature, index) => (
                                <Card
                                    key={index}
                                    hoverable
                                    className="group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300" />

                                    <CardHeader className="relative space-y-4 pb-3">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 border border-green-200 text-green-600">
                                            <feature.icon
                                                className="h-5 w-5"
                                                strokeWidth={2}
                                            />
                                        </div>
                                        <CardTitle className="text-lg font-semibold group-hover:text-green-600 transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative text-sm text-text-secondary leading-relaxed">
                                        {feature.description}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-surface-subtle">
                    <div className="container mx-auto max-w-6xl px-6">
                        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
                            <div className="space-y-6 text-center lg:text-left">
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                                        Work at the speed of thought
                                    </h3>
                                    <p className="text-lg text-text-secondary leading-relaxed">
                                        Command palette, keyboard shortcuts, and
                                        quick actions keep you in flow. Create
                                        issues, assign work, and navigate
                                        projects without ever leaving the
                                        keyboard.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                    <span className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-3 py-1.5 text-xs font-medium bg-surface-elevated shadow-sm text-text-primary">
                                        <kbd className="font-mono text-xs px-1.5 py-0.5 rounded bg-surface-subtle border border-border-subtle">
                                            ⌘
                                        </kbd>
                                        <kbd className="font-mono text-xs px-1.5 py-0.5 rounded bg-surface-subtle border border-border-subtle">
                                            K
                                        </kbd>
                                        <span>Command palette</span>
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-3 py-1.5 text-xs font-medium bg-surface-elevated shadow-sm text-text-primary">
                                        <kbd className="font-mono text-xs px-1.5 py-0.5 rounded bg-surface-subtle border border-border-subtle">
                                            C
                                        </kbd>
                                        <span>Create issue</span>
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-3 py-1.5 text-xs font-medium bg-surface-elevated shadow-sm text-text-primary">
                                        <kbd className="font-mono text-xs px-1.5 py-0.5 rounded bg-surface-subtle border border-border-subtle">
                                            /
                                        </kbd>
                                        <span>Search</span>
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
                                    <Link
                                        href="/features"
                                        className={buttonClasses({
                                            variant: 'solid',
                                            size: 'md',
                                        })}
                                    >
                                        Explore features
                                    </Link>
                                    <Link
                                        href="/pricing"
                                        className={buttonClasses({
                                            variant: 'outline',
                                            size: 'md',
                                        })}
                                    >
                                        View pricing
                                    </Link>
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-end">
                                <Card className="w-full max-w-lg shadow-md">
                                    <CardHeader className="space-y-3 border-b border-border-subtle pb-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-semibold text-text-primary">
                                                Quick Actions
                                            </span>
                                            <span className="inline-flex items-center gap-1 rounded border border-border-subtle px-2 py-0.5 text-xs font-medium text-text-secondary bg-surface-subtle">
                                                <kbd className="font-mono">
                                                    ⌘K
                                                </kbd>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Type a command or search..."
                                            className="w-full rounded-lg border border-border-subtle bg-surface-subtle px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500"
                                            disabled
                                        />
                                    </CardHeader>
                                    <CardContent className="space-y-1 p-3">
                                        {[
                                            {
                                                label: 'Create new issue',
                                                shortcut: 'C',
                                            },
                                            {
                                                label: 'Assign to me',
                                                shortcut: 'A',
                                            },
                                            {
                                                label: 'Change priority',
                                                shortcut: 'P',
                                            },
                                            {
                                                label: 'Add to sprint',
                                                shortcut: 'S',
                                            },
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-sm transition-all hover:bg-surface-subtle hover:border-border-subtle cursor-pointer"
                                            >
                                                <span className="text-text-primary group-hover:text-green-600 transition-colors">
                                                    {item.label}
                                                </span>
                                                <span className="inline-flex items-center gap-1 rounded border border-border-subtle px-1.5 py-0.5 text-xs font-medium text-text-secondary bg-surface-elevated font-mono">
                                                    {item.shortcut}
                                                </span>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-6">
                        <div className="relative overflow-hidden rounded-2xl border border-green-600 bg-gradient-to-br from-green-600 via-green-500 to-green-600 p-12 md:p-16 text-center shadow-lg">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

                            <div className="relative space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                    Ready to ship faster?
                                </h2>
                                <p className="mx-auto max-w-2xl text-lg text-white/90 leading-relaxed">
                                    Join thousands of teams using Project Issues
                                    to plan, track, and ship better products.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                                    <Link
                                        href="/signup"
                                        className={buttonClasses({
                                            variant: 'solid',
                                            size: 'lg',
                                            className:
                                                'bg-white hover:bg-white/90 text-green-600 border-white hover:border-white/90',
                                        })}
                                    >
                                        Start free trial
                                    </Link>
                                    <Link
                                        href="/pricing"
                                        className={buttonClasses({
                                            variant: 'outline',
                                            size: 'lg',
                                            className:
                                                'border-white/40 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm',
                                        })}
                                    >
                                        See pricing
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
