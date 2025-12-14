import { db } from '@/assets/data/db';
import type { TopicData } from '@/types';
import { Star, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function HotTopics() {
    // Get all chapters with predictions > 0, sorted by pred26
    const getAllChapters = () => {
        const subjects = ['biology', 'chemistry', 'physics', 'math', 'english'] as const;
        let allChapters: (TopicData & { subject: string })[] = [];

        subjects.forEach(subject => {
            const data = db[subject];

            if (data.paper1) data.paper1.forEach(c => allChapters.push({ ...c, subject }));
            if (data.paper2) data.paper2.forEach(c => allChapters.push({ ...c, subject }));
            if (data.grammar) data.grammar.forEach(c => allChapters.push({ ...c, subject }));
            if (data.memorizing) data.memorizing.forEach(c => allChapters.push({ ...c, subject }));
        });

        // Filter only with predictions > 0, sort by prediction, take top 30
        return allChapters
            .filter(c => c.pred26 > 0)
            .sort((a, b) => b.pred26 - a.pred26)
            .slice(0, 30);
    };

    const hotChapters = getAllChapters();
    const totalPredictedQuestions = hotChapters.reduce((sum, c) => sum + c.pred26, 0);

    const getSubjectColor = (subject: string) => {
        switch (subject) {
            case 'biology': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
            case 'chemistry': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
            case 'physics': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
            case 'math': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
        }
    };

    const getSubjectName = (subject: string) => {
        switch (subject) {
            case 'biology': return 'জীব';
            case 'chemistry': return 'রসায়ন';
            case 'physics': return 'পদার্থ';
            case 'math': return 'গণিত';
            case 'english': return 'ইংরেজি';
            default: return subject;
        }
    };

    return (
        <div>
            {/* Summary */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 mb-3">
                <div className="flex items-center gap-2">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-yellow-400">টপ ৩০ প্রেডিকশন</span>
                </div>
                <div className="text-right">
                    <span className="text-sm font-bold text-yellow-400">~{totalPredictedQuestions}</span>
                    <span className="text-[10px] text-yellow-400/70 ml-1">প্রশ্ন</span>
                </div>
            </div >

            {/* Topics Grid - 3 columns */}
            < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto custom-scroll pr-1" >
                {
                    hotChapters.map((chapter, index) => {
                        const style = getSubjectColor(chapter.subject);
                        return (
                            <Link
                                key={`${chapter.subject}-${index}`}
                                to={`/${chapter.subject}`}
                                className="flex items-center justify-between p-2 rounded-lg bg-slate-800/40 border border-white/5 hover:bg-slate-800/80 transition-all duration-200 group"
                            >
                                <div className="flex items-center gap-2 overflow-hidden flex-1">
                                    <div className="w-5 h-5 rounded-full bg-slate-700/50 flex items-center justify-center shrink-0 text-[9px] font-bold text-slate-400">
                                        {index + 1}
                                    </div>
                                    <div className={cn("w-6 h-6 rounded flex items-center justify-center shrink-0 border", style)}>
                                        <TrendingUp size={12} />
                                    </div>
                                    <div className="truncate flex-1 min-w-0">
                                        <div className="text-[11px] font-semibold text-slate-200 truncate group-hover:text-white transition-colors">
                                            {chapter.name.replace(/^\d+\.\s*/, '')}
                                        </div>
                                        <div className={cn("text-[8px] uppercase tracking-widest font-bold", style.split(' ')[0])}>
                                            {getSubjectName(chapter.subject)}
                                        </div>
                                    </div>
                                </div>

                                <div className="shrink-0 flex items-center gap-0.5 ml-1">
                                    <Star size={8} className="text-yellow-400 fill-yellow-400" />
                                    <span className="text-xs font-bold text-yellow-400 tabular-nums">{chapter.pred26}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}
