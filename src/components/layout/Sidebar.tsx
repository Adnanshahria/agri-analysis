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
        <aside className="hidden md:flex fixed top-0 left-0 h-screen w-56 glass-panel flex-col border-r border-white/5 z-40">
            <div className="p-4">
                <h1 className="text-xl font-bold tracking-tight text-white">
                    এগ্রি<span className="text-blue-400">ক্লাস্টার</span>
                </h1>
                <p className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Admission Intelligence</p>
            </div>

            <div className="px-3 pb-3">
                <Countdown compact className="bg-slate-800/50 p-2 rounded-md border border-white/5" />
            </div>

            <nav className="flex-1 overflow-y-auto px-3 space-y-0.5 custom-scroll pb-4">
                {menuItems.map((item, index) => {
                    if (item.type === 'divider') {
                        return (
                            <div key={index} className="pt-3 pb-1 text-[9px] font-bold text-slate-500 uppercase tracking-widest pl-2">
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
                                "flex items-center p-2 text-slate-400 rounded-lg transition-all duration-200 text-xs font-medium group",
                                isActive ? "bg-white/5 text-blue-400 font-bold border-l-2 border-blue-500" : "hover:bg-white/5"
                            )}
                        >
                            {({ isActive }) => (
                                <>
                                    <div className={cn(
                                        "w-6 h-6 rounded-md bg-slate-800/80 flex items-center justify-center mr-2 transition-colors",
                                        item.bg
                                    )}>
                                        <Icon size={14} className={cn(item.color || "text-slate-400", isActive && item.color)} />
                                    </div>
                                    <span>{item.label}</span>
                                    {isActive && (
                                        <div className="ml-auto w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
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
