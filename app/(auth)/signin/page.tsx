'use client';
import Link from 'next/link';
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
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-surface-subtle">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <Card className="bg-surface-elevated py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-border-subtle">
                    <CardHeader className="text-center">
                        <CardTitle className="text-lg">Welcome back</CardTitle>
                        <p className="text-sm text-text-secondary">
                            Sign in to continue to Issues
                        </p>
                    </CardHeader>

                    <CardContent>
                        <Form action={formAction} className="space-y-6">
                            {state?.message && !state.success && (
                                <FormError>{state.message}</FormError>
                            )}
                            <FormGroup>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <FormInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@company.com"
                                    required
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
                                    placeholder="Your password"
                                    required
                                />
                            </FormGroup>

                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <Link
                                        href="/signup"
                                        className="font-medium text-text-primary hover:text-green-600"
                                    >
                                        Create account
                                    </Link>
                                </div>
                                <div className="text-sm">
                                    <Link
                                        href="/forgot"
                                        className="font-medium text-text-primary hover:text-green-600"
                                    >
                                        Forgot?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    className="w-full mt-4"
                                    disabled={isPending}
                                >
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                    </CardContent>

                    <CardFooter className="text-center">
                        <p className="text-sm text-text-secondary">
                            By continuing you agree to our{' '}
                            <Link href="/terms" className="text-text-primary">
                                Terms
                            </Link>
                            .
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
