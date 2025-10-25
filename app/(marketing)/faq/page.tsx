import Link from 'next/link';
import { buttonClasses } from '@/app/components/ui/Button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/app/components/ui/Card';
import { HelpCircle, Mail, MessageCircle } from 'lucide-react';
import Badge from '@/app/components/ui/Badge';

const faqs = [
    {
        question: 'What is Project Issues?',
        answer: 'Project Issues is a modern, keyboard-first issue tracker inspired by Linear. It brings planning, execution, and reporting into a fast workspace designed for product teams who value speed and clarity.',
    },
    {
        question: 'How do I migrate from my current tool?',
        answer: 'You can import existing data from Linear, Jira, or GitHub using our CSV importer and native integrations. For larger workspaces, our team can help migrate custom fields and historical data.',
    },
    {
        question: 'Does it support light and dark mode?',
        answer: 'Yes. Project Issues automatically adapts to your system theme preference, with both light and dark modes fully supported. All components are designed to work beautifully in both themes.',
    },
    {
        question: 'Can I invite guests or stakeholders?',
        answer: 'Absolutely. Guests can comment on issues, follow progress, and receive updates without counting toward your seat limit. They have read-only access to your workspace.',
    },
    {
        question: 'Where can I see the roadmap?',
        answer: 'Visit our public roadmap to track upcoming features, vote on improvements, and subscribe to release notes. We ship new features every week.',
    },
    {
        question: 'Do you offer an API?',
        answer: 'Yes. Project Issues exposes a GraphQL API and webhooks so you can automate workflows, sync with internal tools, and build custom dashboards.',
    },
    {
        question: 'What integrations are available?',
        answer: 'We integrate with GitHub, GitLab, Slack, Figma, and more. Connect your tools to automatically sync issues, get notifications, and streamline your workflow.',
    },
    {
        question: 'How does billing work?',
        answer: 'We charge per user per month. The free plan includes unlimited issues and projects. Paid plans unlock automations, analytics, and integrations. Cancel anytime.',
    },
];

export default function FAQPage() {
    return (
        <div className="flex flex-col">
            <section className="relative overflow-hidden bg-surface-canvas">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent" />

                <div className="container relative mx-auto max-w-4xl px-6 py-20 md:py-24 text-center space-y-6">
                    <Badge variant="success" className="shadow-sm">
                        <HelpCircle className="h-3 w-3" />
                        Frequently Asked Questions
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
                        How can we help?
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed">
                        Find answers to common questions about Project Issues.
                        Can't find what you're looking for? Reach out to our
                        support team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                        <Link
                            href="mailto:support@issues.com"
                            className={buttonClasses({
                                size: 'md',
                                variant: 'solid',
                            })}
                        >
                            <Mail className="h-4 w-4" />
                            Contact support
                        </Link>
                        <Link
                            href="/pricing"
                            className={buttonClasses({
                                size: 'md',
                                variant: 'outline',
                            })}
                        >
                            View pricing
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 bg-surface-subtle/30">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="grid gap-6 md:gap-8">
                        {faqs.map((faq, index) => (
                            <Card
                                key={index}
                                hoverable
                                className="group border-border-subtle hover:border-border-muted bg-surface-elevated"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300 rounded-2xl" />

                                <CardHeader className="relative space-y-3 pb-3">
                                    <CardTitle className="text-lg font-semibold text-text-primary flex items-start gap-3">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold shrink-0 mt-0.5">
                                            {index + 1}
                                        </span>
                                        <span>{faq.question}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative text-sm text-text-secondary leading-relaxed pl-[52px]">
                                    {faq.answer}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24">
                <div className="container mx-auto max-w-3xl px-6">
                    <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br from-green-600 via-green-500 to-green-600 p-12 md:p-16 text-center shadow-lg">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

                        <div className="relative space-y-6">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm">
                                <MessageCircle className="h-6 w-6 text-white" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                Still have questions?
                            </h2>

                            <p className="mx-auto max-w-2xl text-lg text-white/90 leading-relaxed">
                                Join our community session every Thursday for a
                                live walkthrough, or reach out directly for a
                                personalized demo.
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
                                    Book a demo
                                </Link>
                                <Link
                                    href="/features"
                                    className={buttonClasses({
                                        variant: 'outline',
                                        size: 'lg',
                                        className:
                                            'border-white/40 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm',
                                    })}
                                >
                                    Explore features
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
