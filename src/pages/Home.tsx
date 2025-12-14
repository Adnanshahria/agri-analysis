import { MarksChart } from "@/components/dashboard/MarksChart";
import { HotTopics } from "@/components/dashboard/HotTopics";
import { Countdown } from "@/components/dashboard/Countdown";
import { Rocket, Sparkles } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';

export default function Home() {
    const { days } = useCountdown();

    return (
        <div className="space-y-4 animate-fade-in-up">
            {/* Mobile Countdown */}
            <section className="md:hidden">
                <div className="glass-panel p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/10">
                    <Countdown compact={false} />
                </div>
            </section>

            {/* Row 1: Welcome Banner + Marks Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Welcome Banner */}
                <section className="lg:col-span-8 glass-panel p-4 rounded-xl border-l-4 border-l-yellow-500 relative overflow-hidden">
                    <div className="absolute -right-2 -top-2 opacity-5">
                        <Rocket size={60} />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                            <h2 className="text-lg md:text-xl font-bold text-white mb-1 relative z-10">মিশন ২৫-২৬: শেষ মুহূর্তের প্রস্তুতি</h2>
                            <p className="text-slate-400 text-xs relative z-10 max-w-md">
                                হাতে আছে মাত্র <span className="text-yellow-400 font-bold">{days} দিন</span>। <span className="text-yellow-400 font-semibold">"AI Prediction"</span> দেখে রিভিশন শুরু করুন।
                            </p>
                        </div>
                        {/* Desktop countdown */}
                        <div className="hidden md:block">
                            <Countdown compact className="bg-black/30 px-3 py-1.5 rounded-lg border border-yellow-500/20 glow-gold" />
                        </div>
                    </div>
                </section>

                {/* Marks Distribution */}
                <section className="lg:col-span-4 glass-panel p-4 rounded-xl">
                    <h3 className="font-bold text-sm text-slate-200 mb-2 border-b border-white/5 pb-2 flex items-center gap-2">
                        <Sparkles size={14} className="text-blue-400" />
                        মার্কস ডিস্ট্রিবিউশন
                    </h3>
                    <MarksChart />
                </section>
            </div>

            {/* Row 2: Hot Topics - Full width */}
            <section id="hot-topics" className="glass-panel p-4 rounded-xl">
                <h3 className="font-bold text-sm text-yellow-400 mb-3 border-b border-white/5 pb-2 flex items-center gap-2">
                    <span className="star-pulse">⭐</span> হট টপিক (হাই প্রায়োরিটি)
                </h3>
                <HotTopics />
            </section>
        </div>
    )
}
