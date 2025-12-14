import { cn } from '@/lib/utils';
import { useCountdown, EXAM_TARGET_DATE } from '@/hooks/useCountdown';

interface CountdownProps {
    compact?: boolean;
    className?: string;
}

export function Countdown({ compact, className }: CountdownProps) {
    const { days, hours } = useCountdown(EXAM_TARGET_DATE);

    return (
        <div className={cn("text-center", className)}>
            <p className={cn("text-slate-500 font-bold uppercase tracking-widest mb-1", compact ? "text-[10px]" : "text-xs mb-2")}>
                এক্সাম কাউন্টডাউন
            </p>
            <div className={cn("font-mono font-bold text-yellow-400 tabular-nums tracking-tighter", compact ? "text-xl" : "text-4xl")}>
                {String(days).padStart(2, '0')}d {String(hours).padStart(2, '0')}h
            </div>
            {!compact && (
                <div className="flex justify-center gap-8 mt-1 text-[10px] text-slate-600 font-medium tracking-wide">
                    <span>DAYS</span>
                    <span>HOURS</span>
                </div>
            )}
        </div>
    );
}
