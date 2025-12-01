import {
    CheckCircle2,
    Command,
    GaugeCircle,
    Layers,
    Radar,
    Zap,
    Sparkles,
    Target,
} from 'lucide-react';
import Link from 'next/link';
import { buttonClasses } from '@/app/components/ui/Button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/app/components/ui/Card';
import Badge from '@/app/components/ui/Badge';

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
            <section className="relative overflow-hidden bg-gradient-to-b from-surface-canvas via-surface-subtle/30 to-surface-canvas">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent"></div>

                <div className="container relative mx-auto max-w-5xl px-6 py-24 md:py-32 text-center space-y-8">
                    <Badge variant="success" className="shadow-sm">
                        <Sparkles className="h-3.5 w-3.5  mr-2" />
                        Product Pillars
                    </Badge>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-tight">
                        Everything you need to keep{' '}
                        <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                            product development
                        </span>{' '}
                        in sync
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">
                        Issues brings planning, execution, and reporting into
                        one clean workspace. Built for teams who live in their
                        issue tracker all day.
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="container mx-auto max-w-6xl px-6 space-y-16">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {featureGroups.map((feature, index) => (
                            <Card
                                key={feature.title}
                                hoverable
                                className="group relative overflow-hidden bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 backdrop-blur-xl border-border-subtle hover:border-border-muted"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300"></div>

                                <CardHeader className="relative space-y-6">
                                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 text-green-600 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                                        <feature.icon
                                            size={28}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <CardTitle className="text-xl font-semibold text-text-primary group-hover:text-green-600 transition-colors duration-200">
                                            {feature.title}
                                        </CardTitle>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </CardHeader>

                                <CardContent className="relative space-y-3">
                                    {feature.bullets.map((bullet) => (
                                        <div
                                            key={bullet}
                                            className="flex items-start gap-3 text-sm text-text-muted"
                                        >
                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                                            <span className="leading-relaxed">
                                                {bullet}
                                            </span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-gradient-to-b from-surface-canvas via-surface-subtle/20 to-surface-canvas">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_1fr] items-center rounded-3xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-8 md:p-12 backdrop-blur-xl shadow-elevated">
                        <div className="space-y-8">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 text-green-600">
                                <Target size={24} strokeWidth={1.5} />
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                                    Automate the busywork, focus on what matters
                                </h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Create automation rules once and let Issues
                                    handle the rest — close issues when PRs
                                    merge, notify Slack, or assign on-call
                                    engineers automatically.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    'Auto-assign owners',
                                    'Escalate SLA breaches',
                                    'Sync status to Slack',
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-4 py-2 text-sm font-medium bg-surface-elevated/90 backdrop-blur-md shadow-sm text-text-secondary hover:border-green-500/30 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Card className="shadow-elevated bg-gradient-to-br from-surface-elevated/95 to-surface-subtle/80 backdrop-blur-xl border-border-subtle">
                            <CardHeader className="space-y-3 border-b border-border-subtle/50 pb-6">
                                <CardTitle className="text-lg font-semibold text-text-primary">
                                    Workflow Recipe
                                </CardTitle>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    When a high-priority bug is opened, notify
                                    the incident squad and assign the on-call
                                    engineer.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-2 p-4">
                                {[
                                    {
                                        label: 'Trigger: Issue created',
                                        step: 1,
                                    },
                                    {
                                        label: 'Condition: Priority = High',
                                        step: 2,
                                    },
                                    {
                                        label: 'Action: Assign on-call',
                                        step: 3,
                                    },
                                    {
                                        label: 'Action: Post to #incidents',
                                        step: 4,
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="group flex items-center justify-between rounded-lg border border-border-subtle/50 bg-surface-elevated/40 px-4 py-3 text-sm transition-all hover:bg-surface-elevated/80 hover:border-green-500/30 backdrop-blur-sm"
                                    >
                                        <span className="text-text-primary">
                                            {item.label}
                                        </span>
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-surface-subtle/60 text-xs font-medium text-text-muted">
                                            {item.step}
                                        </span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="container mx-auto max-w-6xl px-6 space-y-16">
                    <div className="mx-auto max-w-3xl text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
                            Advanced capabilities for power users
                        </h2>
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                            Go beyond basic issue tracking with tools designed
                            for teams that need more control and visibility.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {advancedCapabilities.map((item) => (
                            <Card
                                key={item.title}
                                hoverable
                                className="group relative overflow-hidden bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 backdrop-blur-xl border-border-subtle hover:border-border-muted"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300"></div>

                                <CardHeader className="relative space-y-6">
                                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 text-green-600 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                                        <item.icon
                                            size={28}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <CardTitle className="text-xl font-semibold text-text-primary group-hover:text-green-600 transition-colors duration-200">
                                            {item.title}
                                        </CardTitle>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </CardHeader>

                                <CardContent className="relative space-y-3">
                                    {item.bullets.map((bullet) => (
                                        <div
                                            key={bullet}
                                            className="flex items-start gap-3 text-sm text-text-muted"
                                        >
                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                                            <span className="leading-relaxed">
                                                {bullet}
                                            </span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br from-green-600 via-green-500 to-green-600 p-12 md:p-16 text-center shadow-elevated">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

                        <div className="relative space-y-8">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                Ready to streamline your workflow?
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                                Explore pricing, view our live roadmap, or get
                                started for free today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Link
                                    href="/signup"
                                    className={buttonClasses({
                                        variant: 'solid',
                                        size: 'lg',
                                        className:
                                            'bg-white hover:bg-white/90 text-green-600 border-white hover:border-white/90 shadow-lg hover:shadow-xl transition-all duration-200',
                                    })}
                                >
                                    Start for free
                                </Link>
                                <Link
                                    href="/pricing"
                                    className={buttonClasses({
                                        variant: 'outline',
                                        size: 'lg',
                                        className:
                                            'border-white/40 bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl',
                                    })}
                                >
                                    Compare plans →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
