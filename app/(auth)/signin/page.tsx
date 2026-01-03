'use client';
import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
} from '@/app/components/ui/Card';
import {
    Form,
    FormGroup,
    FormLabel,
    FormInput,
    FormError,
} from '@/app/components/ui/Form';
import { signIn, ActionResponse } from '@/app/actions/auth';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const initialState: ActionResponse = {
    success: false,
    message: '',
    errors: undefined,
};

export default function SignInPage() {
    const router = useRouter();

    const [state, formAction, isPending] = useActionState<
        ActionResponse,
        FormData
    >(async (prevState: ActionResponse, formData: FormData) => {
        try {
            const result = await signIn(formData);

            if (result.success) {
                toast.success('Signed in successfully');
                router.push('/dashboard');
                router.refresh();
            }

            return result;
        } catch (err) {
            return {
                success: false,
                message: (err as Error).message || 'An error occurred',
                errors: undefined,
            };
        }
    }, initialState);

    return (
        <Card className="bg-surface-elevated/50 backdrop-blur-xl border-border-subtle shadow-2xl">
            <CardHeader className="text-center space-y-2 pb-6">
                <CardTitle className="text-2xl font-bold tracking-tight">
                    Welcome back
                </CardTitle>
                <p className="text-sm text-text-secondary">
                    Enter your credentials to access your workspace
                </p>
            </CardHeader>

            <CardContent>
                <Form action={formAction} className="space-y-5">
                    {state?.message && !state.success && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                            {state.message}
                        </div>
                    )}
                    <FormGroup>
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <FormInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                            required
                            className="bg-surface-subtle/50"
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormInput
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            className="bg-surface-subtle/50"
                        />
                    </FormGroup>

                    <Button
                        type="submit"
                        className="w-full h-10 text-base shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300"
                        disabled={isPending}
                    >
                        {isPending ? 'Signing in...' : 'Sign in'}
                    </Button>

                    <div className="text-center text-sm text-text-secondary pt-2">
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/signup"
                            className="font-medium text-primary-400 hover:text-primary-300 transition-colors"
                        >
                            Create one now
                        </Link>
                    </div>
                </Form>
            </CardContent>
        </Card>
    );
}
