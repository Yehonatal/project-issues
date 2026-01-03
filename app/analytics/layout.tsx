import MainLayout from '@/app/components/MainLayout';

export default function AnalyticsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
}
