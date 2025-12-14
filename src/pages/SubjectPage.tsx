import { useState, useEffect } from 'react';
import { db } from '@/assets/data/db';
import { TrendChart } from '@/components/subject/TrendChart';
import { DataTable } from '@/components/subject/DataTable';
import type { Database } from '@/types';
import { ArrowRight, Sparkles, AlertCircle, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface SubjectPageProps {
    subjectKey: keyof Omit<Database, 'overview'>;
    title: string;
    themeColor: string;
}

export default function SubjectPage({ subjectKey, title, themeColor }: SubjectPageProps) {
    const data = db[subjectKey];
    const isEnglish = subjectKey === 'english';

    // Determine tabs based on subject type
    const tab1Key = isEnglish ? 'grammar' : 'paper1';
    const tab2Key = isEnglish ? 'memorizing' : 'paper2';
    const tab1Label = isEnglish ? 'গ্রামার' : '১ম পত্র';
    const tab2Label = isEnglish ? 'মেমোরাইজিং' : '২য় পত্র';

    // Use string type for flexibility, reset on subject change
    const [activeTab, setActiveTab] = useState<string>(tab1Key);

    // Reset activeTab when subjectKey changes (navigating between subjects)
    useEffect(() => {
        setActiveTab(isEnglish ? 'grammar' : 'paper1');
    }, [subjectKey, isEnglish]);

    // Safe access to data arrays with proper key
    const activeData = (data as unknown as Record<string, typeof data.paper1>)[activeTab] || [];

    const borderColor = subjectKey === 'biology' ? 'border-l-emerald-500' :
        subjectKey === 'chemistry' ? 'border-l-amber-500' :
            subjectKey === 'physics' ? 'border-l-blue-500' :
                subjectKey === 'math' ? 'border-l-red-500' : 'border-l-purple-500';

    const chartColor = subjectKey === 'biology' ? '#10b981' :
        subjectKey === 'chemistry' ? '#f59e0b' :
            subjectKey === 'physics' ? '#3b82f6' :
                subjectKey === 'math' ? '#ef4444' : '#a855f7';

    return (
        <div className="space-y-4 animate-fade-in-up pb-16">
            {/* Header Section - Compact */}
            <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                        <h1 className={cn("text-2xl md:text-3xl font-bold tracking-tight", themeColor)}>
                            {title}
                        </h1>
                        <p className="text-slate-400 text-xs flex items-center gap-1">
                            <span>প্রস্তুতির জন্য ব্লু-প্রিন্ট</span>
                            <ArrowRight size={12} />
                        </p>
                    </div>
                </div>

                {/* Paper Tabs - Compact */}
                <div className="glass-panel p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => setActiveTab(tab1Key)}
                        className={cn(
                            "px-5 py-2 rounded-md text-sm font-bold transition-all duration-300",
                            activeTab === tab1Key
                                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {tab1Label}
                    </button>
                    <button
                        onClick={() => setActiveTab(tab2Key)}
                        className={cn(
                            "px-5 py-2 rounded-md text-sm font-bold transition-all duration-300",
                            activeTab === tab2Key
                                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {tab2Label}
                    </button>
                </div>
            </div>

            {/* Insight Card - Compact */}
            <div className={cn("glass-panel p-4 rounded-xl border-l-4 relative overflow-hidden", borderColor)}>
                <div className="absolute right-0 top-0 opacity-5 p-2">
                    <Sparkles size={60} />
                </div>
                <h4 className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    <AlertCircle size={12} /> অ্যানালিস্ট ইনসাইট
                </h4>
                <div className="text-slate-200 leading-snug text-sm font-medium relative z-10 max-w-3xl">
                    {data.insight}
                </div>
            </div>

            {/* Main Content Area - Animated Switch */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4"
                >
                    {/* Trend Chart - Compact */}
                    <section className="glass-panel p-4 rounded-xl border border-white/5">
                        <h3 className="font-bold text-slate-200 mb-3 text-sm flex items-center gap-2">
                            <TrendingUp size={14} className="text-yellow-400" />
                            রিসেন্ট ট্রেন্ড অ্যানালাইসিস
                        </h3>
                        <TrendChart data={activeData} colorTheme={chartColor} />
                    </section>

                    {/* Data Table - Compact */}
                    <section>
                        <div className="flex items-center justify-between mb-2 px-1">
                            <h3 className="font-bold text-slate-200 text-sm">পূর্ণাঙ্গ ডেটা টেবিল</h3>
                            <span className="text-xs text-slate-500">{activeData.length} টপিক</span>
                        </div>
                        <DataTable data={activeData} />
                    </section>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
