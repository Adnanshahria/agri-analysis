import { db } from '@/assets/data/db';
import type { TopicData } from '@/types';
import { Star, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function HotTopics() {
    // Aggregate and sort chapters by prediction
    const getAllChapters = () => {
        let chapters: (TopicData & { subject: string })[] = [];
        const subjects = ['biology', 'chemistry', 'physics', 'math', 'english'] as const;

        subjects.forEach(subject => {
            const data = db[subject];
            if (data.paper1) data.paper1.forEach(c => chapters.push({ ...c, subject }));
            if (data.paper2) data.paper2.forEach(c => chapters.push({ ...c, subject }));
            if (data.grammar) data.grammar.forEach(c => chapters.push({ ...c, subject }));
            if (data.memorizing) data.memorizing.forEach(c => chapters.push({ ...c, subject }));
        });

        return chapters.sort((a, b) => b.pred26 - a.pred26).slice(0, 10);
    };

    const hotChapters = getAllChapters();

    const getSubjectColor = (subject: string) => {
        switch (subject) {
            case 'biology': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
            case 'chemistry': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
            case 'physics': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
            case 'math': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
        }
    };

    return (
        <div className="space-y-3">
            {hotChapters.map((chapter, index) => {
                const style = getSubjectColor(chapter.subject);
                return (
                    <Link
                        key={`${chapter.subject}-${index}`}
                        to={`/${chapter.subject}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-white/5 hover:bg-slate-800/80 transition-all duration-200 group"
                    >
                        <div className="flex items-center gap-4 overflow-hidden">
                            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border", style)}>
                                <TrendingUp size={18} />
                            </div>
                            <div className="truncate">
                                <div className="text-sm font-semibold text-slate-200 truncate group-hover:text-white transition-colors">
                                    {chapter.name}
                                </div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">
                                    {chapter.subject.toUpperCase()}
                                </div>
                            </div>
                        </div>

                        <div className="text-right shrink-0 flex flex-col items-end">
                            <div className="flex items-center gap-1">
                                <Star size={12} className="text-yellow-400 fill-yellow-400 star-pulse" />
                                <span className="text-lg font-bold text-yellow-400 tabular-nums leading-none">{chapter.pred26}</span>
                            </div>
                            <span className="text-[10px] text-slate-500 font-medium">Questions</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}
