import { useCountdown } from '@/hooks/useCountdown';

export function Header() {
    const { days, hours } = useCountdown();

    return (
        <header className="md:hidden fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 h-16 flex items-center justify-between px-4">
            <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    টার্গেট '২৫-২৬
                </h1>
            </div>
            <div>
                {/* Mini countdown for mobile header - linked to shared countdown */}
                <div className="text-[10px] font-mono text-yellow-400 font-bold bg-slate-800/50 px-2 py-1 rounded border border-white/10">
                    {String(days).padStart(2, '0')}d {String(hours).padStart(2, '0')}h Left
                </div>
            </div>
        </header>
    );
}
