'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
    targetId?: string;
}

export default function NavCollapseToggle({
    targetId = 'site-sidebar',
}: Props) {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        try {
            const saved = localStorage.getItem('navCollapsed');
            if (saved === 'true') {
                setCollapsed(true);
                const el = document.getElementById(targetId);
                if (el) el.classList.add('collapsed');
            }
        } catch (e) {}
    }, [targetId]);

    function toggle() {
        const el = document.getElementById(targetId);
        if (!el) return;
        const next = !collapsed;
        setCollapsed(next);
        if (next) el.classList.add('collapsed');
        else el.classList.remove('collapsed');
        try {
            localStorage.setItem('navCollapsed', next ? 'true' : 'false');
        } catch (e) {}
    }

    return (
        <button
            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
            onClick={toggle}
            className="ml-2 rounded-md p-1 text-text-muted hover:text-text-primary"
        >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
    );
}
