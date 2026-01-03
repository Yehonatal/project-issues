'use client';

import React from 'react';
import Link from 'next/link';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
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
import { signUp, type ActionResponse } from '@/app/actions/auth';
import toast from 'react-hot-toast';

const initialState: ActionResponse = {
    success: false,
    message: '',
    errors: undefined,
};

export default function SignUpPage() {
    const router = useRouter();

    const [state, formAction, isPending] = useActionState<
        ActionResponse,
        FormData
    >(async (prevState: ActionResponse, formData: FormData) => {
        try {
            const result = await signUp(formData);

            if (result.success) {
                toast.success('Account created successfully');
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
                    Create account
                </CardTitle>
                <p className="text-sm text-text-secondary">
                    Start managing your projects efficiently
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
                        <FormLabel htmlFor="name">Full Name</FormLabel>
                        <FormInput
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            required
                            disabled={isPending}
                            className={`bg-surface-subtle/50 ${
                                state?.errors?.name ? 'border-red-500' : ''
                            }`}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <FormInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                            required
                            disabled={isPending}
                            className={`bg-surface-subtle/50 ${
                                state?.errors?.email ? 'border-red-500' : ''
                            }`}
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
                            disabled={isPending}
                            className={`bg-surface-subtle/50 ${
                                state?.errors?.password ? 'border-red-500' : ''
                            }`}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel htmlFor="confirmPassword">
                            Confirm Password
                        </FormLabel>
                        <FormInput
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            required
                            disabled={isPending}
                            className={`bg-surface-subtle/50 ${
                                state?.errors?.confirmPassword
                                    ? 'border-red-500'
                                    : ''
                            }`}
                        />
                    </FormGroup>

                    <Button
                        type="submit"
                        className="w-full h-10 text-base shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300"
                        disabled={isPending}
                    >
                        {isPending ? 'Creating account...' : 'Create account'}
                    </Button>

                    <div className="text-center text-sm text-text-secondary pt-2">
                        Already have an account?{' '}
                        <Link
                            href="/signin"
                            className="font-medium text-primary-400 hover:text-primary-300 transition-colors"
                        >
                            Sign in
                        </Link>
                    </div>
                </Form>
            </CardContent>
        </Card>
    );
}
