import Link from 'next/link';
import { buttonClasses } from '@/app/components/ui/Button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/app/components/ui/Card';

const faqs = [
    {
        question: 'What is Mode?',
        answer: 'Mode is a modern issue tracker inspired by Linear. It brings planning, execution, and reporting into a fast, keyboard-driven workspace.',
    },
    {
        question: 'How can I migrate from my current tool?',
        answer: 'You can import existing data from Linear, Jira, or GitHub using our CSV importer and native integrations. Our team can help migrate custom fields for larger workspaces.',
    },
    {
        question: 'Does Mode support dark mode?',
        answer: 'Yes. Mode ships with light and dark themes that adapt automatically, and you can fine-tune colors using our design tokens.',
    },
    {
        question: 'Can I invite guests or stakeholders?',
        answer: 'Absolutely. Guests can comment, follow issues, and receive updates without counting toward your seat limit.',
    },
    {
        question: 'Where can I see the roadmap?',
        answer: 'Visit the public roadmap to track what’s shipping next, vote on features, and subscribe to release notes.',
    },
    {
        question: 'Do you offer an API?',
        answer: 'Mode exposes a GraphQL API and webhooks so you can automate workflows, sync with internal tools, and build custom dashboards.',
    },
];

export default function FAQPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-linear-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900">
                <div className="container mx-auto max-w-5xl py-24 text-center space-y-8">
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
                        Answers for growing product teams
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Need something specific? Drop us a note and we&apos;ll
                        get back within one business day.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="mailto:support@mode.app"
                            className={buttonClasses({
                                size: 'sm',
                                variant: 'solid',
                                className:
                                    'justify-center px-6 py-3 bg-green-600 text-white hover:bg-green-700',
                            })}
                        >
                            Email support
                        </Link>
                        <Link
                            href="/pricing"
                            className={buttonClasses({
                                size: 'sm',
                                variant: 'outline',
                                className: 'justify-center px-6 py-3',
                            })}
                        >
                            View plans
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container mx-auto grid gap-14 py-20 max-w-6xl">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {faqs.map((faq) => (
                            <Card key={faq.question} hoverable>
                                <CardHeader className="space-y-4">
                                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {faq.question}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <Card className="border border-green-500/50 bg-linear-to-r from-green-600 to-green-700 text-white shadow-lg mx-auto max-w-3xl">
                    <CardHeader className="space-y-4 pt-8">
                        <CardTitle className="text-2xl font-semibold">
                            Still curious?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 pb-8">
                        <p className="text-white/80 text-lg mx-auto max-w-lg">
                            Join our community session every Thursday for a live
                            walkthrough, or reach out directly for a tailored
                            demo.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/signup"
                                className={buttonClasses({
                                    variant: 'solid',
                                    className: 'justify-center px-8 py-3',
                                })}
                            >
                                Book a live demo
                            </Link>
                            <Link
                                href="/features"
                                className={buttonClasses({
                                    variant: 'glass',
                                    className: 'justify-center px-8 py-3',
                                })}
                            >
                                Explore what&apos;s new
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
