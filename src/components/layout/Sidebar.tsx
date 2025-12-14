import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Dna,
    FlaskConical,
    Atom,
    Calculator,
    BookOpen,
    PieChart,
    Settings
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Countdown } from '@/components/dashboard/Countdown';

type MenuItem =
    | { type: 'divider'; label: string; icon?: never; path?: never; color?: never; bg?: never }
    | { type?: 'link'; icon: LucideIcon; label: string; path: string; color?: string; bg?: string };

export function Sidebar() {
    const menuItems: MenuItem[] = [
        { icon: LayoutDashboard, label: 'ড্যাশবোর্ড', path: '/' },
        { type: 'divider', label: 'বিষয়সমূহ' },
        { icon: Dna, label: 'জীববিজ্ঞান', path: '/biology', color: 'text-emerald-400', bg: 'group-hover:bg-emerald-500/10' },
        { icon: FlaskConical, label: 'রসায়ন', path: '/chemistry', color: 'text-amber-400', bg: 'group-hover:bg-amber-500/10' },
        { icon: Atom, label: 'পদার্থবিজ্ঞান', path: '/physics', color: 'text-blue-400', bg: 'group-hover:bg-blue-500/10' },
        { icon: Calculator, label: 'গণিত', path: '/math', color: 'text-red-400', bg: 'group-hover:bg-red-500/10' },
        { icon: BookOpen, label: 'ইংরেজি', path: '/english', color: 'text-purple-400', bg: 'group-hover:bg-purple-500/10' },
        { type: 'divider', label: 'অন্যান্য' },
        { icon: PieChart, label: 'অ্যানালিটিক্স', path: '/analytics' },
        { icon: Settings, label: 'সেটিংস', path: '/settings' },
    ];

    return (
        <aside className="hidden md:flex fixed top-0 left-0 h-screen w-72 glass-panel flex-col border-r border-white/5 z-40">
            <div className="p-6">
                <h1 className="text-2xl font-bold tracking-tight text-white">
                    এগ্রি<span className="text-blue-400">ক্লাস্টার</span>
                </h1>
                <p className="text-xs text-slate-500 mt-1 font-medium tracking-widest uppercase">Admission Intelligence</p>
            </div>

            <div className="px-4 pb-4">
                <Countdown compact className="bg-slate-800/50 p-3 rounded-lg border border-white/5" />
            </div>

            <nav className="flex-1 overflow-y-auto px-4 space-y-1 custom-scroll pb-6">
                {menuItems.map((item, index) => {
                    if (item.type === 'divider') {
                        return (
                            <div key={index} className="pt-4 pb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-4">
                                {item.label}
                            </div>
                        );
                    }

                    const Icon = item.icon!;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path!}
                            className={({ isActive }) => cn(
                                "nav-item w-full group",
                                isActive ? "active" : "hover:bg-white/5"
                            )}
                        >
                            {({ isActive }) => (
                                <>
                                    <div className={cn(
                                        "w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center mr-3 transition-colors",
                                        item.bg
                                    )}>
                                        <Icon size={18} className={cn(item.color || "text-slate-400", isActive && item.color)} />
                                    </div>
                                    <span>{item.label}</span>
                                    {isActive && (
                                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                                    )}
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}
