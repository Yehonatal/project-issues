import Link from 'next/link';
import { CheckCircle2, Sparkles, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button, { buttonClasses } from '@/app/components/ui/Button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/app/components/ui/Card';

const plans = [
    {
        name: 'Starter',
        price: '$0',
        period: 'per month',
        description:
            'For founders and small teams shipping their first product. Unlimited collaborators with core features.',
        highlighted: false,
        cta: {
            label: 'Start for free',
            href: '/signup',
            variant: 'outline' as const,
        },
        features: [
            'Unlimited issues and projects',
            'Keyboard-driven command palette',
            'Backlog and board views',
            'Email support',
            'Real-time collaboration',
            'Markdown support',
        ],
    },
    {
        name: 'Growth',
        price: '$12',
        period: 'per user / month',
        description:
            'Advanced workflows for scaling product teams that need automation, insights, and custom fields.',
        highlighted: true,
        badge: 'Popular',
        cta: {
            label: 'Start 14-day trial',
            href: '/signup',
            variant: 'solid' as const,
        },
        features: [
            'Everything in Starter',
            'Automations & workflow recipes',
            'Cycle time & SLA reporting',
            'Priority & severity custom fields',
            'Slack + GitHub integrations',
            'Advanced analytics',
        ],
    },
    {
        name: 'Enterprise',
        price: "Let's talk",
        period: 'custom pricing',
        description:
            'Security reviews, dedicated support, and tailored onboarding for teams with advanced needs.',
        highlighted: false,
        cta: {
            label: 'Contact sales',
            href: 'mailto:sales@issues.com',
            variant: 'secondary' as const,
        },
        features: [
            'Everything in Growth',
            'Single sign-on (SAML + SCIM)',
            'Audit logs & data residency',
            'Priority incident response',
            'Customer success partner',
            'Custom SLA agreements',
        ],
    },
];

const faqs = [
    {
        question: 'Can I import issues from Linear or Jira?',
        answer: 'Yes. Issues supports CSV imports and native integrations to pull issues, labels, and history from Linear, Jira, and GitHub.',
    },
    {
        question: 'Do you offer discounts for startups?',
        answer: "We partner with accelerators and venture funds. Reach out with your details and we'll share available programs.",
    },
    {
        question: 'Is there a roadmap I can review?',
        answer: "Absolutely. Visit our public roadmap to see what's launching next and vote on the improvements that matter most.",
    },
];

export default function PricingPage() {
    return (
        <div className="flex flex-col">
            <section className="relative overflow-hidden bg-gradient-to-b from-surface-canvas via-surface-subtle/30 to-surface-canvas">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent"></div>

                <div className="container relative mx-auto max-w-5xl px-6 py-24 md:py-32 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-700 shadow-sm">
                        <Star className="h-3.5 w-3.5" />
                        Pricing
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-tight">
                        Straightforward plans built for{' '}
                        <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                            fast-moving teams
                        </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">
                        Start for free and scale as your team grows. Every plan
                        includes our keyboard-first interface, real-time
                        updates, and minimal workflow design.
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="container mx-auto max-w-6xl px-6 space-y-16">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {plans.map((plan) => (
                            <Card
                                key={plan.name}
                                hoverable
                                className={cn(
                                    'group z-1 relative bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 backdrop-blur-xl border-border-subtle hover:border-border-muted',
                                    plan.highlighted &&
                                        'ring-2 ring-green-500/30 shadow-elevated scale-105 lg:scale-110'
                                )}
                            >
                                <div
                                    className={cn(
                                        'absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 transition-all duration-300',
                                        plan.highlighted
                                            ? 'from-green-500/5 to-transparent'
                                            : 'group-hover:from-green-500/5 group-hover:to-transparent'
                                    )}
                                ></div>

                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-9999">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                                            <Sparkles className="h-3 w-3" />
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <CardHeader className="relative space-y-6 pt-10 pb-4 text-center">
                                    <CardTitle className="text-xl font-semibold text-text-primary">
                                        {plan.name}
                                    </CardTitle>
                                    <div className="space-y-2">
                                        <p className="text-4xl md:text-5xl font-bold text-text-primary">
                                            {plan.price}
                                        </p>
                                        <p className="text-sm text-text-muted">
                                            {plan.period}
                                        </p>
                                    </div>
                                    <p className="text-sm text-text-secondary leading-relaxed px-2">
                                        {plan.description}
                                    </p>
                                </CardHeader>

                                <CardContent className="relative space-y-3 pb-6">
                                    {plan.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-text-secondary"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 shrink-0" />
                                            <span className="text-left">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </CardContent>

                                <CardFooter className="relative pt-0 pb-6">
                                    <Link
                                        href={plan.cta.href}
                                        className={buttonClasses({
                                            variant: plan.cta.variant,
                                            className: cn(
                                                'w-full justify-center',
                                                plan.highlighted &&
                                                    'bg-green-600 hover:bg-green-500 border-green-600 hover:border-green-500 shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-200'
                                            ),
                                        })}
                                    >
                                        {plan.cta.label}
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-gradient-to-b from-surface-canvas via-surface-subtle/20 to-surface-canvas">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_1fr] rounded-3xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-8 md:p-12 backdrop-blur-xl shadow-elevated">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                                    Compare all plan details
                                </h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    From SOC 2 compliance to advanced analytics,
                                    view the full breakdown to find the right
                                    fit for your team.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    'Unlimited guests',
                                    'Data export',
                                    'Dedicated onboarding',
                                    'Priority support',
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-4 py-2 text-sm font-medium bg-surface-elevated/90 backdrop-blur-md shadow-sm text-text-secondary hover:border-green-500/30 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button
                                    variant="secondary"
                                    className="px-6 py-3"
                                >
                                    Download comparison
                                </Button>
                                <Button variant="outline" className="px-6 py-3">
                                    Talk to sales
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-text-primary mb-6">
                                Frequently asked questions
                            </h3>
                            {faqs.map((faq) => (
                                <Card
                                    key={faq.question}
                                    className="bg-surface-elevated/60 backdrop-blur-md border-border-subtle hover:border-border-muted transition-colors"
                                >
                                    <CardHeader className="space-y-3 p-6">
                                        <CardTitle className="text-base font-semibold text-text-primary">
                                            {faq.question}
                                        </CardTitle>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br from-green-600 via-green-500 to-green-600 p-12 md:p-16 text-center shadow-elevated">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

                        <div className="relative space-y-8">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                Need a custom rollout?
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                                We offer migration support, custom training, and
                                tailored onboarding for growing organizations.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <a
                                    href="mailto:sales@issues.com"
                                    className={buttonClasses({
                                        variant: 'solid',
                                        size: 'lg',
                                        className:
                                            'bg-white hover:bg-white/90 text-green-600 border-white hover:border-white/90 shadow-lg hover:shadow-xl transition-all duration-200',
                                    })}
                                >
                                    Contact sales
                                </a>
                                <Link
                                    href="/faq"
                                    className={buttonClasses({
                                        variant: 'outline',
                                        size: 'lg',
                                        className:
                                            'border-white/40 bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl',
                                    })}
                                >
                                    Review FAQs →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
