import { useState } from 'react';
import { db } from '@/assets/data/db';
import { TrendChart } from '@/components/subject/TrendChart';
import { DataTable } from '@/components/subject/DataTable';
import type { Database } from '@/types';
import { ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
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

    // Determine tabs
    const tab1Key = isEnglish ? 'grammar' : 'paper1';
    const tab2Key = isEnglish ? 'memorizing' : 'paper2';
    const tab1Label = isEnglish ? 'গ্রামার' : '১ম পত্র';
    const tab2Label = isEnglish ? 'মেমোরাইজিং' : '২য় পত্র';

    const [activeTab, setActiveTab] = useState<typeof tab1Key | typeof tab2Key>(tab1Key);

    // Safe access to data arrays
    const activeData = data[activeTab] || [];

    return (
        <div className="space-y-8 animate-fade-in-up pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className={cn("text-3xl md:text-4xl font-bold tracking-tight mb-2", themeColor)}>
                        {title}
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base flex items-center gap-2">
                        <span>প্রস্তুতির জন্য ১৯ দিনের ব্লু-প্রিন্ট</span>
                        <ArrowRight size={14} />
                    </p>
                </div>

                {/* Tabs */}
                <div className="glass-panel p-1 rounded-xl inline-flex self-start md:self-center">
                    <button
                        onClick={() => setActiveTab(tab1Key)}
                        className={cn(
                            "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300",
                            activeTab === tab1Key
                                ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg ring-1 ring-white/10"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {tab1Label}
                    </button>
                    <button
                        onClick={() => setActiveTab(tab2Key)}
                        className={cn(
                            "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300",
                            activeTab === tab2Key
                                ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg ring-1 ring-white/10"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {tab2Label}
                    </button>
                </div>
            </div>

            {/* Insight Card */}
            <div className={cn("glass-panel p-6 rounded-2xl border-l-4 relative overflow-hidden",
                subjectKey === 'biology' ? 'border-l-emerald-500' :
                    subjectKey === 'chemistry' ? 'border-l-amber-500' :
                        subjectKey === 'physics' ? 'border-l-blue-500' :
                            subjectKey === 'math' ? 'border-l-red-500' : 'border-l-purple-500'
            )}>
                <div className="absolute right-0 top-0 opacity-5 p-4">
                    <Sparkles size={100} />
                </div>
                <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    <AlertCircle size={14} /> অ্যানালিস্ট ইনসাইট
                </h4>
                <div className="text-slate-200 leading-relaxed text-sm md:text-lg font-medium relative z-10">
                    {data.insight}
                </div>
            </div>

            {/* Main Content Area - Animated Switch */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-8"
                >
                    {/* Trend Chart */}
                    <section className="glass-panel p-6 rounded-2xl border border-white/5">
                        <h3 className="font-bold text-slate-200 mb-6 flex items-center gap-2">
                            <Sparkles size={16} className="text-yellow-400" />
                            রিসেন্ট ট্রেন্ড অ্যানালাইসিস
                        </h3>
                        <TrendChart
                            data={activeData}
                            colorTheme={
                                subjectKey === 'biology' ? '#10b981' :
                                    subjectKey === 'chemistry' ? '#f59e0b' :
                                        subjectKey === 'physics' ? '#3b82f6' :
                                            subjectKey === 'math' ? '#ef4444' : '#a855f7'
                            }
                        />
                    </section>

                    {/* Data Table */}
                    <section>
                        <div className="flex items-center justify-between mb-4 px-1">
                            <h3 className="font-bold text-slate-200">পূর্ণাঙ্গ ডেটা টেবিল</h3>
                        </div>
                        <DataTable data={activeData} />
                    </section>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
