import type { TopicData } from '@/types';
import { Star } from 'lucide-react';

interface DataTableProps {
    data: TopicData[];
    highlightLimit?: number; // Top N to show stars for
}

export function DataTable({ data, highlightLimit = 8 }: DataTableProps) {
    // Sort by prediction for highlighting logic, but we might want to keep original order?
    // Original app sorted 2026 predictions for stars but list order was by chapter logic probably?
    // The user's original code had `sortedForStars` just for determining stars, but table row order was likely original.
    // Actually, for better UX, sorting by prediction is usually preferred.
    // Let's sort by prediction descending.
    const sortedData = [...data].sort((a, b) => b.pred26 - a.pred26);

    // Historical keys
    const historyKeys = [
        { key: 'bau16', label: 'BAU 16' }, { key: 'bau17', label: 'BAU 17' }, { key: 'bau18', label: 'BAU 18' },
        { key: 'sau16', label: 'SAU 16' }, { key: 'sau17', label: 'SAU 17' }, { key: 'sau18', label: 'SAU 18' },
        { key: 'syl16', label: 'SYL 16' }, { key: 'syl17', label: 'SYL 17' }, { key: 'syl18', label: 'SYL 18' },
        { key: 'pstu16', label: 'PST 16' }, { key: 'pstu17', label: 'PST 17' }, { key: 'pstu18', label: 'PST 18' },
        { key: 'cvasu17', label: 'CVA 17' }, { key: 'cvasu18', label: 'CVA 18' }
    ];

    // Filter keys that actually have data in at least one row
    const activeHistoryKeys = historyKeys.filter(k => sortedData.some(d => d[k.key] !== undefined));

    return (
        <div className="relative w-full rounded-xl overflow-hidden glass-panel border border-white/5 shadow-2xl">
            <div className="overflow-x-auto custom-scroll pb-2">
                <table className="w-full text-sm text-left border-collapse min-w-max">
                    <thead className="text-xs uppercase bg-slate-900/90 text-slate-400 font-bold tracking-wider sticky top-0 z-30 shadow-sm">
                        <tr>
                            <th className="px-4 py-4 sticky left-0 z-40 bg-slate-900 border-b border-white/10 min-w-[160px] md:min-w-[200px] shadow-[4px_0_12px_-4px_rgba(0,0,0,0.5)]">
                                অধ্যায় / টপিক
                            </th>
                            <th className="px-3 py-4 text-center border-b border-white/10">২২-২৩</th>
                            <th className="px-3 py-4 text-center border-b border-white/10">২৩-২৪</th>
                            <th className="px-3 py-4 text-center border-b border-white/10 bg-white/5">২৪-২৫</th>
                            <th className="px-3 py-4 text-center border-b border-white/10 min-w-[30px] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-yellow-400/5 group-hover:bg-yellow-400/10 transition-colors" />
                                <span className="relative z-10 text-yellow-400 font-bold block">২৫-২৬</span>
                                <span className="relative z-10 text-[8px] text-yellow-500/80 uppercase">Pred</span>
                            </th>
                            {activeHistoryKeys.map(h => (
                                <th key={h.key} className="px-3 py-4 text-center border-b border-white/10 text-slate-500 font-normal">
                                    {h.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {sortedData.map((row, idx) => {
                            const isHighPriority = idx < highlightLimit && row.pred26 > 0;
                            return (
                                <tr key={idx} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-4 py-3 sticky left-0 z-20 bg-slate-800/95 group-hover:bg-slate-800 border-r border-white/5 font-medium text-slate-200 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.5)]">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="truncate max-w-[180px]" title={row.name}>
                                                {row.name}
                                            </span>
                                            {isHighPriority && (
                                                <Star size={12} className="text-yellow-400 fill-yellow-400 star-pulse shrink-0" />
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-3 py-3 text-center text-slate-400 font-mono">{row.c22 || '-'}</td>
                                    <td className="px-3 py-3 text-center text-slate-400 font-mono">{row.c23 || '-'}</td>
                                    <td className="px-3 py-3 text-center text-slate-300 font-mono bg-white/5 font-bold">{row.c25 || '-'}</td>
                                    <td className="px-3 py-3 text-center font-bold text-yellow-400 font-mono text-lg bg-yellow-400/5 border-l border-r border-yellow-400/10">
                                        {row.pred26}
                                    </td>
                                    {activeHistoryKeys.map(h => (
                                        <td key={h.key} className="px-3 py-3 text-center text-slate-600 font-mono text-xs">
                                            {row[h.key] !== undefined ? row[h.key] : '-'}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
