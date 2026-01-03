import MainLayout from '@/app/components/MainLayout';

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
}
