import { getCurrentUser } from '@/lib/dal';
import { User } from 'lucide-react';
import SignOutButton from './SignOutButton';

const UserEmail = async () => {
    const user = await getCurrentUser();

    return (
        <div className="flex items-center justify-between px-2 py-2 rounded-md bg-surface-subtle border border-border-subtle">
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="h-8 w-8 rounded-full bg-surface-elevated border border-border-muted flex items-center justify-center shrink-0">
                    <User size={14} className="text-text-secondary" />
                </div>
                <div className="flex flex-col overflow-hidden">
                    <span className="text-xs font-medium text-text-primary truncate max-w-[100px]">
                        {user?.email?.split('@')[0]}
                    </span>
                    <span className="text-[10px] text-text-muted truncate max-w-[100px]">
                        {user?.email}
                    </span>
                </div>
            </div>
            <SignOutButton />
        </div>
    );
};

export default UserEmail;
