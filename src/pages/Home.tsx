import { MarksChart } from "@/components/dashboard/MarksChart";
import { HotTopics } from "@/components/dashboard/HotTopics";
import { Countdown } from "@/components/dashboard/Countdown";
import { Rocket, Sparkles } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';

export default function Home() {
    const { days } = useCountdown();

    return (
        <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            {/* Welcome Banner */}
            <section className="glass-panel p-6 md:p-8 rounded-2xl border-l-4 border-l-yellow-500 relative overflow-hidden group hover-lift">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Rocket size={120} className="md:w-40 md:h-40" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">মিশন ২৫-২৬: শেষ মুহূর্তের প্রস্তুতি</h2>
                        <p className="text-slate-400 text-sm md:text-base relative z-10 max-w-xl">
                            হাতে আছে মাত্র <span className="text-yellow-400 font-bold text-lg">{days} দিন</span>। নিচের <span className="text-yellow-400 font-semibold">"AI Prediction"</span> গুলো দেখে রিভিশন শুরু করুন।
                        </p>
                    </div>
                    {/* Desktop countdown in banner */}
                    <div className="hidden md:block">
                        <Countdown compact className="bg-black/30 px-6 py-3 rounded-xl border border-yellow-500/20 glow-gold" />
                    </div>
                </div>
            </section>

            {/* Mobile Countdown (More prominent) */}
            <section className="md:hidden">
                <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/10">
                    <Countdown compact={false} />
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Marks Distribution - smaller on desktop */}
                <section className="lg:col-span-2 glass-panel p-6 rounded-2xl hover-lift">
                    <h3 className="font-bold text-lg text-slate-200 mb-4 border-b border-white/5 pb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-blue-400" />
                        মার্কস ডিস্ট্রিবিউশন
                    </h3>
                    <MarksChart />
                </section>

                {/* Hot Topics - larger on desktop */}
                <section id="hot-topics" className="lg:col-span-3 glass-panel p-6 rounded-2xl h-full">
                    <h3 className="font-bold text-lg text-yellow-400 mb-4 border-b border-white/5 pb-2 flex items-center gap-2">
                        <span className="star-pulse">⭐</span> হট টপিক (হাই প্রায়োরিটি)
                    </h3>
                    <HotTopics />
                </section>
            </div>
        </div>
    )
}
