import Link from 'next/link';
import { buttonClasses } from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '../components/ui/Card';

export default async function LandingPage() {
    const highlights = [
        {
            title: 'Command palette first',
            description:
                'Switch projects, create issues, and triage faster with a global command menu built for the keyboard.',
        },
        {
            title: 'Opinionated workflows',
            description:
                'Statuses, labels, and views are tuned for product teams. Automations keep the board focused on what matters.',
        },
        {
            title: 'Powerful insights',
            description:
                'Custom dashboards, burn-up charts, and SLA alerts keep progress transparent without the busywork.',
        },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="bg-linear-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900">
                    <div className="container mx-auto max-w-5xl py-24 text-center space-y-8">
                        <div className="mb-8 flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <Badge
                                variant="secondary"
                                className="uppercase tracking-wide bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                            >
                                Linear-inspired
                            </Badge>
                            <span className="text-gray-400 dark:text-gray-500">
                                •
                            </span>
                            <span>Designed for focus and speed</span>
                        </div>
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Ship confidently with a minimal, fast issue tracker
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            Mode keeps product, design, and engineering aligned.
                            Capture issues, plan sprints, and ship with clear
                            context in a workspace that gets out of your way.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                            <Link
                                href="/signup"
                                className={buttonClasses({
                                    variant: 'solid',
                                    size: 'lg',
                                    className:
                                        'justify-center px-8 text-base font-medium bg-green-600 text-white hover:bg-green-700',
                                })}
                            >
                                Start for free
                            </Link>
                            <Link
                                href="/features"
                                className={buttonClasses({
                                    size: 'lg',
                                    variant: 'glass',
                                    className:
                                        'gap-2 justify-center text-base font-medium bg-white/10 text-gray-900 dark:text-white border-white/20 hover:bg-white/20',
                                })}
                            >
                                Explore features
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto max-w-5xl pb-8 ">
                        <div className="grid gap-8 rounded-2xl mb-8 border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-12 shadow-sm sm:grid-cols-3">
                            <div className="text-center space-y-3">
                                <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                                    Response time
                                </p>
                                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                                    &lt; 1 hour
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Teams stay unblocked with real-time updates
                                    and automations.
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                                    Cycle time
                                </p>
                                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                                    4.6 days
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Focused boards and keyboard flows reduce
                                    context switching.
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                                    Teams shipped
                                </p>
                                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                                    2k+
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Modern startups use Mode to scale their
                                    product operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto grid gap-14 py-40 max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Built for product teams that live in their issues
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            Every interaction is tuned for clarity. Mode pairs a
                            minimal aesthetic with deliberate hierarchy so your
                            team can move quickly without losing context.
                        </p>
                    </div>
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {highlights.map((highlight) => (
                                <Card
                                    key={highlight.title}
                                    hoverable
                                    className="text-center h-full"
                                >
                                    <CardHeader className="space-y-4 pb-4">
                                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {highlight.title}
                                        </CardTitle>
                                        <CardContent className="p-0 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {highlight.description}
                                        </CardContent>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-linear-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">
                    <div className="container mx-auto grid gap-14 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center max-w-6xl">
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Stay in flow with keyboard shortcuts
                                    everywhere
                                </h3>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto lg:mx-0 max-w-lg leading-relaxed">
                                    The command palette unlocks quick actions
                                    across projects, views, and triage. Capture
                                    context, assign owners, and keep momentum
                                    without reaching for the mouse.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 justify-center lg:justify-start">
                                <span className="rounded-full border border-gray-300 dark:border-white/20 px-4 py-2 font-medium bg-white/60 dark:bg-white/5">
                                    ⇧ ⌘ K
                                </span>
                                <span className="rounded-full border border-gray-300 dark:border-white/20 px-4 py-2 bg-white/60 dark:bg-white/5">
                                    Create issue
                                </span>
                                <span className="rounded-full border border-gray-300 dark:border-white/20 px-4 py-2 bg-white/60 dark:bg-white/5">
                                    Quick assign
                                </span>
                                <span className="rounded-full border border-gray-300 dark:border-white/20 px-4 py-2 bg-white/60 dark:bg-white/5">
                                    Jump to project
                                </span>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start pt-4">
                                <Link
                                    href="/pricing"
                                    className={buttonClasses({
                                        variant: 'solid',
                                        className:
                                            'justify-center px-8 py-3 bg-green-600 text-white hover:bg-green-700',
                                    })}
                                >
                                    View pricing
                                </Link>
                                <Link
                                    href="/faq"
                                    className={buttonClasses({
                                        variant: 'glass',
                                        className:
                                            'justify-center px-8 py-3 bg-white/10 text-gray-900 dark:text-white border-white/20 hover:bg-white/20',
                                    })}
                                >
                                    Why teams switch to Mode
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <Card className="w-full max-w-lg shadow-lg">
                                <CardHeader className="space-y-3 border-b border-gray-200 dark:border-white/10 pb-6">
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            Command Palette
                                        </span>
                                        <span className="text-xs">
                                            Press ⇧ ⌘ K
                                        </span>
                                    </div>
                                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Type to jump anywhere
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 p-6">
                                    {[
                                        'Create issue',
                                        'Assign to me',
                                        'Open shortcuts',
                                        'Invite teammate',
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-50 dark:hover:bg-white/10"
                                        >
                                            <span>{item}</span>
                                            <span className="rounded-md border border-gray-300 dark:border-white/20 px-2 py-1 text-xs text-gray-500 dark:text-gray-400 font-medium bg-white/60 dark:bg-white/5">
                                                ↵
                                            </span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
