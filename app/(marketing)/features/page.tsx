import {
    CheckCircle2,
    Command,
    GaugeCircle,
    Layers,
    Radar,
    Zap,
} from 'lucide-react';
import Link from 'next/link';
import { buttonClasses } from '@/app/components/ui/Button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/app/components/ui/Card';

const featureGroups = [
    {
        title: 'Capture and triage in seconds',
        description:
            'Create issues with smart templates, attach context, and assign work without breaking flow.',
        icon: Zap,
        bullets: [
            'Keyboard-first issue creation',
            'Smart backlog prioritization',
            'Automations that route bugs',
        ],
    },
    {
        title: 'Plan with confidence',
        description:
            'Visual roadmaps, sprint planning, and capacity tracking keep everyone aligned.',
        icon: Layers,
        bullets: [
            'Timeline view with team overlays',
            'Sprint health and velocity charts',
            'Custom fields for any workflow',
        ],
    },
    {
        title: 'Stay in the loop',
        description:
            'Feeds, notifications, and automations ensure context is always within reach.',
        icon: Radar,
        bullets: [
            'Focus-aware inbox',
            'Digest summaries for leads',
            'Smart mentions with previews',
        ],
    },
];

const advancedCapabilities = [
    {
        title: 'Command palette everywhere',
        description:
            'Jump between issues, trigger workflows, or invite teammates instantly.',
        icon: Command,
        bullets: [
            'Universal search',
            'Keyboard shortcuts for everything',
            'Quick mentions and assignments',
        ],
    },
    {
        title: 'Analytics and insights',
        description:
            'Track cycle time, throughput, and SLAs with ready dashboards.',
        icon: GaugeCircle,
        bullets: [
            'Real-time metrics',
            'Custom performance dashboards',
            'Automated breach alerts',
        ],
    },
    {
        title: 'Seamless integrations',
        description: 'Connect GitHub, Slack, and Figma for automatic sync.',
        icon: CheckCircle2,
        bullets: [
            'Two-way sync with GitHub',
            'Slack notifications',
            'Figma handoff integration',
        ],
    },
];

export default function FeaturesPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-linear-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900">
                <div className="container mx-auto max-w-5xl py-24 text-center space-y-8">
                    <p className="text-sm font-medium uppercase tracking-wide text-green-600">
                        Product Pillars
                    </p>
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
                        Everything you need to keep product development in sync
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Mode brings planning, execution, and reporting into one
                        clean workspace. Built for teams who live in their issue
                        tracker all day.
                    </p>
                </div>
            </section>

            <section className="container mx-auto grid gap-14 py-20 max-w-6xl">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {featureGroups.map((feature) => (
                        <Card
                            key={feature.title}
                            hoverable
                            className="text-center"
                        >
                            <CardHeader className="space-y-4">
                                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600">
                                    <feature.icon size={24} />
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {feature.title}
                                </CardTitle>
                                <CardContent className="p-0 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </CardContent>
                            </CardHeader>
                            <CardContent className="pt-0 space-y-2">
                                {feature.bullets.map((b) => (
                                    <div
                                        key={b}
                                        className="flex items-start gap-2 text-gray-500 dark:text-gray-400 text-sm"
                                    >
                                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500"></div>
                                        <span>{b}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* --- Automation Card --- */}
                <div className="grid gap-10 rounded-3xl border border-gray-200 bg-white/40 p-10 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 md:grid-cols-[1.1fr_1fr]">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            Automate the busywork, focus on what matters
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Create automation rules once and let Mode handle the
                            rest — close issues when PRs merge, notify Slack, or
                            assign on-call engineers automatically.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {[
                                'Auto-assign owners',
                                'Escalate SLA breaches',
                                'Sync status to Slack',
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-gray-300 dark:border-white/20 px-4 py-1.5 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Card>
                        <CardHeader className="space-y-2">
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                Workflow Recipe
                            </CardTitle>
                            <CardContent className="p-0 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                When a high-priority bug is opened, notify the
                                incident squad and assign the on-call engineer.
                            </CardContent>
                        </CardHeader>
                        <CardContent className="pt-2 space-y-3">
                            {[
                                'Trigger: Issue created',
                                'Condition: Priority = High',
                                'Action: Assign on-call',
                                'Action: Post to #incidents',
                            ].map((step, i) => (
                                <div
                                    key={step}
                                    className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-3 text-sm text-gray-700 dark:text-gray-300"
                                >
                                    <span>{step}</span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Step {i + 1}
                                    </span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* --- Advanced Features --- */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {advancedCapabilities.map((item) => (
                        <Card
                            key={item.title}
                            hoverable
                            className="text-center"
                        >
                            <CardHeader className="space-y-4">
                                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600">
                                    <item.icon size={24} />
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {item.title}
                                </CardTitle>
                                <CardContent className="p-0 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </CardContent>
                            </CardHeader>
                            <CardContent className="pt-0 space-y-2">
                                {item.bullets.map((b) => (
                                    <div
                                        key={b}
                                        className="flex items-start gap-2 text-gray-500 dark:text-gray-400 text-sm"
                                    >
                                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500"></div>
                                        <span>{b}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* --- Call to Action --- */}
                <div className="flex flex-col items-center justify-center gap-8 rounded-3xl border border-green-500/50 bg-linear-to-r from-green-600 to-green-700 p-12 text-white shadow-lg">
                    <div className="max-w-lg text-center space-y-3">
                        <h3 className="text-2xl font-semibold">
                            Ready to streamline your workflow?
                        </h3>
                        <p className="text-white/80 text-lg">
                            Explore pricing, view our live roadmap, or get
                            started for free today.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/pricing"
                            className={buttonClasses({
                                variant: 'outline',
                                className:
                                    'justify-center border-white text-white hover:bg-white/10 px-8 py-3',
                            })}
                        >
                            Compare Plans
                        </Link>
                        <Link
                            href="/signup"
                            className={buttonClasses({
                                variant: 'solid',
                                className:
                                    'justify-center bg-white text-green-700 hover:bg-green-50 px-8 py-3',
                            })}
                        >
                            Start for Free
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
