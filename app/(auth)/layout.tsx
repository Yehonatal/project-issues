import Link from 'next/link';
import { CheckSquare } from 'lucide-react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-surface-canvas">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] -z-10 opacity-50" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent-purple/5 rounded-full blur-[100px] -z-10" />

            <div className="w-full max-w-md px-6 relative z-10">
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl  transition-transform duration-300 group-hover:scale-105">
                            <CheckSquare
                                className="h-6 w-6 text-white"
                                strokeWidth={2.5}
                            />
                        </div>
                    </Link>
                </div>

                {children}

                <div className="mt-8 text-center text-sm text-text-secondary">
                    <p>
                        &copy; {new Date().getFullYear()} Project Issues. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
