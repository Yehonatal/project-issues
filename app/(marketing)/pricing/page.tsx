import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
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
            'Automations & workflow recipes',
            'Cycle time & SLA reporting',
            'Priority & severity custom fields',
            'Slack + GitHub integrations',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Let’s talk',
        period: 'custom pricing',
        description:
            'Security reviews, dedicated support, and tailored onboarding for teams with advanced needs.',
        highlighted: false,
        cta: {
            label: 'Contact sales',
            href: 'mailto:sales@mode.app',
            variant: 'secondary' as const,
        },
        features: [
            'Single sign-on (SAML + SCIM)',
            'Audit logs & data residency options',
            'Priority incident response',
            'Customer success partner',
        ],
    },
];

const faqs = [
    {
        question: 'Can I import issues from Linear or Jira?',
        answer: 'Yes. Mode supports CSV imports and native integrations to pull issues, labels, and history from Linear, Jira, and GitHub.',
    },
    {
        question: 'Do you offer discounts for startups?',
        answer: 'We partner with accelerators and venture funds. Reach out with your details and we’ll share available programs.',
    },
    {
        question: 'Is there a roadmap I can review?',
        answer: 'Absolutely. Visit our public roadmap to see what’s launching next and vote on the improvements that matter most.',
    },
];

export default function PricingPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-linear-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900">
                <div className="container mx-auto max-w-5xl py-24 text-center space-y-8">
                    <p className="text-sm font-medium uppercase tracking-wide text-green-600">
                        Pricing
                    </p>
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
                        Straightforward plans built for fast-moving teams
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Start for free and scale as your team grows. Every plan
                        includes our keyboard-first interface, real-time
                        updates, and minimal workflow design.
                    </p>
                </div>
            </section>

            {/* Plans */}
            <section className="container mx-auto grid gap-14 py-20 max-w-6xl">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            hoverable
                            className={cn(
                                'relative text-center',
                                plan.highlighted && 'ring-1 ring-green-500/30'
                            )}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}
                            <CardHeader className="space-y-5 pt-8 pb-4 text-center">
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {plan.name}
                                </CardTitle>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {plan.price}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {plan.period}
                                    </p>
                                </div>
                                <CardContent className="p-0 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {plan.description}
                                </CardContent>
                            </CardHeader>
                            <CardContent className="space-y-3 pb-6">
                                {plan.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Link
                                    href={plan.cta.href}
                                    className={buttonClasses({
                                        variant: plan.cta.variant,
                                        className:
                                            'w-full justify-center py-2.5',
                                    })}
                                >
                                    {plan.cta.label}
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Compare + FAQ */}
                <div className="grid gap-10 rounded-3xl border border-gray-200 bg-white/40 p-10 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.1fr_1fr]">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Compare all plan details
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                From SOC 2 compliance to advanced analytics,
                                view the full breakdown to find the right fit
                                for your team.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {[
                                'Unlimited guests',
                                'Data export',
                                'Dedicated onboarding',
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-gray-300 dark:border-white/20 px-4 py-1.5 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row pt-4">
                            <Button variant="secondary" className="px-8 py-3">
                                Download full comparison
                            </Button>
                            <Button variant="outline" className="px-8 py-3">
                                Talk to sales
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <Card key={faq.question}>
                                <CardHeader className="space-y-3">
                                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {faq.question}
                                    </CardTitle>
                                    <CardContent className="p-0 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </CardContent>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center justify-center gap-8 rounded-3xl border border-green-500/50 bg-linear-to-r from-green-600 to-green-700 p-12 text-white shadow-lg">
                    <div className="max-w-lg text-center space-y-3">
                        <h3 className="text-2xl font-semibold">
                            Need a custom rollout?
                        </h3>
                        <p className="text-white/80 text-lg">
                            We offer migration support, custom training, and
                            tailored onboarding for growing organizations.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a
                            href="mailto:sales@mode.app"
                            className={buttonClasses({
                                variant: 'solid',
                                className: 'px-8 py-3 justify-center',
                            })}
                        >
                            Contact sales
                        </a>
                        <Link
                            href="/faq"
                            className={buttonClasses({
                                variant: 'glass',
                                className: 'px-8 py-3 justify-center',
                            })}
                        >
                            Review FAQs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
