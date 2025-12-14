import { Link } from 'react-router-dom';
import { Dna, FlaskConical, Atom, Calculator, BookOpen, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Subjects() {
    const subjects = [
        { id: 'biology', name: 'জীববিজ্ঞান', icon: Dna, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
        { id: 'chemistry', name: 'রসায়ন', icon: FlaskConical, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
        { id: 'physics', name: 'পদার্থবিজ্ঞান', icon: Atom, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
        { id: 'math', name: 'গণিত', icon: Calculator, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
        { id: 'english', name: 'ইংরেজি', icon: BookOpen, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    ];

    return (
        <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-3xl font-bold text-white">বিষয়সমূহ</h1>

            <div className="grid grid-cols-1 gap-4">
                {subjects.map((subject) => (
                    <Link
                        key={subject.id}
                        to={`/${subject.id}`}
                        className={cn(
                            "flex items-center justify-between p-4 rounded-xl border transition-all duration-200 group",
                            "glass-panel hover:bg-slate-800",
                            subject.border
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div className={cn("p-3 rounded-lg", subject.bg, subject.color)}>
                                <subject.icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                                    {subject.name}
                                </h3>
                                <p className="text-xs text-slate-500 font-medium">Click to view details</p>
                            </div>
                        </div>

                        <div className={cn("p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0", subject.bg)}>
                            <ArrowRight size={16} className={subject.color} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
