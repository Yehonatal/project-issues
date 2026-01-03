'use client';

import { useActionState } from 'react';
import { useRouter } from 'next/navigation';

import { Issue, ISSUE_STATUS, ISSUE_PRIORITY } from '@/db/schema';
import { Button } from './ui/Button';
import {
    Form,
    FormGroup,
    FormLabel,
    FormInput,
    FormTextarea,
    FormSelect,
    FormError,
} from './ui/Form';
import {
    createIssue,
    updateIssue,
    type ActionResponse,
} from '@/app/actions/issues';
import { Save, X } from 'lucide-react';

interface IssueFormProps {
    issue?: Issue;
    userId: string;
    isEditing?: boolean;
}

const initialState: ActionResponse = {
    success: false,
    message: '',
    errors: undefined,
};

export default function IssueForm({
    issue,
    userId,
    isEditing = false,
}: IssueFormProps) {
    const router = useRouter();

    const [state, formAction, isPending] = useActionState<
        ActionResponse,
        FormData
    >(async (prevState: ActionResponse, formData: FormData) => {
        // Extract data from form
        const data = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            status: formData.get('status') as
                | 'backlog'
                | 'todo'
                | 'in_progress'
                | 'done',
            priority: formData.get('priority') as 'low' | 'medium' | 'high',
            userId,
        };

        try {
            const result = isEditing
                ? await updateIssue(Number(issue!.id), data)
                : await createIssue(data);

            // Handle successful submission
            if (result.success) {
                router.refresh();
                if (!isEditing) {
                    router.push('/dashboard');
                }
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

    const statusOptions = Object.values(ISSUE_STATUS).map(
        ({ label, value }) => ({
            label,
            value,
        })
    );

    const priorityOptions = Object.values(ISSUE_PRIORITY).map(
        ({ label, value }) => ({
            label,
            value,
        })
    );

    return (
        <Form action={formAction} className="space-y-0">
            {state?.message && (
                <FormError
                    className={`mb-6 ${
                        state.success
                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                            : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}
                >
                    {state.message}
                </FormError>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="rounded-lg border border-border-subtle bg-surface-canvas p-6 shadow-sm">
                        <FormGroup>
                            <FormLabel htmlFor="title">Title</FormLabel>
                            <FormInput
                                id="title"
                                name="title"
                                placeholder="Issue title"
                                defaultValue={issue?.title || ''}
                                required
                                minLength={3}
                                maxLength={100}
                                disabled={isPending}
                                aria-describedby="title-error"
                                className={
                                    state?.errors?.title ? 'border-red-500' : ''
                                }
                            />
                            {state?.errors?.title && (
                                <p
                                    id="title-error"
                                    className="text-sm text-red-500 mt-1"
                                >
                                    {state.errors.title[0]}
                                </p>
                            )}
                        </FormGroup>

                        <FormGroup className="mt-6">
                            <FormLabel htmlFor="description">
                                Description
                            </FormLabel>
                            <FormTextarea
                                id="description"
                                name="description"
                                placeholder="Describe the issue..."
                                rows={12}
                                defaultValue={issue?.description || ''}
                                disabled={isPending}
                                aria-describedby="description-error"
                                className={
                                    state?.errors?.description
                                        ? 'border-red-500'
                                        : 'font-mono text-sm'
                                }
                            />
                            {state?.errors?.description && (
                                <p
                                    id="description-error"
                                    className="text-sm text-red-500 mt-1"
                                >
                                    {state.errors.description[0]}
                                </p>
                            )}
                        </FormGroup>
                    </div>
                </div>

                {/* Sidebar Metadata */}
                <div className="space-y-4">
                    <div className="rounded-lg border border-border-subtle bg-surface-subtle/50 p-4 space-y-4">
                        <FormGroup>
                            <FormLabel htmlFor="status">Status</FormLabel>
                            <FormSelect
                                id="status"
                                name="status"
                                defaultValue={issue?.status || 'backlog'}
                                options={statusOptions}
                                disabled={isPending}
                                required
                                aria-describedby="status-error"
                                className={
                                    state?.errors?.status
                                        ? 'border-red-500'
                                        : ''
                                }
                            />
                            {state?.errors?.status && (
                                <p
                                    id="status-error"
                                    className="text-sm text-red-500 mt-1"
                                >
                                    {state.errors.status[0]}
                                </p>
                            )}
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="priority">Priority</FormLabel>
                            <FormSelect
                                id="priority"
                                name="priority"
                                defaultValue={issue?.priority || 'medium'}
                                options={priorityOptions}
                                disabled={isPending}
                                required
                                aria-describedby="priority-error"
                                className={
                                    state?.errors?.priority
                                        ? 'border-red-500'
                                        : ''
                                }
                            />
                            {state?.errors?.priority && (
                                <p
                                    id="priority-error"
                                    className="text-sm text-red-500 mt-1"
                                >
                                    {state.errors.priority[0]}
                                </p>
                            )}
                        </FormGroup>

                        <div className="pt-4 border-t border-border-muted flex flex-col gap-2">
                            <Button
                                type="submit"
                                isLoading={isPending}
                                className="w-full justify-center"
                            >
                                <Save size={16} className="mr-2" />
                                {isEditing ? 'Update Issue' : 'Create Issue'}
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => router.back()}
                                disabled={isPending}
                                className="w-full justify-center"
                            >
                                <X size={16} className="mr-2" />
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
}
