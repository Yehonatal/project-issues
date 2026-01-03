import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import {
    ArrowRight,
    Zap,
    Layout,
    Shield,
    Code2,
    GitBranch,
    Terminal,
} from 'lucide-react';
import DemoKanban from './components/DemoKanban';

export default function MarketingPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden bg-surface-canvas">
            {/* Hero Section */}
            <section className="relative pt-22 pb-32 md:pt-48 md:pb-40 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] -z-10 opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

                <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
                    <div className="inline-flex items-center rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-sm text-primary-400 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
                        v2.0 is now live
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-text-primary mb-8 max-w-5xl mx-auto leading-[1.1]">
                        Manage projects at <br />
                        <span className="text-primary-500 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                            light speed
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
                        The issue tracker designed for high-performance teams.
                        Minimalist design, maximum efficiency.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
                        <Link href="/signup">
                            <Button
                                size="lg"
                                variant="primary"
                                className="h-12 px-8 text-base shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300"
                            >
                                Start for free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/features">
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 px-8 text-base backdrop-blur-sm bg-surface-canvas/50 border-border-subtle hover:bg-surface-elevated/50"
                            >
                                View Documentation
                            </Button>
                        </Link>
                    </div>

                    {/* Hero Image / UI Preview */}
                    <div className="relative mx-auto max-w-7xl perspective-1000">
                        <div className="relative rounded-xl border border-border-subtle bg-surface-elevated/30 backdrop-blur-xl p-2 shadow-2xl transform rotate-x-6 transition-transform duration-700 hover:rotate-x-0 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-transparent rounded-xl pointer-events-none" />

                            {/* Window Controls */}
                            <div className="absolute top-0 left-0 right-0 h-10 border-b border-border-subtle bg-surface-subtle/80 flex items-center px-4 gap-2 rounded-t-lg z-20">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <div className="ml-4 px-3 py-1 rounded-md bg-surface-elevated border border-border-subtle text-xs text-text-muted flex items-center gap-2 w-64">
                                    <Shield size={10} />
                                    project-issues.com/board
                                </div>
                            </div>

                            {/* Demo Kanban Board */}
                            <div className="rounded-lg overflow-hidden bg-surface-canvas aspect-[16/9] pt-14 pb-4 relative">
                                <DemoKanban />

                                {/* Gradient Overlay for depth */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-surface-canvas via-transparent to-transparent opacity-20" />
                            </div>
                        </div>

                        {/* Glow effect behind the board */}
                        <div className="absolute -inset-4 bg-primary-500/20 blur-3xl -z-10 rounded-[3rem] opacity-40" />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 bg-surface-subtle/30 border-y border-border-subtle">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Built for modern software teams
                        </h2>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            Everything you need to manage your projects without
                            the bloat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Zap className="w-8 h-8 text-yellow-400" />}
                            title="Lightning Fast"
                            description="Built for speed with Next.js and optimistic UI updates. No loading spinners."
                        />
                        <FeatureCard
                            icon={
                                <Layout className="w-8 h-8 text-primary-500" />
                            }
                            title="Keyboard First"
                            description="Navigate your entire workflow without touching your mouse. Shortcuts for everything."
                        />
                        <FeatureCard
                            icon={
                                <GitBranch className="w-8 h-8 text-blue-400" />
                            }
                            title="Git Integration"
                            description="Automatically link PRs to issues and update status when code is merged."
                        />
                        <FeatureCard
                            icon={
                                <Shield className="w-8 h-8 text-purple-400" />
                            }
                            title="Enterprise Security"
                            description="SOC2 compliant, SSO, and role-based access control included."
                        />
                        <FeatureCard
                            icon={
                                <Terminal className="w-8 h-8 text-pink-400" />
                            }
                            title="CLI Tool"
                            description="Create and manage issues directly from your terminal."
                        />
                        <FeatureCard
                            icon={<Code2 className="w-8 h-8 text-cyan-400" />}
                            title="API First"
                            description="Extensive GraphQL and REST APIs to build your own integrations."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-500/5" />
                <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-text-primary">
                        Ready to ship faster?
                    </h2>
                    <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
                        Join thousands of developers who have switched to a
                        better way of working.
                    </p>
                    <Link href="/signup">
                        <Button
                            size="lg"
                            variant="primary"
                            className="h-14 px-10 text-lg shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] transition-all duration-300"
                        >
                            Get Started Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="p-8 rounded-2xl bg-surface-elevated border border-border-subtle hover:border-primary-500/30 transition-colors group">
            <div className="mb-6 p-3 rounded-xl bg-surface-subtle w-fit group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-text-primary">
                {title}
            </h3>
            <p className="text-text-secondary leading-relaxed">{description}</p>
        </div>
    );
}
