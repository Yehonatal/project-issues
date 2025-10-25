import Link from 'next/link';

export default function SignInPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-surface-subtle">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className="text-center text-3xl font-extrabold text-text-primary">
                    Issues
                </h1>
                <h2 className="mt-2 text-center text-2xl font-bold text-text-primary">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-surface-elevated py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-border-subtle">
                    <div className="mt-6 text-center">
                        <p className="text-sm text-text-secondary">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/signup"
                                className="font-medium text-text-primary hover:text-green-600"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
