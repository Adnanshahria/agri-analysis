import { useState } from 'react';
import { Target, Trophy, Calculator, PartyPopper, TrendingUp, Award, Crown, Flame, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const subjects = [
    { key: 'biology', name: 'জীববিজ্ঞান', max: 30, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { key: 'chemistry', name: 'রসায়ন', max: 20, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { key: 'physics', name: 'পদার্থবিজ্ঞান', max: 20, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { key: 'math', name: 'গণিত', max: 20, color: 'text-red-400', bg: 'bg-red-500/10' },
    { key: 'english', name: 'ইংরেজি', max: 10, color: 'text-purple-400', bg: 'bg-purple-500/10' },
];

type ResultConfig = {
    icon: React.ReactNode;
    title: string;
    message: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
};

function getResultConfig(totalMarks: number): ResultConfig {
    if (totalMarks >= 90) {
        return {
            icon: <Crown className="text-yellow-400 shrink-0" size={32} />,
            title: "🏆 তুমি ১ম হবে!",
            message: "অসাধারণ! এই পারফরম্যান্স ধরে রাখো, তুমি নিশ্চিত ১ম হবে!",
            bgColor: "bg-yellow-500/10",
            borderColor: "border-yellow-500/20",
            textColor: "text-yellow-400",
        };
    } else if (totalMarks >= 80) {
        return {
            icon: <Award className="text-purple-400 shrink-0" size={32} />,
            title: "🎯 তুমি টপ করবে!",
            message: "চমৎকার! এই গতিতে চলতে থাকো, টপ করা নিশ্চিত!",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20",
            textColor: "text-purple-400",
        };
    } else if (totalMarks >= 70) {
        return {
            icon: <TrendingUp className="text-blue-400 shrink-0" size={32} />,
            title: "📈 টপার হতে আরো ফোকাস!",
            message: "তুমি ভালো করছো! আরেকটু ফোকাস করলে টপার হতে পারবে।",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
            textColor: "text-blue-400",
        };
    } else if (totalMarks >= 60) {
        return {
            icon: <PartyPopper className="text-green-400 shrink-0" size={32} />,
            title: "🎉 চান্স পাবে!",
            message: "ফোকাস থাকো! তুমি চান্স পাবে। টপ করার চেষ্টা করো!",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20",
            textColor: "text-green-400",
        };
    } else if (totalMarks >= 50) {
        return {
            icon: <Flame className="text-orange-400 shrink-0" size={32} />,
            title: "🔥 আরো পড়াশোনা করো!",
            message: "Study Harder! আরো কঠোর পরিশ্রম করো, চান্স পাওয়া সম্ভব!",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20",
            textColor: "text-orange-400",
        };
    } else {
        return {
            icon: null,
            title: "",
            message: "",
            bgColor: "",
            borderColor: "",
            textColor: "",
        };
    }
}

export default function Analytics() {
    const [marks, setMarks] = useState<Record<string, number>>({
        biology: 0,
        chemistry: 0,
        physics: 0,
        math: 0,
        english: 0,
    });
    const [isExpanded, setIsExpanded] = useState(false);

    const totalMarks = Object.values(marks).reduce((a, b) => a + b, 0);
    const resultConfig = getResultConfig(totalMarks);

    const handleMarkChange = (subject: string, value: string) => {
        const numValue = Math.max(0, Math.min(parseInt(value) || 0, subjects.find(s => s.key === subject)?.max || 0));
        setMarks(prev => ({ ...prev, [subject]: numValue }));
    };

    return (
        <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-2xl font-bold text-white">অ্যানালিটিক্স</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Total Marks - Expandable */}
                <div className="glass-panel rounded-xl overflow-hidden">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full p-4 flex items-center gap-3 hover:bg-white/5 transition-colors"
                    >
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            <Target size={24} />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-xs text-slate-400">Total Marks</p>
                            <p className="text-xl font-bold text-white">100</p>
                        </div>
                        <div className="text-slate-400">
                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                    </button>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="overflow-hidden"
                            >
                                <div className="px-4 pb-4 pt-2 border-t border-white/5 space-y-2">
                                    <p className="text-[10px] text-slate-500 mb-2">মার্কস ডিস্ট্রিবিউশন</p>
                                    {subjects.map((subject) => (
                                        <div key={subject.key} className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2">
                                                <div className={cn("w-1.5 h-1.5 rounded-full")}
                                                    style={{
                                                        backgroundColor: subject.color.includes('emerald') ? '#10b981' :
                                                            subject.color.includes('amber') ? '#f59e0b' :
                                                                subject.color.includes('blue') ? '#3b82f6' :
                                                                    subject.color.includes('red') ? '#ef4444' : '#a855f7'
                                                    }} />
                                                <span className={cn("", subject.color)}>{subject.name}</span>
                                            </div>
                                            <span className="font-mono font-bold text-white">{subject.max}</span>
                                        </div>
                                    ))}
                                    <div className="pt-2 border-t border-white/10 flex justify-between text-xs">
                                        <span className="font-bold text-slate-300">মোট</span>
                                        <span className="font-mono font-bold text-yellow-400">100</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* High Priority Topics - clickable */}
                <Link
                    to="/#hot-topics"
                    className="glass-panel p-4 rounded-xl flex items-center gap-3 hover:bg-white/5 transition-colors group cursor-pointer"
                >
                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform">
                        <Trophy size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 group-hover:text-yellow-400 transition-colors">High Priority Topics</p>
                        <p className="text-xl font-bold text-white">~45</p>
                    </div>
                    <span className="ml-auto text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">View →</span>
                </Link>
            </div>

            {/* Marks Calculator */}
            <div className="glass-panel p-4 rounded-xl">
                <h3 className="font-bold text-slate-200 mb-4 text-sm flex items-center gap-2">
                    <Calculator size={16} className="text-blue-400" />
                    মার্কস ক্যালকুলেটর
                </h3>

                <div className="space-y-2">
                    {subjects.map((subject) => (
                        <div key={subject.key} className="flex items-center gap-3">
                            <div className={cn("w-8 h-8 rounded-md flex items-center justify-center shrink-0", subject.bg)}>
                                <span className={cn("text-sm font-bold", subject.color)}>{subject.name.charAt(0)}</span>
                            </div>
                            <div className="flex-1">
                                <label className="text-xs text-slate-300 font-medium">{subject.name}</label>
                                <p className="text-[9px] text-slate-500">সর্বোচ্চ: {subject.max}</p>
                            </div>
                            <input
                                type="number"
                                min="0"
                                max={subject.max}
                                value={marks[subject.key] || ''}
                                onChange={(e) => handleMarkChange(subject.key, e.target.value)}
                                placeholder="0"
                                className="w-16 px-2 py-1.5 bg-neutral-800 border border-white/10 rounded-md text-white text-center text-sm font-mono font-bold focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    ))}
                </div>

                {/* Total and Result */}
                <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-slate-200">মোট নম্বর:</span>
                        <span className={cn(
                            "text-2xl font-bold font-mono tabular-nums",
                            totalMarks >= 60 ? "text-green-400" : totalMarks >= 50 ? "text-orange-400" : "text-slate-400"
                        )}>
                            {totalMarks} / 100
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden mb-3">
                        <div
                            className={cn(
                                "h-full rounded-full transition-all duration-500",
                                totalMarks >= 90 ? "bg-gradient-to-r from-yellow-500 to-amber-400" :
                                    totalMarks >= 80 ? "bg-gradient-to-r from-purple-500 to-violet-400" :
                                        totalMarks >= 70 ? "bg-gradient-to-r from-blue-500 to-cyan-400" :
                                            totalMarks >= 60 ? "bg-gradient-to-r from-green-500 to-emerald-400" :
                                                totalMarks >= 50 ? "bg-gradient-to-r from-orange-500 to-amber-400" :
                                                    "bg-gradient-to-r from-slate-600 to-slate-500"
                            )}
                            style={{ width: `${Math.min(totalMarks, 100)}%` }}
                        />
                    </div>

                    {/* Result Message */}
                    {totalMarks >= 50 ? (
                        <div className={cn("p-3 border rounded-lg flex items-center gap-3", resultConfig.bgColor, resultConfig.borderColor)}>
                            <div className="shrink-0">{resultConfig.icon}</div>
                            <div>
                                <h4 className={cn("font-bold text-sm", resultConfig.textColor)}>{resultConfig.title}</h4>
                                <p className={cn("text-xs opacity-80", resultConfig.textColor)}>{resultConfig.message}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-3 bg-slate-800/50 border border-white/5 rounded-lg">
                            <p className="text-slate-400 text-xs text-center">
                                কাটমার্ক <span className="text-yellow-400 font-bold">50</span> অতিক্রম করতে আরো <span className="text-white font-bold">{50 - totalMarks}</span> মার্কস দরকার।
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
