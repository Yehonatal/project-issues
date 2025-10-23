import { getCurrentUser } from '@/lib/dal';
import Link from 'next/link';
import { buttonClasses } from './ui/Button';

const DashboardButton = async () => {
    const user = await getCurrentUser();
    return (
        <>
            {user ? (
                <Link
                    href="/dashboard"
                    className={buttonClasses({
                        className: 'justify-center px-6',
                    })}
                >
                    Go to Dashboard
                </Link>
            ) : (
                <div className="flex items-center space-x-4">
                    <Link
                        href="/signin"
                        className={buttonClasses({
                            variant: 'outline',
                            className: 'justify-center px-4',
                        })}
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/signup"
                        className={buttonClasses({
                            className: 'justify-center px-4',
                        })}
                    >
                        Sign up
                    </Link>
                </div>
            )}
        </>
    );
};

export default DashboardButton;
