'use client';

import React from 'react';
import Link from 'next/link';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/ui/Button';
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
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-surface-subtle">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <Card className="bg-surface-elevated py-2 px-2 shadow sm:rounded-lg sm:px-6 border border-border-subtle">
                    <CardHeader className="text-center">
                        <CardTitle className="text-lg">
                            Create account
                        </CardTitle>
                        <p className="text-sm text-text-secondary">
                            Start using Issues for free.
                        </p>
                    </CardHeader>

                    <CardContent>
                        <Form action={formAction}>
                            {state?.message && !state.success && (
                                <FormError>{state.message}</FormError>
                            )}
                            <FormGroup>
                                <FormLabel htmlFor="name">Full name</FormLabel>
                                <FormInput
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    disabled={isPending}
                                    aria-describedby="name-error"
                                    className={
                                        state?.errors?.name
                                            ? 'border-red-500'
                                            : ''
                                    }
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <FormInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@company.com"
                                    required
                                    disabled={isPending}
                                    aria-describedby="email-error"
                                    className={
                                        state?.errors?.email
                                            ? 'border-red-500'
                                            : ''
                                    }
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="password">
                                    Password
                                </FormLabel>
                                <FormInput
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Create a password"
                                    required
                                    disabled={isPending}
                                    aria-describedby="password-error"
                                    className={
                                        state?.errors?.password
                                            ? 'border-red-500'
                                            : ''
                                    }
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="confirmPassword">
                                    Confirm password
                                </FormLabel>
                                <FormInput
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm password"
                                    required
                                    disabled={isPending}
                                    aria-describedby="confirmPassword-error"
                                    className={
                                        state?.errors?.confirmPassword
                                            ? 'border-red-500'
                                            : ''
                                    }
                                />
                            </FormGroup>

                            <div>
                                <Button
                                    type="submit"
                                    className="w-full mt-4"
                                    disabled={isPending}
                                >
                                    Create account
                                </Button>
                            </div>
                        </Form>
                    </CardContent>

                    <CardFooter className="text-center">
                        <p className="text-sm text-text-secondary">
                            Already have an account?{' '}
                            <Link href="/signin" className="text-text-primary">
                                Sign in
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
